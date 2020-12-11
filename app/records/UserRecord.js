"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _crypto = _interopRequireDefault(require("crypto"));

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
const {
  HASH_DIGEST,
  ITERATIONS,
  AUTO_LOCKING,
  SECRET
} = process.env;

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;

  const {
    Record,
    TimestampsRecordMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin,
    attribute,
    property,
    method,
    chains,
    Utils: {
      uuid,
      makeHash
    }
  } = Module.NS;
  let UserRecord = (_dec = chains(['create'], function () {
    this.beforeHook('fillNonRequired', {
      only: ['create']
    });
    this.beforeHook('hashPassword', {
      only: ['create']
    });
  }), _dec2 = partOf(Module), _dec3 = mixin(TimestampsRecordMixin), _dec4 = attribute({
    type: 'string'
  }), _dec5 = attribute({
    type: 'boolean'
  }), _dec6 = attribute({
    type: 'string'
  }), _dec7 = attribute({
    type: 'string'
  }), _dec8 = attribute({
    type: 'string'
  }), _dec9 = attribute({
    type: 'string'
  }), _dec10 = attribute({
    type: 'string'
  }), _dec11 = attribute({
    type: 'string'
  }), _dec12 = attribute({
    type: 'boolean'
  }), _dec13 = attribute({
    type: 'boolean'
  }), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class UserRecord extends Record {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "password", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "email", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "emailVerified", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "name", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "nickname", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "picture", _descriptor6, this);
      (0, _initializerDefineProperty2.default)(this, "sub", _descriptor7, this);
      (0, _initializerDefineProperty2.default)(this, "salt", _descriptor8, this);
      (0, _initializerDefineProperty2.default)(this, "passwordHash", _descriptor9, this);
      (0, _initializerDefineProperty2.default)(this, "isAdmin", _descriptor10, this);
      (0, _initializerDefineProperty2.default)(this, "isLocked", _descriptor11, this);
    }

    fillNonRequired(...args) {
      this.emailVerified = this.emailVerified != null ? this.emailVerified : false;
      this.name = this.name || this.email;
      this.nickname = this.nickname || this.email.split('@')[0];
      this.picture = this.picture || '';
      this.sub = this.sub || _crypto.default.randomBytes(16).toString('hex');
      this.salt = makeHash('sha256', `${SECRET}|${uuid.v4()}`);
      this.isAdmin = this.isAdmin != null ? this.isAdmin : false;
      this.isLocked = this.isAdmin ? false : AUTO_LOCKING == 'yes';
      return args;
    }

    hashPassword(...args) {
      this.passwordHash = _crypto.default.pbkdf2Sync(this.password, this.salt, Number(ITERATIONS), 64, HASH_DIGEST).toString('hex');
      return args;
    }

    verifyPassword(password) {
      return this.passwordHash == _crypto.default.pbkdf2Sync(password, this.salt, Number(ITERATIONS), 64, HASH_DIGEST).toString('hex');
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "password", [property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "email", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "emailVerified", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "name", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "nickname", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "picture", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sub", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "salt", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "passwordHash", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isAdmin", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isLocked", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "fillNonRequired", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "fillNonRequired"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "hashPassword", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "hashPassword"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "verifyPassword", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "verifyPassword"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;