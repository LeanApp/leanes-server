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
  SECRET
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvVXNlclJlY29yZC5qcyJdLCJuYW1lcyI6WyJPUklHSU5TIiwiSEFTSF9ESUdFU1QiLCJJVEVSQVRJT05TIiwiVE9LRU5fQUxHT1JJVEhNIiwiS0VZSUQiLCJJU1NVRVIiLCJBVVRPX0xPQ0tJTkciLCJSRUdJU1RSQVRJT05fSVNfQUxMT1dFRCIsIlBVQkxJQ19LRVkiLCJQUklWQVRFX0tFWSIsIlNFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJNb2R1bGUiLCJSZWNvcmQiLCJUaW1lc3RhbXBzUmVjb3JkTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiYXR0cmlidXRlIiwicHJvcGVydHkiLCJtZXRob2QiLCJjaGFpbnMiLCJVdGlscyIsInV1aWQiLCJOUyIsIlVzZXJSZWNvcmQiLCJiZWZvcmVIb29rIiwib25seSIsInR5cGUiLCJmaWxsTm9uUmVxdWlyZWQiLCJhcmdzIiwiZW1haWxWZXJpZmllZCIsIm5hbWUiLCJlbWFpbCIsIm5pY2tuYW1lIiwic3BsaXQiLCJwaWN0dXJlIiwic3ViIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInNhbHQiLCJ2NCIsImlzQWRtaW4iLCJpc0xvY2tlZCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkSGFzaCIsInBia2RmMlN5bmMiLCJwYXNzd29yZCIsInZlcmlmeVBhc3N3b3JkIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU07QUFDSkEsRUFBQUEsT0FESTtBQUNLQyxFQUFBQSxXQURMO0FBQ2tCQyxFQUFBQSxVQURsQjtBQUM4QkMsRUFBQUEsZUFEOUI7QUFDK0NDLEVBQUFBLEtBRC9DO0FBQ3NEQyxFQUFBQSxNQUR0RDtBQUM4REMsRUFBQUEs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VUFzQlBVLFVBdEJPLEdBc0JNQSxVQXRCTixVQXVCVkMsTUF2QlUsR0F1QkQsRUF2QkMsMkVBc0J0Qm5DLE1BdEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQXVCdEJELElBdkJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZHQXlCdEJJLFFBekJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF5Qk8sSUF6QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFzQ3RCQyxNQXRDc0IsMEtBa0R0QkEsTUFsRHNCLHlLQXVEdEJBLE1BdkRzQjtBQTJEMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuY29uc3Qge1xuICBPUklHSU5TLCBIQVNIX0RJR0VTVCwgSVRFUkFUSU9OUywgVE9LRU5fQUxHT1JJVEhNLCBLRVlJRCwgSVNTVUVSLCBBVVRPX0xPQ0tJTkcsIFJFR0lTVFJBVElPTl9JU19BTExPV0VELFxuICBQVUJMSUNfS0VZLCBQUklWQVRFX0tFWSwgU0VDUkVULFxufSA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBSZWNvcmQsXG4gICAgVGltZXN0YW1wc1JlY29yZE1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbmFtZUJ5LCBtaXhpbiwgYXR0cmlidXRlLCBwcm9wZXJ0eSwgbWV0aG9kLCBjaGFpbnMsXG4gICAgVXRpbHM6IHsgdXVpZCB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2NyZWF0ZSdcbiAgXSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmVmb3JlSG9vaygnZmlsbE5vblJlcXVpcmVkJywge1xuICAgICAgb25seTogWydjcmVhdGUnXVxuICAgIH0pO1xuICAgIHRoaXMuYmVmb3JlSG9vaygnaGFzaFBhc3N3b3JkJywge1xuICAgICAgb25seTogWydjcmVhdGUnXVxuICAgIH0pO1xuICB9KVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKFRpbWVzdGFtcHNSZWNvcmRNaXhpbilcbiAgY2xhc3MgVXNlclJlY29yZCBleHRlbmRzIFJlY29yZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBwYXNzd29yZDogP3N0cmluZyA9IG51bGw7XG5cbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgZW1haWw7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBlbWFpbFZlcmlmaWVkO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBuYW1lO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBuaWNrbmFtZTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgcGljdHVyZTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgc3ViO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBzYWx0O1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBwYXNzd29yZEhhc2g7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBpc0FkbWluO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnYm9vbGVhbicgfSkgaXNMb2NrZWQ7XG5cbiAgICBAbWV0aG9kIGZpbGxOb25SZXF1aXJlZCguLi4gYXJncykge1xuICAgICAgdGhpcy5lbWFpbFZlcmlmaWVkID0gdGhpcy5lbWFpbFZlcmlmaWVkICE9IG51bGwgPyB0aGlzLmVtYWlsVmVyaWZpZWQgOiBmYWxzZTtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCB0aGlzLmVtYWlsO1xuICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMubmlja25hbWUgfHwgZW1haWwuc3BsaXQoJ0AnKVswXTtcbiAgICAgIHRoaXMucGljdHVyZSA9IHRoaXMucGljdHVyZSB8fCAnJztcbiAgICAgIHRoaXMuc3ViID0gdGhpcy5zdWIgfHwgY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZygnaGV4Jyk7XG4gICAgICB0aGlzLnNhbHQgPSBgJHtTRUNSRVR9fCR7dXVpZC52NCgpfWA7XG4gICAgICB0aGlzLmlzQWRtaW4gPSB0aGlzLmlzQWRtaW4gIT0gbnVsbCA/IHRoaXMuaXNBZG1pbiA6IGZhbHNlO1xuICAgICAgdGhpcy5pc0xvY2tlZCA9IEFVVE9fTE9DS0lORyA9PSAneWVzJztcbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIEBtZXRob2QgaGFzaFBhc3N3b3JkKC4uLiBhcmdzKSB7XG4gICAgICB0aGlzLnBhc3N3b3JkSGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHRoaXMucGFzc3dvcmQsIHRoaXMuc2FsdCwgSVRFUkFUSU9OUywgNjQsIEhBU0hfRElHRVNUKS50b1N0cmluZygnaGV4Jyk7XG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBAbWV0aG9kIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZEhhc2ggPT0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgSVRFUkFUSU9OUywgNjQsIEhBU0hfRElHRVNUKS50b1N0cmluZygnaGV4Jyk7XG4gICAgfVxuICB9XG59XG4iXX0=