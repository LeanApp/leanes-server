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
var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Pipes,
    Application,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  const {
    LogMessage: {
      DEBUG
    },
    LogFilterMessage: {
      SET_LOG_LEVEL
    }
  } = Pipes.NS;
  let LoggerApplication = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerApplication", _flowRuntime.default.extends(Application), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("setLogLevelMethod", _flowRuntime.default.param("level", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("constructor", _flowRuntime.default.param("symbol", _flowRuntime.default.nullable(_flowRuntime.default.symbol()))))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerApplication extends Application {
    setLogLevelMethod(level) {
      let _levelType = _flowRuntime.default.number();

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("level", _levelType).assert(level);

      this.send(SET_LOG_LEVEL, level);
    }

    constructor(symbol) {
      let _symbolType = _flowRuntime.default.nullable(_flowRuntime.default.symbol());

      _flowRuntime.default.param("symbol", _symbolType).assert(symbol);

      const {
        ApplicationFacade
      } = Module.NS;
      super(Module.name, ApplicationFacade, symbol);
      this.setLogLevelMethod(DEBUG);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9Mb2dnZXJBcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJQaXBlcyIsIkFwcGxpY2F0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIkxvZ01lc3NhZ2UiLCJERUJVRyIsIkxvZ0ZpbHRlck1lc3NhZ2UiLCJTRVRfTE9HX0xFVkVMIiwiTG9nZ2VyQXBwbGljYXRpb24iLCJzZXRMb2dMZXZlbE1ldGhvZCIsImxldmVsIiwic2VuZCIsImNvbnN0cnVjdG9yIiwic3ltYm9sIiwiQXBwbGljYXRpb25GYWNhZGUiLCJuYW1lIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLEtBREk7QUFFSkMsSUFBQUEsV0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlAsTUFBTSxDQUFDUSxFQUpYO0FBTUEsUUFBTTtBQUNKQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUE7QUFBRixLQURSO0FBRUpDLElBQUFBLGdCQUFnQixFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFGZCxNQUdGWCxLQUFLLENBQUNPLEVBSFY7QUFQeUIsTUFjbkJLLGlCQWRtQix5Q0FZekIsNkVBRWdDWCxXQUZoQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxxRkFBK0IsNkJBQS9CLCtCQUF3QywyQkFBeEMsRUFORixFQVVFLGdGQUFrQiw4QkFBRyw2QkFBSCxDQUFsQixFQVZGLENBWnlCLFdBYXhCRSxNQUFNLENBQUNKLE1BQUQsQ0Fia0IsZ0JBWXhCRyxVQVp3Qix1REFZekIsTUFFTVUsaUJBRk4sU0FFZ0NYLFdBRmhDLENBRTRDO0FBSWxDWSxJQUFBQSxpQkFBUixDQUEwQkMsS0FBMUIsRUFBK0M7QUFBQSx1QkFBaEIsNkJBQWdCOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM3QyxXQUFLQyxJQUFMLENBQVVKLGFBQVYsRUFBeUJHLEtBQXpCO0FBQ0Q7O0FBRURFLElBQUFBLFdBQVcsQ0FBQ0MsTUFBRCxFQUFrQjtBQUFBLHdCQUFYLDhCQUFHLDZCQUFILENBQVc7O0FBQUE7O0FBQzNCLFlBQU07QUFBRUMsUUFBQUE7QUFBRixVQUF3Qm5CLE1BQU0sQ0FBQ1EsRUFBckM7QUFDQSxZQUFNUixNQUFNLENBQUNvQixJQUFiLEVBQW1CRCxpQkFBbkIsRUFBc0NELE1BQXRDO0FBQ0EsV0FBS0osaUJBQUwsQ0FBdUJKLEtBQXZCO0FBQ0Q7O0FBWnlDLEdBZG5CLFVBZVBXLFVBZk8sR0FlTUEsVUFmTixVQWdCVkMsTUFoQlUsR0FnQkQsRUFoQkMsMkVBZXRCZixNQWZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWdCdEJGLElBaEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlHQWtCdEJDLE1BbEJzQjtBQTRCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBQaXBlcyxcbiAgICBBcHBsaWNhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3Qge1xuICAgIExvZ01lc3NhZ2U6IHsgREVCVUcgfSxcbiAgICBMb2dGaWx0ZXJNZXNzYWdlOiB7IFNFVF9MT0dfTEVWRUwgfVxuICB9ID0gUGlwZXMuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIExvZ2dlckFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIHNldExvZ0xldmVsTWV0aG9kKGxldmVsOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIHRoaXMuc2VuZChTRVRfTE9HX0xFVkVMLCBsZXZlbCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc3ltYm9sOiA/U3ltYm9sKSB7XG4gICAgICBjb25zdCB7IEFwcGxpY2F0aW9uRmFjYWRlIH0gPSBNb2R1bGUuTlM7XG4gICAgICBzdXBlcihNb2R1bGUubmFtZSwgQXBwbGljYXRpb25GYWNhZGUsIHN5bWJvbCk7XG4gICAgICB0aGlzLnNldExvZ0xldmVsTWV0aG9kKERFQlVHKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==