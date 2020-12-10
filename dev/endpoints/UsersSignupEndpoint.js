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
      joi
    }
  } = Module.NS;
  let UsersSignupEndpoint = (_dec = partOf(Module), _dec2 = mixin(CrudEndpointMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class UsersSignupEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.pathParam('v', this.versionSchema).body(joi.object({
        email: joi.string().min(2).optional(),
        password: joi.string().min(4).required()
      }).required(), 'Credentials').response(null).summary('Signup new user').description('Create a new user.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc1NpZ251cEVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsIkNydWRFbmRwb2ludE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsIlV0aWxzIiwiam9pIiwiTlMiLCJVc2Vyc1NpZ251cEVuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJwYXRoUGFyYW0iLCJ2ZXJzaW9uU2NoZW1hIiwiYm9keSIsIm9iamVjdCIsImVtYWlsIiwic3RyaW5nIiwibWluIiwib3B0aW9uYWwiLCJwYXNzd29yZCIsInJlcXVpcmVkIiwicmVzcG9uc2UiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJfX2ZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUlKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUpILE1BS0ZULE1BQU0sQ0FBQ1UsRUFMWDtBQUR5QixNQVduQkMsbUJBWG1CLFdBU3hCUCxNQUFNLENBQUNKLE1BQUQsQ0FUa0IsVUFVeEJPLEtBQUssQ0FBQ0wsaUJBQUQsQ0FWbUIsRUFReEJDLFVBUndCLHFFQVF6QixNQUdNUSxtQkFITixTQUdrQ1YsZUFIbEMsQ0FHa0Q7QUFJaERXLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLEtBQUtDLGFBQXpCLEVBQ0dDLElBREgsQ0FDUVAsR0FBRyxDQUFDUSxNQUFKLENBQVc7QUFDZkMsUUFBQUEsS0FBSyxFQUFFVCxHQUFHLENBQUNVLE1BQUosR0FBYUMsR0FBYixDQUFpQixDQUFqQixFQUFvQkMsUUFBcEIsRUFEUTtBQUVmQyxRQUFBQSxRQUFRLEVBQUViLEdBQUcsQ0FBQ1UsTUFBSixHQUFhQyxHQUFiLENBQWlCLENBQWpCLEVBQW9CRyxRQUFwQjtBQUZLLE9BQVgsRUFHSEEsUUFIRyxFQURSLEVBSWlCLGFBSmpCLEVBS0dDLFFBTEgsQ0FLWSxJQUxaLEVBTUdDLE9BTkgsQ0FNVyxpQkFOWCxFQU9HQyxXQVBILENBT2Usb0JBUGY7QUFRRDs7QUFkK0MsR0FYekIsVUFZUkMsVUFaUSxHQVlLQSxVQVpMLFVBYVZWLE1BYlUsR0FhRCxFQWJDLDJFQVl0QlgsTUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFhdEJELElBYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEyQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgQ3J1ZEVuZHBvaW50TWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IGpvaSB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDcnVkRW5kcG9pbnRNaXhpbilcbiAgY2xhc3MgVXNlcnNTaWdudXBFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5wYXRoUGFyYW0oJ3YnLCB0aGlzLnZlcnNpb25TY2hlbWEpXG4gICAgICAgIC5ib2R5KGpvaS5vYmplY3Qoe1xuICAgICAgICAgIGVtYWlsOiBqb2kuc3RyaW5nKCkubWluKDIpLm9wdGlvbmFsKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKS5taW4oNCkucmVxdWlyZWQoKSxcbiAgICAgICAgfSkucmVxdWlyZWQoKSwgJ0NyZWRlbnRpYWxzJylcbiAgICAgICAgLnJlc3BvbnNlKG51bGwpXG4gICAgICAgIC5zdW1tYXJ5KCdTaWdudXAgbmV3IHVzZXInKVxuICAgICAgICAuZGVzY3JpcHRpb24oJ0NyZWF0ZSBhIG5ldyB1c2VyLicpO1xuICAgIH1cbiAgfVxufVxuIl19