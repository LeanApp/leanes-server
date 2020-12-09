"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
var _default = Module => {
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    SwaggerEndpoint,
    initialize,
    partOf,
    meta,
    nameBy,
    Utils: {
      joi,
      statuses
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const FORBIDDEN = statuses('forbidden');
  let UsersAuthorizeEndpoint = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class UsersAuthorizeEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.body(joi.object({
        username: joi.string().min(2).optional(),
        password: joi.string().min(4).required()
      }).required(), 'Credentials').response(null).error(UNAUTHORIZED).error(FORBIDDEN).summary('Authorize user by credentials').description('Logs a registered user in.');
    }

  }, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init2 = Object.getOwnPropertyDescriptor(_class2, "object"), _init2 = _init2 ? _init2.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init2;
    }
  }), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc0F1dGhvcml6ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwiVXRpbHMiLCJqb2kiLCJzdGF0dXNlcyIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiRk9SQklEREVOIiwiVXNlcnNBdXRob3JpemVFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiYm9keSIsIm9iamVjdCIsInVzZXJuYW1lIiwic3RyaW5nIiwibWluIiwib3B0aW9uYWwiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxJQUZoQjtBQUVzQkMsSUFBQUEsTUFGdEI7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEdBQUY7QUFBT0MsTUFBQUE7QUFBUDtBQUhILE1BSUZSLE1BQU0sQ0FBQ1MsRUFKWDtBQU1BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNRyxTQUFTLEdBQUdILFFBQVEsQ0FBQyxXQUFELENBQTFCO0FBUnlCLE1BWW5CSSxzQkFabUIsV0FXeEJULE1BQU0sQ0FBQ0gsTUFBRCxDQVhrQixFQVV4QkUsVUFWd0Isc0RBVXpCLE1BRU1VLHNCQUZOLFNBRXFDWCxlQUZyQyxDQUVxRDtBQUluRFksSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsSUFBTCxDQUFVUixHQUFHLENBQUNTLE1BQUosQ0FBVztBQUNqQkMsUUFBQUEsUUFBUSxFQUFFVixHQUFHLENBQUNXLE1BQUosR0FBYUMsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsUUFBcEIsRUFETztBQUVqQkMsUUFBQUEsUUFBUSxFQUFFZCxHQUFHLENBQUNXLE1BQUosR0FBYUMsR0FBYixDQUFpQixDQUFqQixFQUFvQkcsUUFBcEI7QUFGTyxPQUFYLEVBR0xBLFFBSEssRUFBVixFQUdpQixhQUhqQixFQUlHQyxRQUpILENBSVksSUFKWixFQUtHQyxLQUxILENBS1NkLFlBTFQsRUFNR2MsS0FOSCxDQU1TYixTQU5ULEVBT0djLE9BUEgsQ0FPVywrQkFQWCxFQVFHQyxXQVJILENBUWUsNEJBUmY7QUFTRDs7QUFma0QsR0FaNUIsVUFhUkMsVUFiUSxHQWFLQSxVQWJMLFVBY1ZYLE1BZFUsR0FjRCxFQWRDLDJFQWF0QlgsTUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFjdEJELElBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksXG4gICAgVXRpbHM6IHsgam9pLCBzdGF0dXNlcyB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3QgVU5BVVRIT1JJWkVEID0gc3RhdHVzZXMoJ3VuYXV0aG9yaXplZCcpO1xuICBjb25zdCBGT1JCSURERU4gPSBzdGF0dXNlcygnZm9yYmlkZGVuJyk7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFVzZXJzQXV0aG9yaXplRW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMuYm9keShqb2kub2JqZWN0KHtcbiAgICAgICAgICB1c2VybmFtZTogam9pLnN0cmluZygpLm1pbigyKS5vcHRpb25hbCgpLFxuICAgICAgICAgIHBhc3N3b3JkOiBqb2kuc3RyaW5nKCkubWluKDQpLnJlcXVpcmVkKCksXG4gICAgICAgIH0pLnJlcXVpcmVkKCksICdDcmVkZW50aWFscycpXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoRk9SQklEREVOKVxuICAgICAgICAuc3VtbWFyeSgnQXV0aG9yaXplIHVzZXIgYnkgY3JlZGVudGlhbHMnKVxuICAgICAgICAuZGVzY3JpcHRpb24oJ0xvZ3MgYSByZWdpc3RlcmVkIHVzZXIgaW4uJyk7XG4gICAgfVxuICB9XG59XG4iXX0=