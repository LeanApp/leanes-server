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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    SwaggerEndpoint,
    CrudEndpointMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin,
    Utils: {
      joi,
      statuses
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  const FORBIDDEN = statuses('forbidden');
  let UsersAuthorizeEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class UsersAuthorizeEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).body(joi.object({
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
  }), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc0F1dGhvcml6ZUVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsIlV0aWxzIiwiam9pIiwic3RhdHVzZXMiLCJOUyIsIlVOQVVUSE9SSVpFRCIsIkZPUkJJRERFTiIsIlVzZXJzQXV0aG9yaXplRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInBhdGhQYXJhbSIsInZlcnNpb25TY2hlbWEiLCJib2R5Iiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJvcHRpb25hbCIsInBhc3N3b3JkIiwicmVxdWlyZWQiLCJyZXNwb25zZSIsImVycm9yIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsS0FIOUI7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEdBQUY7QUFBT0MsTUFBQUE7QUFBUDtBQUpILE1BS0ZWLE1BQU0sQ0FBQ1csRUFMWDtBQU9BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFDQSxRQUFNRyxTQUFTLEdBQUdILFFBQVEsQ0FBQyxXQUFELENBQTFCO0FBVHlCLE1BY25CSSxzQkFkbUIsV0FZeEJWLE1BQU0sQ0FBQ0osTUFBRCxDQVprQixVQWF4Qk8sS0FBSyxDQUFDTCxpQkFBRCxDQWJtQixFQVd4QkMsVUFYd0IscUVBV3pCLE1BR01XLHNCQUhOLFNBR3FDYixlQUhyQyxDQUdxRDtBQUluRGMsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsU0FBTCxDQUFlLEdBQWYsRUFBb0IsS0FBS0MsYUFBekIsRUFDR0MsSUFESCxDQUNRVixHQUFHLENBQUNXLE1BQUosQ0FBVztBQUNmQyxRQUFBQSxRQUFRLEVBQUVaLEdBQUcsQ0FBQ2EsTUFBSixHQUFhQyxHQUFiLENBQWlCLENBQWpCLEVBQW9CQyxRQUFwQixFQURLO0FBRWZDLFFBQUFBLFFBQVEsRUFBRWhCLEdBQUcsQ0FBQ2EsTUFBSixHQUFhQyxHQUFiLENBQWlCLENBQWpCLEVBQW9CRyxRQUFwQjtBQUZLLE9BQVgsRUFHSEEsUUFIRyxFQURSLEVBSWlCLGFBSmpCLEVBS0dDLFFBTEgsQ0FLWSxJQUxaLEVBTUdDLEtBTkgsQ0FNU2hCLFlBTlQsRUFPR2dCLEtBUEgsQ0FPU2YsU0FQVCxFQVFHZ0IsT0FSSCxDQVFXLCtCQVJYLEVBU0dDLFdBVEgsQ0FTZSw0QkFUZjtBQVVEOztBQWhCa0QsR0FkNUIsVUFlUkMsVUFmUSxHQWVLQSxVQWZMLFVBZ0JWWCxNQWhCVSxHQWdCRCxFQWhCQywyRUFldEJkLE1BZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBZ0J0QkQsSUFoQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IGpvaSwgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcbiAgY29uc3QgRk9SQklEREVOID0gc3RhdHVzZXMoJ2ZvcmJpZGRlbicpO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ3J1ZEVuZHBvaW50TWl4aW4pXG4gIGNsYXNzIFVzZXJzQXV0aG9yaXplRW5kcG9pbnQgZXh0ZW5kcyBTd2FnZ2VyRW5kcG9pbnQge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgIHRoaXMucGF0aFBhcmFtKCd2JywgdGhpcy52ZXJzaW9uU2NoZW1hKVxuICAgICAgICAuYm9keShqb2kub2JqZWN0KHtcbiAgICAgICAgICB1c2VybmFtZTogam9pLnN0cmluZygpLm1pbigyKS5vcHRpb25hbCgpLFxuICAgICAgICAgIHBhc3N3b3JkOiBqb2kuc3RyaW5nKCkubWluKDQpLnJlcXVpcmVkKCksXG4gICAgICAgIH0pLnJlcXVpcmVkKCksICdDcmVkZW50aWFscycpXG4gICAgICAgIC5yZXNwb25zZShudWxsKVxuICAgICAgICAuZXJyb3IoVU5BVVRIT1JJWkVEKVxuICAgICAgICAuZXJyb3IoRk9SQklEREVOKVxuICAgICAgICAuc3VtbWFyeSgnQXV0aG9yaXplIHVzZXIgYnkgY3JlZGVudGlhbHMnKVxuICAgICAgICAuZGVzY3JpcHRpb24oJ0xvZ3MgYSByZWdpc3RlcmVkIHVzZXIgaW4uJyk7XG4gICAgfVxuICB9XG59XG4iXX0=