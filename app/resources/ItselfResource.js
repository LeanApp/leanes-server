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
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _class3, _temp;

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
  let ItselfResource = (_dec = chains(['info', 'cors'], function () {
    this.initialHook('useCORS', {
      only: ['cors']
    });
  }), _dec2 = partOf(Module), _dec3 = mixin(CorsMiddlewareMixin), _dec4 = mixin(ConfigurableMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = class ItselfResource extends Resource {
    async cors() {}

    async info() {
      const {
        name,
        description,
        license,
        version,
        keywords
      } = this.configs;
      return {
        name,
        description,
        license,
        version,
        keywords
      };
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cors", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "cors"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "info", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "info"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;