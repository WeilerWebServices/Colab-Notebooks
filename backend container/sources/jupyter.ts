/*
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import * as childProcess from 'child_process';
import * as http from 'http';
import * as httpProxy from 'http-proxy';
import * as net from 'net';
import * as path from 'path';

import {AppSettings} from './appSettings';
import * as logging from './logging';

interface JupyterServer {
  port: number;
  childProcess: childProcess.ChildProcess;
  proxy: httpProxy.ProxyServer;
}

/**
 * Singleton tracking the jupyter server instance we manage.
 */
let jupyterServer: JupyterServer|null = null;

/**
 * The maximum number of times we'll restart jupyter; we set a limit to avoid
 * users being stuck with a slow-crash-looping server.
 */
let remainingJupyterServerRestarts: number = 20;

/**
 * The application settings instance.
 */
let appSettings: AppSettings;

/*
 * This list of levels should match the ones used by Python:
 *   https://docs.python.org/3/library/logging.html#logging-levels
 */
const enum LogLevels {
  Critical = 'CRITICAL',
  Error = 'ERROR',
  Warning = 'WARNING',
  Info = 'INFO',
  Debug = 'DEBUG',
  NotSet = 'NOTSET',
}

function pipeOutput(stream: NodeJS.ReadableStream) {
  stream.setEncoding('utf8');

  // The format we parse here corresponds to the log format we set in our
  // jupyter configuration.
  const logger = logging.getJupyterLogger();
  stream.on('data', (data: string) => {
    for (const line of data.split('\n')) {
      if (line.trim().length === 0) {
        continue;
      }
      const parts = line.split('|', 3);
      if (parts.length !== 3) {
        // Non-logging messages (eg tracebacks) get logged as warnings.
        logger.warn(line);
        continue;
      }
      const level = parts[1];
      const message = parts[2];
      // We need to map Python's log levels to those used by bunyan.
      if (level === LogLevels.Critical || level === LogLevels.Error) {
        logger.error(message);
      } else if (level === LogLevels.Warning) {
        logger.warn(message);
      } else if (level === LogLevels.Info) {
        logger.info(message);
      } else {
        // We map DEBUG, NOTSET, and any unknown log levels to debug.
        logger.debug(message);
      }
    }
  });
}

function createJupyterServer() {
  if (!remainingJupyterServerRestarts) {
    logging.getLogger().error('No jupyter restart attempts remaining.');
    return;
  }
  remainingJupyterServerRestarts -= 1;
  const port = appSettings.nextJupyterPort;
  logging.getLogger().info('Launching Jupyter server at %d', port);

  function exitHandler(code: number, signal: string): void {
    if (jupyterServer) {
      logging.getLogger().error(
          'Jupyter process %d exited due to signal: %s',
          jupyterServer.childProcess.pid, signal);
    } else {
      logging.getLogger().error(
        'Jupyter process exit before server creation finished due to signal: %s',
        signal);
    }
    // We want to restart jupyter whenever it terminates.
    createJupyterServer();
  }

  const contentDir = path.join(appSettings.datalabRoot, appSettings.contentDir);
  const processArgs = ['notebook'].concat(appSettings.jupyterArgs).concat([
    `--port=${port}`,
    `--FileContentsManager.root_dir="${appSettings.datalabRoot}/"`,
    `--LargeFileManager.delete_to_trash=False`,
    `--MappingKernelManager.root_dir="${contentDir}"`,
  ]);

  let jupyterServerAddr = 'localhost';
  for (const flag of appSettings.jupyterArgs) {
    // Extracts a string like '1.2.3.4' from the string '--ip="1.2.3.4"'
    const match = flag.match(/--ip="([^"]+)"/);
    if (match) {
      jupyterServerAddr = match[1];
      break;
    }
  }
  logging.getLogger().info(
      'Using jupyter server address %s', jupyterServerAddr);

  const processOptions = {
    detached: false,
    env: process.env,
  };

  const serverProcess =
      childProcess.spawn('jupyter', processArgs, processOptions);
  serverProcess.on('exit', exitHandler);
  logging.getLogger().info(
      'Jupyter process started with pid %d and args %j', serverProcess.pid,
      processArgs);

  // Capture the output, so it can be piped for logging.
  pipeOutput(serverProcess.stdout);
  pipeOutput(serverProcess.stderr);

  // Create the proxy.
  const proxyTargetHost =
      appSettings.kernelManagerProxyHost || jupyterServerAddr;
  const proxyTargetPort = appSettings.kernelManagerProxyPort || port;

  const proxy = httpProxy.createProxyServer(
      {target: `http://${proxyTargetHost}:${proxyTargetPort}`});
  proxy.on('error', errorHandler);

  jupyterServer = {port, proxy, childProcess: serverProcess};
}

/**
 * Initializes the Jupyter server manager.
 */
export function init(settings: AppSettings): void {
  appSettings = settings;
  createJupyterServer();
}

/**
 * Closes the Jupyter server manager.
 */
export function close(): void {
  if (!jupyterServer) {
    return;
  }

  const pid = jupyterServer!.childProcess.pid;
  logging.getLogger().info(`jupyter close: PID: ${pid}`);
  jupyterServer.childProcess.kill('SIGHUP');
}

/** Proxy this socket request to jupyter. */
export function handleSocket(request: http.IncomingMessage, socket: net.Socket, head: Buffer) {
  if (!jupyterServer) {
    logging.getLogger().error('Jupyter server is not running.');
    return;
  }
  jupyterServer.proxy.ws(request, socket, head);
}

/** Proxy this HTTP request to jupyter. */
export function handleRequest(request: http.IncomingMessage, response: http.ServerResponse) {
  if (!jupyterServer) {
    response.statusCode = 500;
    response.end();
    return;
  }

  jupyterServer.proxy.web(request, response, null);
}

function errorHandler(error: Error, request: http.IncomingMessage, response: http.ServerResponse) {
  logging.getLogger().error(error, 'Jupyter server returned error.');

  response.writeHead(500, 'Internal Server Error');
  response.end();
}
