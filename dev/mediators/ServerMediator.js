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
    JSON_RENDERER,
    HttpMediator,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    property,
    mixin
  } = Module.NS;
  let ServerMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ServerMediator", _flowRuntime.default.extends(HttpMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("responseFormats", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ServerMediator extends HttpMediator {
    // @property htmlRendererName: string = JSON_RENDERER;
    get responseFormats() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      return _returnType.assert(['application/octet-stream', 'json', 'html', 'xml', 'atom', 'text']);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "responseFormats", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "responseFormats"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TZXJ2ZXJNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJKU09OX1JFTkRFUkVSIiwiSHR0cE1lZGlhdG9yIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm1peGluIiwiTlMiLCJTZXJ2ZXJNZWRpYXRvciIsInJlc3BvbnNlRm9ybWF0cyIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxhQURJO0FBRUpDLElBQUFBLFlBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBLE1BSDlCO0FBR3NDQyxJQUFBQSxRQUh0QztBQUdnREMsSUFBQUE7QUFIaEQsTUFJRlQsTUFBTSxDQUFDVSxFQUpYO0FBRHlCLE1BU25CQyxjQVRtQix5Q0FPekIsMEVBRTZCVCxZQUY3QixHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFRRSwyRUFBK0IsMkJBQUUsNkJBQUYsQ0FBL0IsRUFSRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLGdCQU94QkcsVUFQd0IsdURBT3pCLE1BRU1RLGNBRk4sU0FFNkJULFlBRjdCLENBRTBDO0FBSXhDO0FBRUEsUUFBY1UsZUFBZCxHQUEwQztBQUFBLHNEQUFULHlEQUFTOztBQUN4QyxnQ0FBTyxDQUFDLDBCQUFELEVBQTZCLE1BQTdCLEVBQXFDLE1BQXJDLEVBQTZDLEtBQTdDLEVBQW9ELE1BQXBELEVBQTRELE1BQTVELENBQVA7QUFDRDs7QUFSdUMsR0FUakIsVUFVUEMsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlIsTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJELElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0ZBZXRCRyxRQWZzQjtBQW1CMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBKU09OX1JFTkRFUkVSLFxuICAgIEh0dHBNZWRpYXRvcixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWV0aG9kLCBwcm9wZXJ0eSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgU2VydmVyTWVkaWF0b3IgZXh0ZW5kcyBIdHRwTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICAvLyBAcHJvcGVydHkgaHRtbFJlbmRlcmVyTmFtZTogc3RyaW5nID0gSlNPTl9SRU5ERVJFUjtcblxuICAgIEBwcm9wZXJ0eSBnZXQgcmVzcG9uc2VGb3JtYXRzKCk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBbJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScsICdqc29uJywgJ2h0bWwnLCAneG1sJywgJ2F0b20nLCAndGV4dCddO1xuICAgIH1cbiAgfVxufVxuIl19