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
  var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    APPLICATION_PROXY,
    Pipes,
    Application,
    MigratifyApplicationMixin,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    mixin,
    Utils: {
      _
    }
  } = Module.NS;
  const {
    LogMessage: {
      DEBUG
    },
    LogFilterMessage: {
      SET_LOG_LEVEL
    }
  } = Pipes.NS;
  let MainApplication = (_dec = partOf(Module), _dec2 = mixin(MigratifyApplicationMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainApplication extends Application {
    setLogLevelMethod(level) {
      this.send(SET_LOG_LEVEL, level);
    }

    sendEvent(name, body, type = 'Event') {
      this.send(name, body, type);
    }

    setState(state) {
      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      appProxy.setState(state);
    }

    getState() {
      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      return appProxy.getData();
    }

    constructor(data) {
      const {
        ApplicationFacade
      } = Module.NS;
      const symbol = _.isSymbol(data) ? data : null;
      super(Module.name, ApplicationFacade, symbol);
      (0, _initializerDefineProperty2.default)(this, "initialState", _descriptor, this);
      this.dispatch = this.sendEvent.bind(this);

      if (!_.isSymbol(data) && _.isObject(data)) {
        this.initialState = data;
      }
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initialState", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sendEvent", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "sendEvent"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setState"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getState"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;