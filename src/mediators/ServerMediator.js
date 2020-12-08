// This file is part of leanes-server.
//
// leanes-server is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-server is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-server.  If not, see <https://www.gnu.org/licenses/>.

export default (Module) => {
  const {
    JSON_RENDERER,
    HttpMediator,
    initialize, partOf, meta, nameBy, method, property, mixin
  } = Module.NS;

  @initialize
  @partOf(Module)
  class ServerMediator extends HttpMediator {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    // @property htmlRendererName: string = JSON_RENDERER;

    @property get responseFormats(): string[] {
      return ['application/octet-stream', 'json', 'html', 'xml', 'atom', 'text'];
    }
  }
}
