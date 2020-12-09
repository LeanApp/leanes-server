"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc0F1dGhvcml6ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwiVXRpbHMiLCJqb2kiLCJzdGF0dXNlcyIsIk5TIiwiVU5BVVRIT1JJWkVEIiwiRk9SQklEREVOIiwiVXNlcnNBdXRob3JpemVFbmRwb2ludCIsImNvbnN0cnVjdG9yIiwiYXJndW1lbnRzIiwiYm9keSIsIm9iamVjdCIsInVzZXJuYW1lIiwic3RyaW5nIiwibWluIiwib3B0aW9uYWwiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicmVzcG9uc2UiLCJlcnJvciIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsIl9fZmlsZW5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxJQUZoQjtBQUVzQkMsSUFBQUEsTUFGdEI7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEdBQUY7QUFBT0MsTUFBQUE7QUFBUDtBQUhILE1BSUZSLE1BQU0sQ0FBQ1MsRUFKWDtBQU1BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNRyxTQUFTLEdBQUdILFFBQVEsQ0FBQyxXQUFELENBQTFCO0FBUnlCLE1BWW5CSSxzQkFabUIsV0FXeEJULE1BQU0sQ0FBQ0gsTUFBRCxDQVhrQixFQVV4QkUsVUFWd0Isc0RBVXpCLE1BRU1VLHNCQUZOLFNBRXFDWCxlQUZyQyxDQUVxRDtBQUluRFksSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsSUFBTCxDQUFVUixHQUFHLENBQUNTLE1BQUosQ0FBVztBQUNqQkMsUUFBQUEsUUFBUSxFQUFFVixHQUFHLENBQUNXLE1BQUosR0FBYUMsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsUUFBcEIsRUFETztBQUVqQkMsUUFBQUEsUUFBUSxFQUFFZCxHQUFHLENBQUNXLE1BQUosR0FBYUMsR0FBYixDQUFpQixDQUFqQixFQUFvQkcsUUFBcEI7QUFGTyxPQUFYLEVBR0xBLFFBSEssRUFBVixFQUdpQixhQUhqQixFQUlHQyxRQUpILENBSVksSUFKWixFQUtHQyxLQUxILENBS1NkLFlBTFQsRUFNR2MsS0FOSCxDQU1TYixTQU5ULEVBT0djLE9BUEgsQ0FPVywrQkFQWCxFQVFHQyxXQVJILENBUWUsNEJBUmY7QUFTRDs7QUFma0QsR0FaNUIsVUFhUkMsVUFiUSxHQWFLQSxVQWJMLFVBY1ZYLE1BZFUsR0FjRCxFQWRDLDJFQWF0QlgsTUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFjdEJELElBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE2QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LFxuICAgIFV0aWxzOiB7IGpvaSwgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgRk9SQklEREVOID0gc3RhdHVzZXMoJ2ZvcmJpZGRlbicpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBVc2Vyc0F1dGhvcml6ZUVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLmJvZHkoam9pLm9iamVjdCh7XG4gICAgICAgICAgdXNlcm5hbWU6IGpvaS5zdHJpbmcoKS5taW4oMikub3B0aW9uYWwoKSxcbiAgICAgICAgICBwYXNzd29yZDogam9pLnN0cmluZygpLm1pbig0KS5yZXF1aXJlZCgpLFxuICAgICAgICB9KS5yZXF1aXJlZCgpLCAnQ3JlZGVudGlhbHMnKVxuICAgICAgICAucmVzcG9uc2UobnVsbClcbiAgICAgICAgLmVycm9yKFVOQVVUSE9SSVpFRClcbiAgICAgICAgLmVycm9yKEZPUkJJRERFTilcbiAgICAgICAgLnN1bW1hcnkoJ0F1dGhvcml6ZSB1c2VyIGJ5IGNyZWRlbnRpYWxzJylcbiAgICAgICAgLmRlc2NyaXB0aW9uKCdMb2dzIGEgcmVnaXN0ZXJlZCB1c2VyIGluLicpO1xuICAgIH1cbiAgfVxufVxuIl19