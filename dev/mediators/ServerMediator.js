"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

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
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    JSON_RENDERER,
    HttpMediator,
    ConfigurableMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    property,
    mixin
  } = Module.NS;
  let ServerMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ServerMediator", _flowRuntime.default.extends(HttpMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("htmlRendererName", _flowRuntime.default.string()), _flowRuntime.default.method("responseFormats", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))))), _dec2 = partOf(Module), _dec3 = mixin(ConfigurableMixin), _dec4 = _flowRuntime.default.decorate(_flowRuntime.default.string()), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class ServerMediator extends HttpMediator {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "htmlRendererName", _descriptor, this);
    }

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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "htmlRendererName", [_dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return JSON_RENDERER;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "responseFormats", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "responseFormats"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TZXJ2ZXJNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJKU09OX1JFTkRFUkVSIiwiSHR0cE1lZGlhdG9yIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1ldGhvZCIsInByb3BlcnR5IiwibWl4aW4iLCJOUyIsIlNlcnZlck1lZGlhdG9yIiwicmVzcG9uc2VGb3JtYXRzIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxhQURJO0FBRUpDLElBQUFBLFlBRkk7QUFHSkMsSUFBQUEsaUJBSEk7QUFJSkMsSUFBQUEsVUFKSTtBQUlRQyxJQUFBQSxNQUpSO0FBSWdCQyxJQUFBQSxJQUpoQjtBQUlzQkMsSUFBQUEsTUFKdEI7QUFJOEJDLElBQUFBLE1BSjlCO0FBSXNDQyxJQUFBQSxRQUp0QztBQUlnREMsSUFBQUE7QUFKaEQsTUFLRlYsTUFBTSxDQUFDVyxFQUxYO0FBRHlCLE1BV25CQyxjQVhtQix5Q0FRekIsMEVBRzZCVixZQUg3QixHQUlFLDZFQUpGLEVBS0UseUVBTEYsRUFPRSxrREFBMEIsNkJBQTFCLENBUEYsRUFTRSwyRUFBK0IsMkJBQUUsNkJBQUYsQ0FBL0IsRUFURixDQVJ5QixXQVN4QkcsTUFBTSxDQUFDTCxNQUFELENBVGtCLFVBVXhCVSxLQUFLLENBQUNQLGlCQUFELENBVm1CLHdDQWVHLDZCQWZILGlCQVF4QkMsVUFSd0Isc0VBUXpCLE1BR01RLGNBSE4sU0FHNkJWLFlBSDdCLENBRzBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTXhDLFFBQWNXLGVBQWQsR0FBMEM7QUFBQSxzREFBVCx5REFBUzs7QUFDeEMsZ0NBQU8sQ0FBQywwQkFBRCxFQUE2QixNQUE3QixFQUFxQyxNQUFyQyxFQUE2QyxLQUE3QyxFQUFvRCxNQUFwRCxFQUE0RCxNQUE1RCxDQUFQO0FBQ0Q7O0FBUnVDLEdBWGpCLFVBWVBDLFVBWk8sR0FZTUEsVUFaTixVQWFWQyxNQWJVLEdBYUQsRUFiQywyRUFZdEJSLE1BWnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBYXRCRCxJQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFIQWV0QkcsUUFmc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZWNSLGFBZmQ7QUFBQTtBQUFBLHFGQWlCdEJRLFFBakJzQjtBQXFCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBKU09OX1JFTkRFUkVSLFxuICAgIEh0dHBNZWRpYXRvcixcbiAgICBDb25maWd1cmFibGVNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWV0aG9kLCBwcm9wZXJ0eSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENvbmZpZ3VyYWJsZU1peGluKVxuICBjbGFzcyBTZXJ2ZXJNZWRpYXRvciBleHRlbmRzIEh0dHBNZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBodG1sUmVuZGVyZXJOYW1lOiBzdHJpbmcgPSBKU09OX1JFTkRFUkVSO1xuXG4gICAgQHByb3BlcnR5IGdldCByZXNwb25zZUZvcm1hdHMoKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIFsnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJywgJ2pzb24nLCAnaHRtbCcsICd4bWwnLCAnYXRvbScsICd0ZXh0J107XG4gICAgfVxuICB9XG59XG4iXX0=