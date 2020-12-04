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
    Router,
    initialize, partOf, meta, method, nameBy,
  } = Module.NS;

  @initialize
  @partOf(Module)
  class ApplicationRouter extends Router {
    @nameBy static  __filename = __filename;
    @meta static object = {};

    @method map() {
      this.resource('test2', function () {
        this.resource('test2');
      });
    }
  }
}
