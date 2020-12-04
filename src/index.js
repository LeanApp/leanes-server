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

console.log('>>>>QQQQ 000-+911*');

import LeanES from '__LeanES__';
import FsUtilsAddon from '__FsUtilsAddon__';
import ConfigurableAddon from '__ConfigurableAddon__';
import {
  default as MapperAddon, MigratableModule, loadMigrations
} from '__MapperAddon__';
import MongoAddon from '__MongoAddon__';

const { initialize, meta, nameBy, resolver, constant, plugin, loadFiles } = LeanES.NS;

console.log('>>>>QQQQ 111+');

@initialize
@loadFiles
@loadMigrations
@plugin(MongoAddon)
@plugin(MigratableModule)
@plugin(MapperAddon)
@plugin(ConfigurableAddon)
@plugin(FsUtilsAddon)
@resolver(require, name => require(name))
class serverApp extends LeanES {
  @nameBy static  __filename = 'serverApp';
  @meta static object = {};
  @constant ROOT = __dirname;
  @constant MAKE_REQUEST = 'MAKE_REQUEST';
  @constant MIGRATIONS_ADAPTER = 'MigrationsAdapter';
  @constant REQUEST_RESULTS_ADAPTER = 'RequestResultsAdapter';
  @constant REQUEST_RESULTS = 'RequestResultsCollection';
  @constant SIGNALS_GENERATOR = 'SignalsGenerator';
}

export default serverApp;
