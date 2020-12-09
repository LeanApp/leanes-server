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

import type { CollectionInterface } from '../interfaces/CollectionInterface';
import type { RecordInterface } from '../interfaces/RecordInterface';

export default (Module) => {
  const {
    USERS,
    BaseMigration,
    ConfigurableMixin,
    initialize, partOf, nameBy, meta, method, inject, property, mixin,
  } = Module.NS;

  @initialize
  @partOf(Module)
  @mixin(ConfigurableMixin)
  class GenerateAdminUserMigration< D = RecordInterface > extends BaseMigration {
    @meta static object = {};

    @inject(`Factory<${USERS}>`)
    @property _usersFactory: () => CollectionInterface<D>;
    @property get _users(): CollectionInterface<D> {
      return this._usersFactory()
    }
    @method static change() {
      this.reversible(async function ({ up, down }) {
        await up(async () => {
          await this.__users.create({
            email: this.configs.adminEmail,
            emailVerified: true,
            name: "admin",
            nickname: "admin",
            password: this.configs.adminPassword,
            isAdmin: true,
          })
        });
        await down(async () => {
          const admin = await this.__users.findBy({"@doc.email": this.configs.adminEmail})
          await admin.destroy()
        });
      });
    }
  }
}
