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
  ORIGINS,
  HASH_DIGEST,
  ITERATIONS,
  TOKEN_ALGORITHM,
  KEYID,
  ISSUER,
  AUTO_LOCKING,
  REGISTRATION_IS_ALLOWED,
  PUBLIC_KEY,
  PRIVATE_KEY,
  SECRET,
  DEFAULT_USERS
} = process.env;

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _init, _init2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _class3, _temp;

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
      uuid
    }
  } = Module.NS;
  let UserRecord = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("UserRecord", _flowRuntime.default.extends(Record), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("password", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("email", _flowRuntime.default.any()), _flowRuntime.default.property("emailVerified", _flowRuntime.default.any()), _flowRuntime.default.property("name", _flowRuntime.default.any()), _flowRuntime.default.property("nickname", _flowRuntime.default.any()), _flowRuntime.default.property("picture", _flowRuntime.default.any()), _flowRuntime.default.property("sub", _flowRuntime.default.any()), _flowRuntime.default.property("salt", _flowRuntime.default.any()), _flowRuntime.default.property("passwordHash", _flowRuntime.default.any()), _flowRuntime.default.property("isAdmin", _flowRuntime.default.any()), _flowRuntime.default.property("isLocked", _flowRuntime.default.any()), _flowRuntime.default.method("fillNonRequired", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("hashPassword", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("verifyPassword", _flowRuntime.default.param("password", _flowRuntime.default.any()), _flowRuntime.default.return(_flowRuntime.default.boolean())))), _dec2 = chains(['create'], function () {
    this.beforeHook('fillNonRequired', {
      only: ['create']
    });
    this.beforeHook('hashPassword', {
      only: ['create']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(TimestampsRecordMixin), _dec5 = _flowRuntime.default.decorate(_flowRuntime.default.nullable(_flowRuntime.default.string())), _dec6 = attribute({
    type: 'string'
  }), _dec7 = attribute({
    type: 'boolean'
  }), _dec8 = attribute({
    type: 'string'
  }), _dec9 = attribute({
    type: 'string'
  }), _dec10 = attribute({
    type: 'string'
  }), _dec11 = attribute({
    type: 'string'
  }), _dec12 = attribute({
    type: 'string'
  }), _dec13 = attribute({
    type: 'string'
  }), _dec14 = attribute({
    type: 'boolean'
  }), _dec15 = attribute({
    type: 'boolean'
  }), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = class UserRecord extends Record {
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
      this.nickname = this.nickname || email.split('@')[0];
      this.picture = this.picture || '';
      this.sub = this.sub || _crypto.default.randomBytes(16).toString('hex');
      this.salt = `${SECRET}|${uuid.v4()}`;
      this.isAdmin = this.isAdmin != null ? this.isAdmin : false;
      this.isLocked = AUTO_LOCKING == 'yes';
      return args;
    }

    hashPassword(...args) {
      this.passwordHash = _crypto.default.pbkdf2Sync(this.password, this.salt, ITERATIONS, 64, HASH_DIGEST).toString('hex');
      return args;
    }

    verifyPassword(password) {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.boolean());

      return _returnType.assert(this.passwordHash == _crypto.default.pbkdf2Sync(password, this.salt, ITERATIONS, 64, HASH_DIGEST).toString('hex'));
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "password", [_dec5, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "email", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "emailVerified", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "name", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "nickname", [_dec9], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "picture", [_dec10], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sub", [_dec11], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "salt", [_dec12], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "passwordHash", [_dec13], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor10 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isAdmin", [_dec14], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor11 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "isLocked", [_dec15], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "fillNonRequired", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "fillNonRequired"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "hashPassword", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "hashPassword"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "verifyPassword", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "verifyPassword"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvVXNlclJlY29yZC5qcyJdLCJuYW1lcyI6WyJPUklHSU5TIiwiSEFTSF9ESUdFU1QiLCJJVEVSQVRJT05TIiwiVE9LRU5fQUxHT1JJVEhNIiwiS0VZSUQiLCJJU1NVRVIiLCJBVVRPX0xPQ0tJTkciLCJSRUdJU1RSQVRJT05fSVNfQUxMT1dFRCIsIlBVQkxJQ19LRVkiLCJQUklWQVRFX0tFWSIsIlNFQ1JFVCIsIkRFRkFVTFRfVVNFUlMiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiUmVjb3JkIiwiVGltZXN0YW1wc1JlY29yZE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsImF0dHJpYnV0ZSIsInByb3BlcnR5IiwibWV0aG9kIiwiY2hhaW5zIiwiVXRpbHMiLCJ1dWlkIiwiTlMiLCJVc2VyUmVjb3JkIiwiYmVmb3JlSG9vayIsIm9ubHkiLCJ0eXBlIiwiZmlsbE5vblJlcXVpcmVkIiwiYXJncyIsImVtYWlsVmVyaWZpZWQiLCJuYW1lIiwiZW1haWwiLCJuaWNrbmFtZSIsInNwbGl0IiwicGljdHVyZSIsInN1YiIsImNyeXB0byIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJzYWx0IiwidjQiLCJpc0FkbWluIiwiaXNMb2NrZWQiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZEhhc2giLCJwYmtkZjJTeW5jIiwicGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxNQUFNO0FBQ0pBLEVBQUFBLE9BREk7QUFDS0MsRUFBQUEsV0FETDtBQUNrQkMsRUFBQUEsVUFEbEI7QUFDOEJDLEVBQUFBLGVBRDlCO0FBQytDQyxFQUFBQSxLQUQvQztBQUNzREMsRUFBQUEsTUFE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QTZFLEtBQTdFLENBQTVCO0FBQ0Q7O0FBcEM2QixHQXJCUCxVQXNCUFUsVUF0Qk8sR0FzQk1BLFVBdEJOLFVBdUJWQyxNQXZCVSxHQXVCRCxFQXZCQywyRUFzQnRCbkMsTUF0QnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBdUJ0QkQsSUF2QnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkdBeUJ0QkksUUF6QnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXlCTyxJQXpCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQXNDdEJDLE1BdENzQiwwS0FrRHRCQSxNQWxEc0IseUtBdUR0QkEsTUF2RHNCO0FBMkQxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5jb25zdCB7XG4gIE9SSUdJTlMsIEhBU0hfRElHRVNULCBJVEVSQVRJT05TLCBUT0tFTl9BTEdPUklUSE0sIEtFWUlELCBJU1NVRVIsIEFVVE9fTE9DS0lORywgUkVHSVNUUkFUSU9OX0lTX0FMTE9XRUQsXG4gIFBVQkxJQ19LRVksIFBSSVZBVEVfS0VZLCBTRUNSRVQsIERFRkFVTFRfVVNFUlNcbn0gPSBwcm9jZXNzLmVudjtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUmVjb3JkLFxuICAgIFRpbWVzdGFtcHNSZWNvcmRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWl4aW4sIGF0dHJpYnV0ZSwgcHJvcGVydHksIG1ldGhvZCwgY2hhaW5zLFxuICAgIFV0aWxzOiB7IHV1aWQgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBjaGFpbnMoW1xuICAgICdjcmVhdGUnXG4gIF0sIGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJlZm9yZUhvb2soJ2ZpbGxOb25SZXF1aXJlZCcsIHtcbiAgICAgIG9ubHk6IFsnY3JlYXRlJ11cbiAgICB9KTtcbiAgICB0aGlzLmJlZm9yZUhvb2soJ2hhc2hQYXNzd29yZCcsIHtcbiAgICAgIG9ubHk6IFsnY3JlYXRlJ11cbiAgICB9KTtcbiAgfSlcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihUaW1lc3RhbXBzUmVjb3JkTWl4aW4pXG4gIGNsYXNzIFVzZXJSZWNvcmQgZXh0ZW5kcyBSZWNvcmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgcGFzc3dvcmQ6ID9zdHJpbmcgPSBudWxsO1xuXG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIGVtYWlsO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnYm9vbGVhbicgfSkgZW1haWxWZXJpZmllZDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgbmFtZTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgbmlja25hbWU7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHBpY3R1cmU7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHN1YjtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgc2FsdDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgcGFzc3dvcmRIYXNoO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnYm9vbGVhbicgfSkgaXNBZG1pbjtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2Jvb2xlYW4nIH0pIGlzTG9ja2VkO1xuXG4gICAgQG1ldGhvZCBmaWxsTm9uUmVxdWlyZWQoLi4uIGFyZ3MpIHtcbiAgICAgIHRoaXMuZW1haWxWZXJpZmllZCA9IHRoaXMuZW1haWxWZXJpZmllZCAhPSBudWxsID8gdGhpcy5lbWFpbFZlcmlmaWVkIDogZmFsc2U7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgdGhpcy5lbWFpbDtcbiAgICAgIHRoaXMubmlja25hbWUgPSB0aGlzLm5pY2tuYW1lIHx8IGVtYWlsLnNwbGl0KCdAJylbMF07XG4gICAgICB0aGlzLnBpY3R1cmUgPSB0aGlzLnBpY3R1cmUgfHwgJyc7XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuc3ViIHx8IGNyeXB0by5yYW5kb21CeXRlcygxNikudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgdGhpcy5zYWx0ID0gYCR7U0VDUkVUfXwke3V1aWQudjQoKX1gO1xuICAgICAgdGhpcy5pc0FkbWluID0gdGhpcy5pc0FkbWluICE9IG51bGwgPyB0aGlzLmlzQWRtaW4gOiBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBBVVRPX0xPQ0tJTkcgPT0gJ3llcyc7XG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGhhc2hQYXNzd29yZCguLi4gYXJncykge1xuICAgICAgdGhpcy5wYXNzd29yZEhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyh0aGlzLnBhc3N3b3JkLCB0aGlzLnNhbHQsIElURVJBVElPTlMsIDY0LCBIQVNIX0RJR0VTVCkudG9TdHJpbmcoJ2hleCcpO1xuICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgQG1ldGhvZCB2ZXJpZnlQYXNzd29yZChwYXNzd29yZCk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmRIYXNoID09IGNyeXB0by5wYmtkZjJTeW5jKHBhc3N3b3JkLCB0aGlzLnNhbHQsIElURVJBVElPTlMsIDY0LCBIQVNIX0RJR0VTVCkudG9TdHJpbmcoJ2hleCcpO1xuICAgIH1cbiAgfVxufVxuIl19