"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
    Renderer,
    CrudRendererMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let MainRenderer = (_dec = partOf(Module), _dec2 = mixin(CrudRendererMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainRenderer extends Renderer {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9NYWluUmVuZGVyZXIuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiUmVuZGVyZXIiLCJDcnVkUmVuZGVyZXJNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJOUyIsIk1haW5SZW5kZXJlciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlAsTUFBTSxDQUFDUSxFQUpYO0FBRHlCLE1BVW5CQyxZQVZtQixXQVF4QkwsTUFBTSxDQUFDSixNQUFELENBUmtCLFVBU3hCTyxLQUFLLENBQUNMLGlCQUFELENBVG1CLEVBT3hCQyxVQVB3QixxRUFPekIsTUFHTU0sWUFITixTQUcyQlIsUUFIM0IsQ0FHb0MsRUFWWCxVQVdQUyxVQVhPLEdBV01BLFVBWE4sVUFZVkMsTUFaVSxHQVlELEVBWkMsMkVBV3RCTCxNQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVl0QkQsSUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFJlbmRlcmVyLFxuICAgIENydWRSZW5kZXJlck1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtaXhpbixcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKENydWRSZW5kZXJlck1peGluKVxuICBjbGFzcyBNYWluUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgfVxufVxuIl19