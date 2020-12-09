"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _RouterInterface2 = require("./interfaces/RouterInterface");

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
const RouterInterface = _flowRuntime.default.tdz(() => _RouterInterface2.RouterInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SWAGGER_ROUTER,
    Router,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    inject
  } = Module.NS;
  let ApplicationRouter = (_dec = partOf(Module), _dec2 = inject(`Factory<${SWAGGER_ROUTER}>`), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class ApplicationRouter extends Router {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_swaggerFactory", _descriptor, this);
    }

    externals() {
      return [this._swaggerFactory()];
    }

    map() {
      this.get('/info', {
        to: 'itself#info',
        recordName: null
      });
      this.resource('users', {
        except: ['delete']
      }, function () {
        this.post('/signup', {
          to: 'users#signup',
          template: 'users/signup',
          recordName: null
        });
        this.post('/authorize', {
          to: 'users#authorize',
          template: 'users/authorize',
          recordName: null
        });
        this.get('/signout', {
          to: 'users#signout',
          template: 'users/signout',
          recordName: null
        });
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerFactory", [_dec2, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "externals", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "externals"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "map", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "map"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;