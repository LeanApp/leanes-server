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
    nameBy,
    meta,
    Utils: {
      joi
    }
  } = Module.NS;
  let ItselfInfoEndpoint = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class ItselfInfoEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.response(joi.object({
        info: joi.object({
          name: joi.string(),
          description: joi.string(),
          license: joi.string(),
          version: joi.string(),
          keywords: joi.array().items(joi.string())
        })
      }), 'Information').summary('Service info').description('Info about this service');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9JdHNlbGZJbmZvRW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsImpvaSIsIk5TIiwiSXRzZWxmSW5mb0VuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJyZXNwb25zZSIsIm9iamVjdCIsImluZm8iLCJuYW1lIiwic3RyaW5nIiwiZGVzY3JpcHRpb24iLCJsaWNlbnNlIiwidmVyc2lvbiIsImtleXdvcmRzIiwiYXJyYXkiLCJpdGVtcyIsInN1bW1hcnkiLCJfX2ZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxlQURJO0FBRUpDLElBQUFBLFVBRkk7QUFFUUMsSUFBQUEsTUFGUjtBQUVnQkMsSUFBQUEsTUFGaEI7QUFFd0JDLElBQUFBLElBRnhCO0FBR0pDLElBQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQTtBQUFGO0FBSEgsTUFJRlAsTUFBTSxDQUFDUSxFQUpYO0FBRHlCLE1BU25CQyxrQkFUbUIsV0FReEJOLE1BQU0sQ0FBQ0gsTUFBRCxDQVJrQixFQU94QkUsVUFQd0Isc0RBT3pCLE1BRU1PLGtCQUZOLFNBRWlDUixlQUZqQyxDQUVpRDtBQUkvQ1MsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFHQyxTQUFUO0FBQ0EsV0FBS0MsUUFBTCxDQUFjTCxHQUFHLENBQUNNLE1BQUosQ0FBVztBQUNyQkMsUUFBQUEsSUFBSSxFQUFFUCxHQUFHLENBQUNNLE1BQUosQ0FBVztBQUNmRSxVQUFBQSxJQUFJLEVBQUVSLEdBQUcsQ0FBQ1MsTUFBSixFQURTO0FBRWZDLFVBQUFBLFdBQVcsRUFBRVYsR0FBRyxDQUFDUyxNQUFKLEVBRkU7QUFHZkUsVUFBQUEsT0FBTyxFQUFFWCxHQUFHLENBQUNTLE1BQUosRUFITTtBQUlmRyxVQUFBQSxPQUFPLEVBQUVaLEdBQUcsQ0FBQ1MsTUFBSixFQUpNO0FBS2ZJLFVBQUFBLFFBQVEsRUFBRWIsR0FBRyxDQUFDYyxLQUFKLEdBQVlDLEtBQVosQ0FBa0JmLEdBQUcsQ0FBQ1MsTUFBSixFQUFsQjtBQUxLLFNBQVg7QUFEZSxPQUFYLENBQWQsRUFRTSxhQVJOLEVBU0dPLE9BVEgsQ0FTVyxjQVRYLEVBVUdOLFdBVkgsQ0FVZSx5QkFWZjtBQVdEOztBQWpCOEMsR0FUeEIsVUFVUk8sVUFWUSxHQVVLQSxVQVZMLFVBV1ZYLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlQsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJDLElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE0QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc3dhZ2dlci1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtc3dhZ2dlci1hZGRvbiBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zd2FnZ2VyLWFkZG9uIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zd2FnZ2VyLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU3dhZ2dlckVuZHBvaW50LFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbmFtZUJ5LCBtZXRhLFxuICAgIFV0aWxzOiB7IGpvaSB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIEl0c2VsZkluZm9FbmRwb2ludCBleHRlbmRzIFN3YWdnZXJFbmRwb2ludCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgdGhpcy5yZXNwb25zZShqb2kub2JqZWN0KHtcbiAgICAgICAgICBpbmZvOiBqb2kub2JqZWN0KHtcbiAgICAgICAgICAgIG5hbWU6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgICBsaWNlbnNlOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgICB2ZXJzaW9uOiBqb2kuc3RyaW5nKCksXG4gICAgICAgICAgICBrZXl3b3Jkczogam9pLmFycmF5KCkuaXRlbXMoam9pLnN0cmluZygpKSxcbiAgICAgICAgICB9KVxuICAgICAgICB9KSwgJ0luZm9ybWF0aW9uJylcbiAgICAgICAgLnN1bW1hcnkoJ1NlcnZpY2UgaW5mbycpXG4gICAgICAgIC5kZXNjcmlwdGlvbignSW5mbyBhYm91dCB0aGlzIHNlcnZpY2UnKVxuICAgIH1cbiAgfVxufVxuIl19