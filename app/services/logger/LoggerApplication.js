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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

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
  let LoggerApplication = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class LoggerApplication extends Application {
    setLogLevelMethod(level) {
      this.send(SET_LOG_LEVEL, level);
    }

    constructor(symbol) {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;