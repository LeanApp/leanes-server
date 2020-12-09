"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
const infoResult = _flowRuntime.default.type("infoResult", _flowRuntime.default.object(_flowRuntime.default.property("name", _flowRuntime.default.string()), _flowRuntime.default.property("description", _flowRuntime.default.string()), _flowRuntime.default.property("license", _flowRuntime.default.string()), _flowRuntime.default.property("version", _flowRuntime.default.string()), _flowRuntime.default.property("keywords", _flowRuntime.default.array(_flowRuntime.default.string()))));

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _init2, _class3, _temp;

  const {
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
  let ItselfResource = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ItselfResource", _flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("cors", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("info", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", infoResult))))), _dec2 = chains(['info', 'cors'], function () {
    this.initialHook('useCORS', {
      only: ['cors']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(CorsMiddlewareMixin), _dec5 = mixin(ConfigurableMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_temp = _class3 = class ItselfResource extends Resource {
    async cors() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9JdHNlbGZSZXNvdXJjZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSZXNvdXJjZSIsIkNvcnNNaWRkbGV3YXJlTWl4aW4iLCJDb25maWd1cmFibGVNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwiYWN0aW9uIiwiY2hhaW5zIiwibWl4aW4iLCJOUyIsIkl0c2VsZlJlc291cmNlIiwiaW5pdGlhbEhvb2siLCJvbmx5IiwiY29ycyIsImluZm8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaWNlbnNlIiwidmVyc2lvbiIsImtleXdvcmRzIiwiY29uZmlncyIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLDJEQUFrQiw0QkFDaEIsc0NBQU0sNkJBQU4sQ0FEZ0IsRUFFaEIsNkNBQWEsNkJBQWIsQ0FGZ0IsRUFHaEIseUNBQVMsNkJBQVQsQ0FIZ0IsRUFJaEIseUNBQVMsNkJBQVQsQ0FKZ0IsRUFLaEIsMENBQVUseURBQVYsQ0FMZ0IsQ0FBbEI7O2VBUWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxRQURJO0FBRUpDLElBQUFBLG1CQUZJO0FBRWlCQyxJQUFBQSxpQkFGakI7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxNQUhoQjtBQUd3QkMsSUFBQUEsSUFIeEI7QUFHOEJDLElBQUFBLE1BSDlCO0FBR3NDQyxJQUFBQSxNQUh0QztBQUc4Q0MsSUFBQUE7QUFIOUMsTUFJRlYsTUFBTSxDQUFDVyxFQUpYO0FBRHlCLE1Ba0JuQkMsY0FsQm1CLHlDQU96QiwwRUFXNkJYLFFBWDdCLEdBWUUsNkVBWkYsRUFhRSx5RUFiRixFQWVFLGdFQUFvQixvQ0FBVSwyQkFBVixDQUFwQixFQWZGLEVBaUJFLGdFQUFvQixvQ0FBVSxVQUFWLENBQXBCLEVBakJGLENBUHlCLFdBUXhCUSxNQUFNLENBQUMsQ0FDTixNQURNLEVBQ0UsTUFERixDQUFELEVBRUosWUFBWTtBQUNiLFNBQUtJLFdBQUwsQ0FBaUIsU0FBakIsRUFBNEI7QUFDMUJDLE1BQUFBLElBQUksRUFBRSxDQUFDLE1BQUQ7QUFEb0IsS0FBNUI7QUFHRCxHQU5NLENBUmtCLFVBZXhCVCxNQUFNLENBQUNMLE1BQUQsQ0Fma0IsVUFnQnhCVSxLQUFLLENBQUNSLG1CQUFELENBaEJtQixVQWlCeEJRLEtBQUssQ0FBQ1AsaUJBQUQsQ0FqQm1CLGdCQU94QkMsVUFQd0Isb0dBT3pCLE1BV01RLGNBWE4sU0FXNkJYLFFBWDdCLENBV3NDO0FBSXBDLFVBQWNjLElBQWQsR0FBbUM7QUFBQSxpRkFBTCwyQkFBSyxFQUFiLG9DQUFRLDJCQUFSLENBQWE7QUFBRTs7QUFFckMsVUFBY0MsSUFBZCxHQUEwQztBQUFBLGtGQUFaLFVBQVksRUFBcEIsb0NBQVEsVUFBUixDQUFvQjs7QUFDeEMsWUFBTTtBQUNKQyxRQUFBQSxJQURJO0FBRUpDLFFBQUFBLFdBRkk7QUFHSkMsUUFBQUEsT0FISTtBQUlKQyxRQUFBQSxPQUpJO0FBS0pDLFFBQUFBO0FBTEksVUFNRixLQUFLQyxPQU5UO0FBT0EsaUNBQU87QUFDTEwsUUFBQUEsSUFESztBQUVMQyxRQUFBQSxXQUZLO0FBR0xDLFFBQUFBLE9BSEs7QUFJTEMsUUFBQUEsT0FKSztBQUtMQyxRQUFBQTtBQUxLLE9BQVA7QUFPRDs7QUFyQm1DLEdBbEJiLFVBbUJSRSxVQW5CUSxHQW1CS0EsVUFuQkwsVUFvQlZDLE1BcEJVLEdBb0JELEVBcEJDLDJFQW1CdEJsQixNQW5Cc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFvQnRCQyxJQXBCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRkFzQnRCQyxNQXRCc0IsdUpBd0J0QkEsTUF4QnNCO0FBeUMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxudHlwZSBpbmZvUmVzdWx0ID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGxpY2Vuc2U6IHN0cmluZyxcbiAgdmVyc2lvbjogc3RyaW5nLFxuICBrZXl3b3Jkczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUmVzb3VyY2UsXG4gICAgQ29yc01pZGRsZXdhcmVNaXhpbiwgQ29uZmlndXJhYmxlTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIGFjdGlvbiwgY2hhaW5zLCBtaXhpbixcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAY2hhaW5zKFtcbiAgICAnaW5mbycsICdjb3JzJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygndXNlQ09SUycsIHtcbiAgICAgIG9ubHk6IFsnY29ycyddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ29yc01pZGRsZXdhcmVNaXhpbilcbiAgQG1peGluKENvbmZpZ3VyYWJsZU1peGluKVxuICBjbGFzcyBJdHNlbGZSZXNvdXJjZSBleHRlbmRzIFJlc291cmNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAYWN0aW9uIGFzeW5jIGNvcnMoKTogUHJvbWlzZTx2b2lkPnt9XG5cbiAgICBAYWN0aW9uIGFzeW5jIGluZm8oKTogUHJvbWlzZTxpbmZvUmVzdWx0PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBsaWNlbnNlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBrZXl3b3JkcyxcbiAgICAgIH0gPSB0aGlzLmNvbmZpZ3NcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBsaWNlbnNlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBrZXl3b3JkcyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==