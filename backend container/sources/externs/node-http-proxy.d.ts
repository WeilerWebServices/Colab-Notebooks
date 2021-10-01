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

declare module 'http-proxy' {
  import events = require('events');
  import http = require('http');
  import net = require('net');

  export interface ProxyServerOptions {
    target: string;
  }

  export interface ProxyServer extends events.EventEmitter {
    options: ProxyServerOptions;
    web(request: http.IncomingMessage, response: http.ServerResponse,
        options: ProxyServerOptions|null): void;
    ws(request: http.IncomingMessage, socket: net.Socket, head: Buffer): void;
    listen(options: any): void;
    close(): void;
  }

  export function createProxyServer(options: ProxyServerOptions|
                                    null): ProxyServer;
}
