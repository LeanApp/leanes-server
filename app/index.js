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

import LeanES from '__LeanES__';
import FsUtilsAddon from '__FsUtilsAddon__';
import ConfigurableAddon from '__ConfigurableAddon__';
import {
  default as MapperAddon, MigratableModule, loadMigrations
} from '__MapperAddon__';
import MongoAddon from '__MongoAddon__';
import {
  default as RestfulAddon, TemplatableModule, loadTemplates
} from '__RestfulAddon__';
import QueryableAddon from '__QueryableAddon__';
import SwaggerAddon from '__SwaggerAddon__';

const { initialize, meta, nameBy, resolver, constant, plugin, loadFiles } = LeanES.NS;

@initialize
@loadFiles
@loadTemplates
@loadMigrations
@plugin(SwaggerAddon)
@plugin(QueryableAddon)
@plugin(TemplatableModule)
@plugin(RestfulAddon)
@plugin(MongoAddon)
@plugin(MigratableModule)
@plugin(MapperAddon)
@plugin(ConfigurableAddon)
@plugin(FsUtilsAddon)
@resolver(require, name => require(name))
class ServerApp extends LeanES {
  @meta static object = {};
  @constant ROOT = __dirname;
  @constant MIGRATIONS_ADAPTER = 'MigrationsAdapter';
  @constant USERS_ADAPTER = 'UsersAdapter';
  @constant USERS = 'UsersCollection';
  @constant SESSIONS_ADAPTER = 'SessionsAdapter';
  @constant SESSIONS = 'SessionsCollection';
}

export default ServerApp;
