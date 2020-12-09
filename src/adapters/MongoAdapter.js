// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.

import type { DriverInterface } from '../interfaces/DriverInterface';

export default (Module) => {
  const {
    Adapter,
    ConfigurableMixin,
    MongoAdapterMixin,
    initialize, partOf, meta, property, nameBy, mixin,
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(MongoAdapterMixin)
  @mixin(ConfigurableMixin)
  class MongoAdapter extends Adapter implements DriverInterface {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @property get host(): string {
      return this.configs['mongodb'].host;
    };

    @property get port(): string {
      return this.configs['mongodb'].port;
    };

    @property get dbName(): string {
      return this.configs['mongodb'].dbName;
    };

    @property get username(): ?string {
      return this.configs['mongodb'].username;
    };

    @property get password(): ?string {
      return this.configs['mongodb'].password;
    };
  }
}
