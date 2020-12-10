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
const {
  COOKIE_KEY
} = process.env;

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Configuration,
    initialize,
    partOf,
    meta,
    property,
    nameBy
  } = Module.NS;
  let MainConfiguration = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MainConfiguration", _flowRuntime.default.extends(Configuration), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("cookieKey", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("manifestPath", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("configPath", _flowRuntime.default.return(_flowRuntime.default.string())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainConfiguration extends Configuration {
    get cookieKey() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert(COOKIE_KEY);
    }

    get manifestPath() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert('../package.json');
    }

    get configPath() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType3.assert(`../configs/${this.environment}`);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cookieKey", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "cookieKey"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "manifestPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "manifestPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configPath"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvTWFpbkNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiQ09PS0lFX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJNb2R1bGUiLCJDb25maWd1cmF0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsIk5TIiwiTWFpbkNvbmZpZ3VyYXRpb24iLCJjb29raWVLZXkiLCJtYW5pZmVzdFBhdGgiLCJjb25maWdQYXRoIiwiZW52aXJvbm1lbnQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFDSkEsRUFBQUE7QUFESSxJQUVGQyxPQUFPLENBQUNDLEdBRlo7O2VBSWdCQyxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxhQURJO0FBRUpDLElBQUFBLFVBRkk7QUFFUUMsSUFBQUEsTUFGUjtBQUVnQkMsSUFBQUEsSUFGaEI7QUFFc0JDLElBQUFBLFFBRnRCO0FBRWdDQyxJQUFBQTtBQUZoQyxNQUdGTixNQUFNLENBQUNPLEVBSFg7QUFEeUIsTUFRbkJDLGlCQVJtQix5Q0FNekIsNkVBRWdDUCxhQUZoQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxxRUFBeUIsNkJBQXpCLEVBTkYsRUFVRSx3RUFBNEIsNkJBQTVCLEVBVkYsRUFjRSxzRUFBMEIsNkJBQTFCLEVBZEYsQ0FOeUIsV0FPeEJFLE1BQU0sQ0FBQ0gsTUFBRCxDQVBrQixnQkFNeEJFLFVBTndCLHVEQU16QixNQUVNTSxpQkFGTixTQUVnQ1AsYUFGaEMsQ0FFOEM7QUFJNUMsUUFBY1EsU0FBZCxHQUFrQztBQUFBLHNEQUFQLDZCQUFPOztBQUNoQyxnQ0FBT1osVUFBUDtBQUNEOztBQUVELFFBQWNhLFlBQWQsR0FBcUM7QUFBQSx1REFBUCw2QkFBTzs7QUFDbkMsaUNBQU8saUJBQVA7QUFDRDs7QUFFRCxRQUFjQyxVQUFkLEdBQW1DO0FBQUEsdURBQVAsNkJBQU87O0FBQ2pDLGlDQUFRLGNBQWEsS0FBS0MsV0FBWSxFQUF0QztBQUNEOztBQWQyQyxHQVJyQixVQVNQQyxVQVRPLEdBU01BLFVBVE4sVUFVVkMsTUFWVSxHQVVELEVBVkMsMkVBU3RCUixNQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVV0QkYsSUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFZdEJDLFFBWnNCLG9LQWdCdEJBLFFBaEJzQixxS0FvQnRCQSxRQXBCc0I7QUF3QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuY29uc3Qge1xuICBDT09LSUVfS0VZLFxufSA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBDb25maWd1cmF0aW9uLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBNYWluQ29uZmlndXJhdGlvbiBleHRlbmRzIENvbmZpZ3VyYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGNvb2tpZUtleSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIENPT0tJRV9LRVk7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5IGdldCBtYW5pZmVzdFBhdGgoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnLi4vcGFja2FnZS5qc29uJztcbiAgICB9XG5cbiAgICBAcHJvcGVydHkgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgLi4vY29uZmlncy8ke3RoaXMuZW52aXJvbm1lbnR9YDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==