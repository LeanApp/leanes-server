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
      uuid,
      makeHash
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
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.boolean());

      return _returnType.assert(this.passwordHash == _crypto.default.pbkdf2Sync(password, this.salt, Number(ITERATIONS), 64, HASH_DIGEST).toString('hex'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvVXNlclJlY29yZC5qcyJdLCJuYW1lcyI6WyJIQVNIX0RJR0VTVCIsIklURVJBVElPTlMiLCJBVVRPX0xPQ0tJTkciLCJTRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiUmVjb3JkIiwiVGltZXN0YW1wc1JlY29yZE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsImF0dHJpYnV0ZSIsInByb3BlcnR5IiwibWV0aG9kIiwiY2hhaW5zIiwiVXRpbHMiLCJ1dWlkIiwibWFrZUhhc2giLCJOUyIsIlVzZXJSZWNvcmQiLCJiZWZvcmVIb29rIiwib25seSIsInR5cGUiLCJmaWxsTm9uUmVxdWlyZWQiLCJhcmdzIiwiZW1haWxWZXJpZmllZCIsIm5hbWUiLCJlbWFpbCIsIm5pY2tuYW1lIiwic3BsaXQiLCJwaWN0dXJlIiwic3ViIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInNhbHQiLCJ2NCIsImlzQWRtaW4iLCJpc0xvY2tlZCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkSGFzaCIsInBia2RmMlN5bmMiLCJwYXNzd29yZCIsIk51bWJlciIsInZlcmlmeVBhc3N3b3JkIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU07QUFDSkEsRUFBQUEsV0FESTtBQUNTQyxFQUFBQSxVQURUO0FBQ3FCQyxFQUFBQSxZQURyQjtBQUNtQ0MsRUFBQUE7QUFEbkMsSUFFRkMsT0FBTyxDQUFDQyxHQUZaOztlQUlnQkMsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsTUFESTtBQUVKQyxJQUFBQSxxQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFH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QTtBQUFBLDRFQXVCdEJELElBdkJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZHQXlCdEJJLFFBekJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF5Qk8sSUF6QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFzQ3RCQyxNQXRDc0IsMEtBa0R0QkEsTUFsRHNCLHlLQXVEdEJBLE1BdkRzQjtBQTJEMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuY29uc3Qge1xuICBIQVNIX0RJR0VTVCwgSVRFUkFUSU9OUywgQVVUT19MT0NLSU5HLCBTRUNSRVQsXG59ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFJlY29yZCxcbiAgICBUaW1lc3RhbXBzUmVjb3JkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLCBhdHRyaWJ1dGUsIHByb3BlcnR5LCBtZXRob2QsIGNoYWlucyxcbiAgICBVdGlsczogeyB1dWlkLCBtYWtlSGFzaCB9XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQGNoYWlucyhbXG4gICAgJ2NyZWF0ZSdcbiAgXSwgZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmVmb3JlSG9vaygnZmlsbE5vblJlcXVpcmVkJywge1xuICAgICAgb25seTogWydjcmVhdGUnXVxuICAgIH0pO1xuICAgIHRoaXMuYmVmb3JlSG9vaygnaGFzaFBhc3N3b3JkJywge1xuICAgICAgb25seTogWydjcmVhdGUnXVxuICAgIH0pO1xuICB9KVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKFRpbWVzdGFtcHNSZWNvcmRNaXhpbilcbiAgY2xhc3MgVXNlclJlY29yZCBleHRlbmRzIFJlY29yZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBwcm9wZXJ0eSBwYXNzd29yZDogP3N0cmluZyA9IG51bGw7XG5cbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgZW1haWw7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBlbWFpbFZlcmlmaWVkO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBuYW1lO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBuaWNrbmFtZTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgcGljdHVyZTtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ3N0cmluZycgfSkgc3ViO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBzYWx0O1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBwYXNzd29yZEhhc2g7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBpc0FkbWluO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnYm9vbGVhbicgfSkgaXNMb2NrZWQ7XG5cbiAgICBAbWV0aG9kIGZpbGxOb25SZXF1aXJlZCguLi4gYXJncykge1xuICAgICAgdGhpcy5lbWFpbFZlcmlmaWVkID0gdGhpcy5lbWFpbFZlcmlmaWVkICE9IG51bGwgPyB0aGlzLmVtYWlsVmVyaWZpZWQgOiBmYWxzZTtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCB0aGlzLmVtYWlsO1xuICAgICAgdGhpcy5uaWNrbmFtZSA9IHRoaXMubmlja25hbWUgfHwgdGhpcy5lbWFpbC5zcGxpdCgnQCcpWzBdO1xuICAgICAgdGhpcy5waWN0dXJlID0gdGhpcy5waWN0dXJlIHx8ICcnO1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLnN1YiB8fCBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIHRoaXMuc2FsdCA9IG1ha2VIYXNoKCdzaGEyNTYnLCBgJHtTRUNSRVR9fCR7dXVpZC52NCgpfWApO1xuICAgICAgdGhpcy5pc0FkbWluID0gdGhpcy5pc0FkbWluICE9IG51bGwgPyB0aGlzLmlzQWRtaW4gOiBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSB0aGlzLmlzQWRtaW4gPyBmYWxzZSA6IEFVVE9fTE9DS0lORyA9PSAneWVzJztcbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIEBtZXRob2QgaGFzaFBhc3N3b3JkKC4uLiBhcmdzKSB7XG4gICAgICB0aGlzLnBhc3N3b3JkSGFzaCA9IGNyeXB0by5wYmtkZjJTeW5jKHRoaXMucGFzc3dvcmQsIHRoaXMuc2FsdCwgTnVtYmVyKElURVJBVElPTlMpLCA2NCwgSEFTSF9ESUdFU1QpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIEBtZXRob2QgdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkSGFzaCA9PSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCBOdW1iZXIoSVRFUkFUSU9OUyksIDY0LCBIQVNIX0RJR0VTVCkudG9TdHJpbmcoJ2hleCcpO1xuICAgIH1cbiAgfVxufVxuIl19