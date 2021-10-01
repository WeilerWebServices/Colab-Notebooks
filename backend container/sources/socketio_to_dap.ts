/*
 * Copyright 2020 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import * as childProcess from 'child_process';
import * as crypto from 'crypto';
import * as http from 'http';
import * as logging from './logging';
import * as socketio from 'socket.io';
import * as net from 'net';

let sessionCounter = 0;

/** Socket.io<->debug adapter. */
class Session {
  private readonly id: number;
  private dapSocket?: net.Socket;

  constructor(private readonly clientSocket: SocketIO.Socket, domainSocketPath: string) {
    this.id = sessionCounter++;

    this.clientSocket.on('disconnect', () => {
      logging.getLogger().debug('Socket disconnected for session %d', this.id);

      // Handle client disconnects to close sockets, so as to free up resources.
      this.close();
    });

    this.connect(domainSocketPath);
  }

  private close() {
    if (this.dapSocket) {
      this.dapSocket.destroy();
    }
    this.clientSocket.disconnect(true);
  }

  private async connect(domainSocketPath: string): Promise<void> {
    try {
      logging.getLogger().info(
          'Creating Socket to %s for session %d', domainSocketPath, this.id);

      const dapSocket = new net.Socket();
      this.dapSocket = dapSocket;
      dapSocket.on('data', (data: Buffer) => {
        this.clientSocket.emit('data', data);
      });
      dapSocket.on('close', () => {
        this.close();
      });
      await new Promise((resolve, reject) => {
        dapSocket.on('error', reject);
        dapSocket.connect(domainSocketPath, resolve);
      });

      // Notify the client that the connection.is now open.
      this.clientSocket.emit('open');

      this.clientSocket.on('data', (data: Buffer) => {
        dapSocket.write(Uint8Array.from(data));
      });
    } catch (error) {
      logging.getLogger().error('Error connecting to Debug Adapter: %s', error);
      this.close();
    }
  }
}

/** SocketIO to Debug Adapter Protocol. */
export class SocketIoToDap {
  private readonly portPromise: Promise<string>;
  constructor(private readonly path: string, muxBinary: string, server: http.Server) {
    this.portPromise = this.spawnMultiplexer(muxBinary);


    const io = socketio(server, {
      path: '/debugger',
      transports: ['polling'],
      allowUpgrades: false,
      // v2.10 changed default from 60s to 5s, prefer the longer timeout to
      // avoid errant disconnects.
      pingTimeout: 60000,
    });

    io.of('/').on('connection', (socket: SocketIO.Socket) => {
      this.portPromise.then((domainSocketPath) => {
        // Session manages its own lifetime.
        // tslint:disable-next-line:no-unused-expression
        new Session(socket, domainSocketPath);
      });
    });
  }

  private async spawnMultiplexer(muxBinary: string): Promise<string> {
    const filename = `/tmp/debugger_${crypto.randomBytes(6).readUIntLE(0,6).toString(36)}`;
    const muxProcess = childProcess.spawn(muxBinary, [
      `--domain_socket_path=${filename}`,
    ]);

    muxProcess.stdout.on('data', (data: string) => {
      logging.getLogger().info('%s: %s', muxBinary, data);
    });
    muxProcess.stdout.on('error', (data: string) => {
      logging.getLogger().info('%s: %s', muxBinary, data);
    });

    let muxOutput = '';
    await new Promise((resolve, reject) => {
      const connectionHandler = (data: string) => {
        muxOutput += data;
        // Wait for the process to indicate that it is listening.
        if (muxOutput.match(/Listening on /)) {
          muxProcess.stdout.off('data', connectionHandler);
          resolve();
        }
      };
      muxProcess.stdout.on('data', connectionHandler);
      muxProcess.stdout.on('error', reject);
    });
    return filename;
  }

  /** Return true iff path is handled by socket.io. */
  isPathProxied(path: string): boolean {
    return path.startsWith(this.path + '/');
  }
}
