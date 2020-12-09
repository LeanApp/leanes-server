// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.

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
