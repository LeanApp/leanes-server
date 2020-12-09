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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9Vc2Vyc1NpZ251cEVuZHBvaW50LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlN3YWdnZXJFbmRwb2ludCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwiVXRpbHMiLCJqb2kiLCJOUyIsIlVzZXJzU2lnbnVwRW5kcG9pbnQiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImJvZHkiLCJvYmplY3QiLCJlbWFpbCIsInN0cmluZyIsIm1pbiIsIm9wdGlvbmFsIiwicGFzc3dvcmQiLCJyZXF1aXJlZCIsInJlc3BvbnNlIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiX19maWxlbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUVKQyxJQUFBQSxVQUZJO0FBRVFDLElBQUFBLE1BRlI7QUFFZ0JDLElBQUFBLElBRmhCO0FBRXNCQyxJQUFBQSxNQUZ0QjtBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUhILE1BSUZQLE1BQU0sQ0FBQ1EsRUFKWDtBQUR5QixNQVNuQkMsbUJBVG1CLFdBUXhCTixNQUFNLENBQUNILE1BQUQsQ0FSa0IsRUFPeEJFLFVBUHdCLHNEQU96QixNQUVNTyxtQkFGTixTQUVrQ1IsZUFGbEMsQ0FFa0Q7QUFJaERTLElBQUFBLFdBQVcsR0FBRztBQUNaLFlBQU0sR0FBR0MsU0FBVDtBQUNBLFdBQUtDLElBQUwsQ0FBVUwsR0FBRyxDQUFDTSxNQUFKLENBQVc7QUFDakJDLFFBQUFBLEtBQUssRUFBRVAsR0FBRyxDQUFDUSxNQUFKLEdBQWFDLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JDLFFBQXBCLEVBRFU7QUFFakJDLFFBQUFBLFFBQVEsRUFBRVgsR0FBRyxDQUFDUSxNQUFKLEdBQWFDLEdBQWIsQ0FBaUIsQ0FBakIsRUFBb0JHLFFBQXBCO0FBRk8sT0FBWCxFQUdMQSxRQUhLLEVBQVYsRUFHaUIsYUFIakIsRUFJR0MsUUFKSCxDQUlZLElBSlosRUFLR0MsT0FMSCxDQUtXLGlCQUxYLEVBTUdDLFdBTkgsQ0FNZSxvQkFOZjtBQU9EOztBQWIrQyxHQVR6QixVQVVSQyxVQVZRLEdBVUtBLFVBVkwsVUFXVlYsTUFYVSxHQVdELEVBWEMsMkVBVXRCUixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkQsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXN3YWdnZXItYWRkb24gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXN3YWdnZXItYWRkb24uICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksXG4gICAgVXRpbHM6IHsgam9pIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgVXNlcnNTaWdudXBFbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5ib2R5KGpvaS5vYmplY3Qoe1xuICAgICAgICAgIGVtYWlsOiBqb2kuc3RyaW5nKCkubWluKDIpLm9wdGlvbmFsKCksXG4gICAgICAgICAgcGFzc3dvcmQ6IGpvaS5zdHJpbmcoKS5taW4oNCkucmVxdWlyZWQoKSxcbiAgICAgICAgfSkucmVxdWlyZWQoKSwgJ0NyZWRlbnRpYWxzJylcbiAgICAgICAgLnJlc3BvbnNlKG51bGwpXG4gICAgICAgIC5zdW1tYXJ5KCdTaWdudXAgbmV3IHVzZXInKVxuICAgICAgICAuZGVzY3JpcHRpb24oJ0NyZWF0ZSBhIG5ldyB1c2VyLicpO1xuICAgIH1cbiAgfVxufVxuIl19