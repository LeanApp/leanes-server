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
      this.nickname = this.nickname || email.split('@')[0];
      this.picture = this.picture || '';
      this.sub = this.sub || _crypto.default.randomBytes(16).toString('hex');
      this.salt = makeHash('sha256', `${SECRET}|${uuid.v4()}`);
      this.isAdmin = this.isAdmin != null ? this.isAdmin : false;
      this.isLocked = AUTO_LOCKING == 'yes';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvVXNlclJlY29yZC5qcyJdLCJuYW1lcyI6WyJIQVNIX0RJR0VTVCIsIklURVJBVElPTlMiLCJBVVRPX0xPQ0tJTkciLCJTRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiUmVjb3JkIiwiVGltZXN0YW1wc1JlY29yZE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsImF0dHJpYnV0ZSIsInByb3BlcnR5IiwibWV0aG9kIiwiY2hhaW5zIiwiVXRpbHMiLCJ1dWlkIiwibWFrZUhhc2giLCJOUyIsIlVzZXJSZWNvcmQiLCJiZWZvcmVIb29rIiwib25seSIsInR5cGUiLCJmaWxsTm9uUmVxdWlyZWQiLCJhcmdzIiwiZW1haWxWZXJpZmllZCIsIm5hbWUiLCJlbWFpbCIsIm5pY2tuYW1lIiwic3BsaXQiLCJwaWN0dXJlIiwic3ViIiwiY3J5cHRvIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsInNhbHQiLCJ2NCIsImlzQWRtaW4iLCJpc0xvY2tlZCIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkSGFzaCIsInBia2RmMlN5bmMiLCJwYXNzd29yZCIsIk51bWJlciIsInZlcmlmeVBhc3N3b3JkIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLE1BQU07QUFDSkEsRUFBQUEsV0FESTtBQUNTQyxFQUFBQSxVQURUO0FBQ3FCQyxFQUFBQSxZQURyQjtBQUNtQ0MsRUFBQUE7QUFEbkMsSUFFRkMsT0FBTyxDQUFDQyxHQUZaOztlQUlnQkMsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsTUFESTtBQUVKQyxJQUFBQSxxQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFH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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkdBeUJ0QkksUUF6QnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXlCTyxJQXpCUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFGQXNDdEJDLE1BdENzQiwwS0FrRHRCQSxNQWxEc0IseUtBdUR0QkEsTUF2RHNCO0FBMkQxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuXG5jb25zdCB7XG4gIEhBU0hfRElHRVNULCBJVEVSQVRJT05TLCBBVVRPX0xPQ0tJTkcsIFNFQ1JFVCxcbn0gPSBwcm9jZXNzLmVudjtcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUmVjb3JkLFxuICAgIFRpbWVzdGFtcHNSZWNvcmRNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWl4aW4sIGF0dHJpYnV0ZSwgcHJvcGVydHksIG1ldGhvZCwgY2hhaW5zLFxuICAgIFV0aWxzOiB7IHV1aWQsIG1ha2VIYXNoIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAY2hhaW5zKFtcbiAgICAnY3JlYXRlJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iZWZvcmVIb29rKCdmaWxsTm9uUmVxdWlyZWQnLCB7XG4gICAgICBvbmx5OiBbJ2NyZWF0ZSddXG4gICAgfSk7XG4gICAgdGhpcy5iZWZvcmVIb29rKCdoYXNoUGFzc3dvcmQnLCB7XG4gICAgICBvbmx5OiBbJ2NyZWF0ZSddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oVGltZXN0YW1wc1JlY29yZE1peGluKVxuICBjbGFzcyBVc2VyUmVjb3JkIGV4dGVuZHMgUmVjb3JkIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IHBhc3N3b3JkOiA/c3RyaW5nID0gbnVsbDtcblxuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBlbWFpbDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2Jvb2xlYW4nIH0pIGVtYWlsVmVyaWZpZWQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIG5hbWU7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIG5pY2tuYW1lO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBwaWN0dXJlO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBzdWI7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHNhbHQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHBhc3N3b3JkSGFzaDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2Jvb2xlYW4nIH0pIGlzQWRtaW47XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBpc0xvY2tlZDtcblxuICAgIEBtZXRob2QgZmlsbE5vblJlcXVpcmVkKC4uLiBhcmdzKSB7XG4gICAgICB0aGlzLmVtYWlsVmVyaWZpZWQgPSB0aGlzLmVtYWlsVmVyaWZpZWQgIT0gbnVsbCA/IHRoaXMuZW1haWxWZXJpZmllZCA6IGZhbHNlO1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IHRoaXMuZW1haWw7XG4gICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5uaWNrbmFtZSB8fCBlbWFpbC5zcGxpdCgnQCcpWzBdO1xuICAgICAgdGhpcy5waWN0dXJlID0gdGhpcy5waWN0dXJlIHx8ICcnO1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLnN1YiB8fCBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIHRoaXMuc2FsdCA9IG1ha2VIYXNoKCdzaGEyNTYnLCBgJHtTRUNSRVR9fCR7dXVpZC52NCgpfWApO1xuICAgICAgdGhpcy5pc0FkbWluID0gdGhpcy5pc0FkbWluICE9IG51bGwgPyB0aGlzLmlzQWRtaW4gOiBmYWxzZTtcbiAgICAgIHRoaXMuaXNMb2NrZWQgPSBBVVRPX0xPQ0tJTkcgPT0gJ3llcyc7XG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGhhc2hQYXNzd29yZCguLi4gYXJncykge1xuICAgICAgdGhpcy5wYXNzd29yZEhhc2ggPSBjcnlwdG8ucGJrZGYyU3luYyh0aGlzLnBhc3N3b3JkLCB0aGlzLnNhbHQsIE51bWJlcihJVEVSQVRJT05TKSwgNjQsIEhBU0hfRElHRVNUKS50b1N0cmluZygnaGV4Jyk7XG4gICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBAbWV0aG9kIHZlcmlmeVBhc3N3b3JkKHBhc3N3b3JkKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5wYXNzd29yZEhhc2ggPT0gY3J5cHRvLnBia2RmMlN5bmMocGFzc3dvcmQsIHRoaXMuc2FsdCwgTnVtYmVyKElURVJBVElPTlMpLCA2NCwgSEFTSF9ESUdFU1QpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==