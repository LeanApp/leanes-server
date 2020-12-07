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

type infoResult = {
  name: string,
  description: string,
  license: string,
  version: string,
  keywords: string[]
}

export default (Module) => {
  const {
    Resource,
    CorsMiddlewareMixin, ConfigurableMixin,
    initialize, partOf, nameBy, meta, action, chains, mixin,
  } = Module.NS;

  @initialize
  @chains([
    'info', 'cors'
  ], function () {
    this.initialHook('useCORS', {
      only: ['cors']
    });
    this.initialHook('checkSchemaVersion');
  })
  @partOf(Module)
  @mixin(CorsMiddlewareMixin)
  @mixin(ConfigurableMixin)
  class ItselfResource extends Resource {
    @nameBy static __filename = __filename;
    @meta static object = {};

    @action async cors(): Promise<void>{}

    @action async info(): Promise<infoResult> {
      const {
        name,
        description,
        license,
        version,
        keywords,
      } = this.configs
      return {
        name,
        description,
        license,
        version,
        keywords,
      }
    }
  }
}
