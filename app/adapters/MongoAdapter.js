"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _DriverInterface2 = require("../interfaces/DriverInterface");

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
const DriverInterface = _flowRuntime.default.tdz(() => _DriverInterface2.DriverInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Adapter,
    ConfigurableMixin,
    MongoAdapterMixin,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin
  } = Module.NS;
  let MongoAdapter = (_dec = partOf(Module), _dec2 = mixin(MongoAdapterMixin), _dec3 = mixin(ConfigurableMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class MongoAdapter extends Adapter {
    get host() {
      return this.configs['mongodb'].host;
    }

    get port() {
      return this.configs['mongodb'].port;
    }

    get dbName() {
      return this.configs['mongodb'].dbName;
    }

    get username() {
      return this.configs['mongodb'].username;
    }

    get password() {
      return this.configs['mongodb'].password;
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "host", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "host"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "port", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "port"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "dbName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "dbName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "username", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "username"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "password", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "password"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;