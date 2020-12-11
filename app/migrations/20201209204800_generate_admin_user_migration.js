"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _ConfigurationInterface2 = require("../interfaces/ConfigurationInterface");

var _CollectionInterface2 = require("../interfaces/CollectionInterface");

var _RecordInterface2 = require("../interfaces/RecordInterface");

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
const RecordInterface = _flowRuntime.default.tdz(() => _RecordInterface2.RecordInterface);

const CollectionInterface = _flowRuntime.default.tdz(() => _CollectionInterface2.CollectionInterface);

const ConfigurationInterface = _flowRuntime.default.tdz(() => _ConfigurationInterface2.ConfigurationInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

  const {
    USERS,
    CONFIGURATION,
    BaseMigration,
    initialize,
    partOf,
    nameBy,
    meta,
    method,
    property,
    lazyInject
  } = Module.NS;
  let GenerateAdminUserMigration = (_dec = partOf(Module), _dec2 = lazyInject(`Factory<${CONFIGURATION}>`), _dec3 = lazyInject(`Factory<${USERS}>`), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class GenerateAdminUserMigration extends BaseMigration {
    get configs() {
      return this._configurationFactory();
    }

    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_configurationFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_usersFactory", _descriptor2, this);
    }

    get _users() {
      return this._usersFactory();
    }

    static change() {
      this.reversible(async function ({
        up,
        down
      }) {
        await up(async () => {
          const admin = await this._users.build({
            email: this.configs.adminEmail,
            emailVerified: true,
            name: "admin",
            nickname: "admin",
            isAdmin: true
          });
          admin.password = this.configs.adminPassword;
          await admin.save();
        });
        await down(async () => {
          const admin = await (await this._users.findBy({
            "@doc.nickname": "admin"
          })).first();
          await admin.destroy();
        });
      });
    }

  }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_configurationFactory", [_dec2, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configs", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configs"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_usersFactory", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_users", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_users"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;