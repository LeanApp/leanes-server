// This file is part of leanes-swagger-addon.
//
// leanes-swagger-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-swagger-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-swagger-addon.  If not, see <https://www.gnu.org/licenses/>.

export default (Module) => {
  const {
    SwaggerEndpoint,
    initialize, partOf, meta, nameBy,
    Utils: { joi, statuses }
  } = Module.NS;

  const UNAUTHORIZED = statuses('unauthorized');
  const FORBIDDEN = statuses('forbidden');

  @initialize
  @partOf(Module)
  class UsersAuthorizeEndpoint extends SwaggerEndpoint {
    @nameBy static __filename = __filename;
    @meta static object = {};

    constructor() {
      super(...arguments);
      this.body(joi.object({
          username: joi.string().min(2).optional(),
          password: joi.string().min(4).required(),
        }).required(), 'Credentials')
        .response(null)
        .error(UNAUTHORIZED)
        .error(FORBIDDEN)
        .summary('Authorize user by credentials')
        .description('Logs a registered user in.');
    }
  }
}
