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
      joi
    }
  } = Module.NS;
  let UsersSignupEndpoint = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class UsersSignupEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.body(joi.object({
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
  }), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc1NpZ251cEVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwiVXRpbHMiLCJqb2kiLCJOUyIsIlVzZXJzU2lnbnVwRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImJvZHkiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsIm1pbiIsIm9wdGlvbmFsIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInJlc3BvbnNlIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxVQUZJO0FBRVFDLElBQUFBLE1BRlI7QUFFZ0JDLElBQUFBLElBRmhCO0FBRXNCQyxJQUFBQSxNQUZ0QjtBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUhILE1BSUZQLE1BQU0sQ0FBQ1EsRUFKWDtBQUR5QixNQVNuQkMsbUJBVG1CLFdBUXhCTixNQUFNLENBQUNILE1BQUQsQ0FSa0IsRUFPeEJFLFVBUHdCLHNEQU96QixNQUVNTyxtQkFGTixTQUVrQ1IsZUFGbEMsQ0FFa0Q7QUFJaERTLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLElBQUwsQ0FBVUwsR0FBRyxDQUFDTSxNQUFKLENBQVc7QUFDakJDLFFBQUFBLEtBQUssRUFBRVAsR0FBRyxDQUFDUSxNQUFKLEdBQWFDLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLFFBQXBCLEVBRFU7QUFFakJDLFFBQUFBLFFBQVEsRUFBRVgsR0FBRyxDQUFDUSxNQUFKLEdBQWFDLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JHLFFBQXBCO0FBRk8sT0FBWCxFQUdMQSxRQUhLLEVBQVYsRUFHaUIsYUFIakIsRUFJR0MsUUFKSCxDQUlZLElBSlosRUFLR0MsT0FMSCxDQUtXLGlCQUxYLEVBTUdDLFdBTkgsQ0FNZSxvQkFOZjtBQU9EOztBQWIrQyxHQVR6QixVQVVSQyxVQVZRLEdBVUtBLFVBVkwsVUFXVlYsTUFYVSxHQVdELEVBWEMsMkVBVXRCUixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkQsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFN3YWdnZXJFbmRwb2ludCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSxcbiAgICBVdGlsczogeyBqb2kgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBVc2Vyc1NpZ251cEVuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLmJvZHkoam9pLm9iamVjdCh7XG4gICAgICAgICAgZW1haWw6IGpvaS5zdHJpbmcoKS5taW4oMikub3B0aW9uYWwoKSxcbiAgICAgICAgICBwYXNzd29yZDogam9pLnN0cmluZygpLm1pbig0KS5yZXF1aXJlZCgpLFxuICAgICAgICB9KS5yZXF1aXJlZCgpLCAnQ3JlZGVudGlhbHMnKVxuICAgICAgICAucmVzcG9uc2UobnVsbClcbiAgICAgICAgLnN1bW1hcnkoJ1NpZ251cCBuZXcgdXNlcicpXG4gICAgICAgIC5kZXNjcmlwdGlvbignQ3JlYXRlIGEgbmV3IHVzZXIuJyk7XG4gICAgfVxuICB9XG59XG4iXX0=