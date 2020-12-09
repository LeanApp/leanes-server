"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
const infoResult = _flowRuntime.default.type("infoResult", _flowRuntime.default.object(_flowRuntime.default.property("name", _flowRuntime.default.string()), _flowRuntime.default.property("description", _flowRuntime.default.string()), _flowRuntime.default.property("license", _flowRuntime.default.string()), _flowRuntime.default.property("version", _flowRuntime.default.string()), _flowRuntime.default.property("keywords", _flowRuntime.default.array(_flowRuntime.default.string()))));

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _init2, _class3, _temp;

  const {
    NON_RENDERABLE,
    Resource,
    CorsMiddlewareMixin,
    ConfigurableMixin,
    initialize,
    partOf,
    nameBy,
    meta,
    action,
    chains,
    mixin
  } = Module.NS;
  let ItselfResource = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ItselfResource", _flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("cors", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.typeOf(NON_RENDERABLE)))), _flowRuntime.default.method("info", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", infoResult))))), _dec2 = chains(['info', 'cors'], function () {
    this.initialHook('useCORS', {
      only: ['cors']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(CorsMiddlewareMixin), _dec5 = mixin(ConfigurableMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_temp = _class3 = class ItselfResource extends Resource {
    async cors() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.typeOf(NON_RENDERABLE), _flowRuntime.default.ref("Promise", _flowRuntime.default.typeOf(NON_RENDERABLE))));

      return _returnType.assert(NON_RENDERABLE);
    }

    async info() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(infoResult, _flowRuntime.default.ref("Promise", infoResult)));

      const {
        name,
        description,
        license,
        version,
        keywords
      } = this.configs;
      return _returnType2.assert({
        name,
        description,
        license,
        version,
        keywords
      });
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cors", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "cors"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "info", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "info"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9JdHNlbGZSZXNvdXJjZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJOT05fUkVOREVSQUJMRSIsIlJlc291cmNlIiwiQ29yc01pZGRsZXdhcmVNaXhpbiIsIkNvbmZpZ3VyYWJsZU1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJhY3Rpb24iLCJjaGFpbnMiLCJtaXhpbiIsIk5TIiwiSXRzZWxmUmVzb3VyY2UiLCJpbml0aWFsSG9vayIsIm9ubHkiLCJjb3JzIiwiaW5mbyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImxpY2Vuc2UiLCJ2ZXJzaW9uIiwia2V5d29yZHMiLCJjb25maWdzIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSwyREFBa0IsNEJBQ2hCLHNDQUFNLDZCQUFOLENBRGdCLEVBRWhCLDZDQUFhLDZCQUFiLENBRmdCLEVBR2hCLHlDQUFTLDZCQUFULENBSGdCLEVBSWhCLHlDQUFTLDZCQUFULENBSmdCLEVBS2hCLDBDQUFVLHlEQUFWLENBTGdCLENBQWxCOztlQVFnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsY0FESTtBQUVKQyxJQUFBQSxRQUZJO0FBR0pDLElBQUFBLG1CQUhJO0FBR2lCQyxJQUFBQSxpQkFIakI7QUFJSkMsSUFBQUEsVUFKSTtBQUlRQyxJQUFBQSxNQUpSO0FBSWdCQyxJQUFBQSxNQUpoQjtBQUl3QkMsSUFBQUEsSUFKeEI7QUFJOEJDLElBQUFBLE1BSjlCO0FBSXNDQyxJQUFBQSxNQUp0QztBQUk4Q0MsSUFBQUE7QUFKOUMsTUFLRlgsTUFBTSxDQUFDWSxFQUxYO0FBRHlCLE1BbUJuQkMsY0FuQm1CLHlDQVF6QiwwRUFXNkJYLFFBWDdCLEdBWUUsNkVBWkYsRUFhRSx5RUFiRixFQWVFLGdFQUFvQixvQ0FBVSw0QkFBT0QsY0FBUCxDQUFWLENBQXBCLEVBZkYsRUFtQkUsZ0VBQW9CLG9DQUFVLFVBQVYsQ0FBcEIsRUFuQkYsQ0FSeUIsV0FTeEJTLE1BQU0sQ0FBQyxDQUNOLE1BRE0sRUFDRSxNQURGLENBQUQsRUFFSixZQUFZO0FBQ2IsU0FBS0ksV0FBTCxDQUFpQixTQUFqQixFQUE0QjtBQUMxQkMsTUFBQUEsSUFBSSxFQUFFLENBQUMsTUFBRDtBQURvQixLQUE1QjtBQUdELEdBTk0sQ0FUa0IsVUFnQnhCVCxNQUFNLENBQUNOLE1BQUQsQ0FoQmtCLFVBaUJ4QlcsS0FBSyxDQUFDUixtQkFBRCxDQWpCbUIsVUFrQnhCUSxLQUFLLENBQUNQLGlCQUFELENBbEJtQixnQkFReEJDLFVBUndCLG9HQVF6QixNQVdNUSxjQVhOLFNBVzZCWCxRQVg3QixDQVdzQztBQUlwQyxVQUFjYyxJQUFkLEdBQXFEO0FBQUEsaUZBQXZCLDRCQUFPZixjQUFQLENBQXVCLEVBQS9CLG9DQUFRLDRCQUFPQSxjQUFQLENBQVIsQ0FBK0I7O0FBQ25ELGdDQUFPQSxjQUFQO0FBQ0Q7O0FBRUQsVUFBY2dCLElBQWQsR0FBMEM7QUFBQSxrRkFBWixVQUFZLEVBQXBCLG9DQUFRLFVBQVIsQ0FBb0I7O0FBQ3hDLFlBQU07QUFDSkMsUUFBQUEsSUFESTtBQUVKQyxRQUFBQSxXQUZJO0FBR0pDLFFBQUFBLE9BSEk7QUFJSkMsUUFBQUEsT0FKSTtBQUtKQyxRQUFBQTtBQUxJLFVBTUYsS0FBS0MsT0FOVDtBQU9BLGlDQUFPO0FBQ0xMLFFBQUFBLElBREs7QUFFTEMsUUFBQUEsV0FGSztBQUdMQyxRQUFBQSxPQUhLO0FBSUxDLFFBQUFBLE9BSks7QUFLTEMsUUFBQUE7QUFMSyxPQUFQO0FBT0Q7O0FBdkJtQyxHQW5CYixVQW9CUkUsVUFwQlEsR0FvQktBLFVBcEJMLFVBcUJWQyxNQXJCVSxHQXFCRCxFQXJCQywyRUFvQnRCbEIsTUFwQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBcUJ0QkMsSUFyQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0ZBdUJ0QkMsTUF2QnNCLHVKQTJCdEJBLE1BM0JzQjtBQTRDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG50eXBlIGluZm9SZXN1bHQgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgbGljZW5zZTogc3RyaW5nLFxuICB2ZXJzaW9uOiBzdHJpbmcsXG4gIGtleXdvcmRzOiBzdHJpbmdbXVxufVxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBOT05fUkVOREVSQUJMRSxcbiAgICBSZXNvdXJjZSxcbiAgICBDb3JzTWlkZGxld2FyZU1peGluLCBDb25maWd1cmFibGVNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgYWN0aW9uLCBjaGFpbnMsIG1peGluLFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBjaGFpbnMoW1xuICAgICdpbmZvJywgJ2NvcnMnXG4gIF0sIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmluaXRpYWxIb29rKCd1c2VDT1JTJywge1xuICAgICAgb25seTogWydjb3JzJ11cbiAgICB9KTtcbiAgfSlcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihDb3JzTWlkZGxld2FyZU1peGluKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIEl0c2VsZlJlc291cmNlIGV4dGVuZHMgUmVzb3VyY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBhY3Rpb24gYXN5bmMgY29ycygpOiBQcm9taXNlPHR5cGVvZiBOT05fUkVOREVSQUJMRT4ge1xuICAgICAgcmV0dXJuIE5PTl9SRU5ERVJBQkxFXG4gICAgfVxuXG4gICAgQGFjdGlvbiBhc3luYyBpbmZvKCk6IFByb21pc2U8aW5mb1Jlc3VsdD4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbGljZW5zZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAga2V5d29yZHMsXG4gICAgICB9ID0gdGhpcy5jb25maWdzXG4gICAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgbGljZW5zZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAga2V5d29yZHMsXG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=