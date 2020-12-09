"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _crypto = _interopRequireDefault(require("crypto"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvVXNlclJlY29yZC5qcyJdLCJuYW1lcyI6WyJPUklHSU5TIiwiSEFTSF9ESUdFU1QiLCJJVEVSQVRJT05TIiwiVE9LRU5fQUxHT1JJVEhNIiwiS0VZSUQiLCJJU1NVRVIiLCJBVVRPX0xPQ0tJTkciLCJSRUdJU1RSQVRJT05fSVNfQUxMT1dFRCIsIlBVQkxJQ19LRVkiLCJQUklWQVRFX0tFWSIsIlNFQ1JFVCIsIkRFRkFVTFRfVVNFUlMiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiUmVjb3JkIiwiVGltZXN0YW1wc1JlY29yZE1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtaXhpbiIsImF0dHJpYnV0ZSIsInByb3BlcnR5IiwibWV0aG9kIiwiY2hhaW5zIiwiVXRpbHMiLCJ1dWlkIiwiTlMiLCJVc2VyUmVjb3JkIiwiYmVmb3JlSG9vayIsIm9ubHkiLCJ0eXBlIiwiZmlsbE5vblJlcXVpcmVkIiwiYXJncyIsImVtYWlsVmVyaWZpZWQiLCJuYW1lIiwiZW1haWwiLCJuaWNrbmFtZSIsInNwbGl0IiwicGljdHVyZSIsInN1YiIsImNyeXB0byIsInJhbmRvbUJ5dGVzIiwidG9TdHJpbmciLCJzYWx0IiwidjQiLCJpc0FkbWluIiwiaXNMb2NrZWQiLCJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZEhhc2giLCJwYmtkZjJTeW5jIiwicGFzc3dvcmQiLCJ2ZXJpZnlQYXNzd29yZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBLE1BQU07QUFDSkEsRUFBQUEsT0FESTtBQUNLQyxFQUFBQSxXQURMO0FBQ2tCQyxFQUFBQSxVQURsQjtBQUM4QkMsRUFBQUEsZUFEOUI7QUFDK0NDLEVBQUFBLEtBRC9DO0FBQ3NEQyxFQUFBQSxNQUR0RDtBQUM4REMsRUFBQUEsWUFEOUQ7QUFDNEVDLEVBQUFBLHVCQUQ1RTtBQUVKQyxFQUFBQSxVQUZJO0FBRVFDLEVBQUFBLFdBRlI7QUFFcUJDLEVBQUFBLE1BRnJCO0FBRTZCQyxFQUFBQTtBQUY3QixJQUdGQyxPQUFPLENBQUNDLEdBSFo7O2VBS2dCQyxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxNQURJO0FBRUpDLElBQUFBLHFCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUdxQ0MsSUFBQUEsU0FIckM7QUFHZ0RDLElBQUFBLFFBSGhEO0FBRzBEQyxJQUFBQSxNQUgxRDtBQUdrRUMsSUFBQUEsTUFIbEU7QUFJSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFKSCxNQUtGYixNQUFNLENBQUNjLEVBTFg7QUFEeUIsTUFxQm5CQyxVQXJCbUIseUNBUXpCLHNFQWF5QmQsTUFiekIsR0FjRSw2RUFkRixFQWVFLHlFQWZGLEVBaUJFLDBDQUFrQiw4QkFBRyw2QkFBSCxDQUFsQixDQWpCRixFQW1CRSxrRUFuQkYsRUFvQkUsMEVBcEJGLEVBcUJFLGlFQXJCRixFQXNCRSxxRUF0QkYsRUF1QkUsb0VBdkJGLEVBd0JFLGdFQXhCRixFQXlCRSxpRUF6QkYsRUEwQkUseUVBMUJGLEVBMkJFLG9FQTNCRixFQTRCRSxxRUE1QkYsRUE4QkUsOEdBOUJGLEVBMENFLDJHQTFDRixFQStDRSw4SUFBZ0MsOEJBQWhDLEVBL0NGLENBUnlCLFdBU3hCVSxNQUFNLENBQUMsQ0FDTixRQURNLENBQUQsRUFFSixZQUFZO0FBQ2IsU0FBS0ssVUFBTCxDQUFnQixpQkFBaEIsRUFBbUM7QUFDakNDLE1BQUFBLElBQUksRUFBRSxDQUFDLFFBQUQ7QUFEMkIsS0FBbkM7QUFHQSxTQUFLRCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDO0FBQzlCQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQyxRQUFEO0FBRHdCLEtBQWhDO0FBR0QsR0FUTSxDQVRrQixVQW1CeEJiLE1BQU0sQ0FBQ0osTUFBRCxDQW5Ca0IsVUFvQnhCTyxLQUFLLENBQUNMLHFCQUFELENBcEJtQix3Q0F5QkwsOEJBQUcsNkJBQUgsQ0F6QkssV0EyQnRCTSxTQUFTLENBQUM7QUFBRVUsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQTNCYSxVQTRCdEJWLFNBQVMsQ0FBQztBQUFFVSxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBNUJhLFVBNkJ0QlYsU0FBUyxDQUFDO0FBQUVVLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0E3QmEsVUE4QnRCVixTQUFTLENBQUM7QUFBRVUsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQTlCYSxXQStCdEJWLFNBQVMsQ0FBQztBQUFFVSxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBL0JhLFdBZ0N0QlYsU0FBUyxDQUFDO0FBQUVVLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0FoQ2EsV0FpQ3RCVixTQUFTLENBQUM7QUFBRVUsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQWpDYSxXQWtDdEJWLFNBQVMsQ0FBQztBQUFFVSxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBbENhLFdBbUN0QlYsU0FBUyxDQUFDO0FBQUVVLElBQUFBLElBQUksRUFBRTtBQUFSLEdBQUQsQ0FuQ2EsV0FvQ3RCVixTQUFTLENBQUM7QUFBRVUsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQXBDYSxnQkFReEJmLFVBUndCLHFGQVF6QixNQWFNWSxVQWJOLFNBYXlCZCxNQWJ6QixDQWFnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBaUJ0QmtCLElBQUFBLGVBQVIsQ0FBd0IsR0FBSUMsSUFBNUIsRUFBa0M7QUFDaEMsV0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLElBQXNCLElBQXRCLEdBQTZCLEtBQUtBLGFBQWxDLEdBQWtELEtBQXZFO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsSUFBYSxLQUFLQyxLQUE5QjtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxJQUFpQkQsS0FBSyxDQUFDRSxLQUFOLENBQVksR0FBWixFQUFpQixDQUFqQixDQUFqQztBQUNBLFdBQUtDLE9BQUwsR0FBZSxLQUFLQSxPQUFMLElBQWdCLEVBQS9CO0FBQ0EsV0FBS0MsR0FBTCxHQUFXLEtBQUtBLEdBQUwsSUFBWUMsZ0JBQU9DLFdBQVAsQ0FBbUIsRUFBbkIsRUFBdUJDLFFBQXZCLENBQWdDLEtBQWhDLENBQXZCO0FBQ0EsV0FBS0MsSUFBTCxHQUFhLEdBQUVuQyxNQUFPLElBQUdpQixJQUFJLENBQUNtQixFQUFMLEVBQVUsRUFBbkM7QUFDQSxXQUFLQyxPQUFMLEdBQWUsS0FBS0EsT0FBTCxJQUFnQixJQUFoQixHQUF1QixLQUFLQSxPQUE1QixHQUFzQyxLQUFyRDtBQUNBLFdBQUtDLFFBQUwsR0FBZ0IxQyxZQUFZLElBQUksS0FBaEM7QUFDQSxhQUFPNEIsSUFBUDtBQUNEOztBQUVPZSxJQUFBQSxZQUFSLENBQXFCLEdBQUlmLElBQXpCLEVBQStCO0FBQzdCLFdBQUtnQixZQUFMLEdBQW9CUixnQkFBT1MsVUFBUCxDQUFrQixLQUFLQyxRQUF2QixFQUFpQyxLQUFLUCxJQUF0QyxFQUE0QzNDLFVBQTVDLEVBQXdELEVBQXhELEVBQTRERCxXQUE1RCxFQUF5RTJDLFFBQXpFLENBQWtGLEtBQWxGLENBQXBCO0FBQ0EsYUFBT1YsSUFBUDtBQUNEOztBQUVPbUIsSUFBQUEsY0FBUixDQUF1QkQsUUFBdkIsRUFBMEM7QUFBQSxzREFBUiw4QkFBUTs7QUFDeEMsZ0NBQU8sS0FBS0YsWUFBTCxJQUFxQlIsZ0JBQU9TLFVBQVAsQ0FBa0JDLFFBQWxCLEVBQTRCLEtBQUtQLElBQWpDLEVBQXVDM0MsVUFBdkMsRUFBbUQsRUFBbkQsRUFBdURELFdBQXZELEVBQW9FMkMsUUFBcEUsQ0FBNkUsS0FBN0UsQ0FBNUI7QUFDRDs7QUFwQzZCLEdBckJQLFVBc0JQVSxVQXRCTyxHQXNCTUEsVUF0Qk4sVUF1QlZDLE1BdkJVLEdBdUJELEVBdkJDLDJFQXNCdEJuQyxNQXRCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUF1QnRCRCxJQXZCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2R0F5QnRCSSxRQXpCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBeUJPLElBekJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUZBc0N0QkMsTUF0Q3NCLDBLQWtEdEJBLE1BbERzQix5S0F1RHRCQSxNQXZEc0I7QUEyRDFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuY29uc3Qge1xuICBPUklHSU5TLCBIQVNIX0RJR0VTVCwgSVRFUkFUSU9OUywgVE9LRU5fQUxHT1JJVEhNLCBLRVlJRCwgSVNTVUVSLCBBVVRPX0xPQ0tJTkcsIFJFR0lTVFJBVElPTl9JU19BTExPV0VELFxuICBQVUJMSUNfS0VZLCBQUklWQVRFX0tFWSwgU0VDUkVULCBERUZBVUxUX1VTRVJTXG59ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFJlY29yZCxcbiAgICBUaW1lc3RhbXBzUmVjb3JkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLCBhdHRyaWJ1dGUsIHByb3BlcnR5LCBtZXRob2QsIGNoYWlucyxcbiAgICBVdGlsczogeyB1dWlkIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAY2hhaW5zKFtcbiAgICAnY3JlYXRlJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iZWZvcmVIb29rKCdmaWxsTm9uUmVxdWlyZWQnLCB7XG4gICAgICBvbmx5OiBbJ2NyZWF0ZSddXG4gICAgfSk7XG4gICAgdGhpcy5iZWZvcmVIb29rKCdoYXNoUGFzc3dvcmQnLCB7XG4gICAgICBvbmx5OiBbJ2NyZWF0ZSddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oVGltZXN0YW1wc1JlY29yZE1peGluKVxuICBjbGFzcyBVc2VyUmVjb3JkIGV4dGVuZHMgUmVjb3JkIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IHBhc3N3b3JkOiA/c3RyaW5nID0gbnVsbDtcblxuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBlbWFpbDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2Jvb2xlYW4nIH0pIGVtYWlsVmVyaWZpZWQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIG5hbWU7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIG5pY2tuYW1lO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBwaWN0dXJlO1xuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSBzdWI7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHNhbHQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdzdHJpbmcnIH0pIHBhc3N3b3JkSGFzaDtcbiAgICBAYXR0cmlidXRlKHsgdHlwZTogJ2Jvb2xlYW4nIH0pIGlzQWRtaW47XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdib29sZWFuJyB9KSBpc0xvY2tlZDtcblxuICAgIEBtZXRob2QgZmlsbE5vblJlcXVpcmVkKC4uLiBhcmdzKSB7XG4gICAgICB0aGlzLmVtYWlsVmVyaWZpZWQgPSB0aGlzLmVtYWlsVmVyaWZpZWQgIT0gbnVsbCA/IHRoaXMuZW1haWxWZXJpZmllZCA6IGZhbHNlO1xuICAgICAgdGhpcy5uYW1lID0gdGhpcy5uYW1lIHx8IHRoaXMuZW1haWw7XG4gICAgICB0aGlzLm5pY2tuYW1lID0gdGhpcy5uaWNrbmFtZSB8fCBlbWFpbC5zcGxpdCgnQCcpWzBdO1xuICAgICAgdGhpcy5waWN0dXJlID0gdGhpcy5waWN0dXJlIHx8ICcnO1xuICAgICAgdGhpcy5zdWIgPSB0aGlzLnN1YiB8fCBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIHRoaXMuc2FsdCA9IGAke1NFQ1JFVH18JHt1dWlkLnY0KCl9YDtcbiAgICAgIHRoaXMuaXNBZG1pbiA9IHRoaXMuaXNBZG1pbiAhPSBudWxsID8gdGhpcy5pc0FkbWluIDogZmFsc2U7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gQVVUT19MT0NLSU5HID09ICd5ZXMnO1xuICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYXNoUGFzc3dvcmQoLi4uIGFyZ3MpIHtcbiAgICAgIHRoaXMucGFzc3dvcmRIYXNoID0gY3J5cHRvLnBia2RmMlN5bmModGhpcy5wYXNzd29yZCwgdGhpcy5zYWx0LCBJVEVSQVRJT05TLCA2NCwgSEFTSF9ESUdFU1QpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIEBtZXRob2QgdmVyaWZ5UGFzc3dvcmQocGFzc3dvcmQpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLnBhc3N3b3JkSGFzaCA9PSBjcnlwdG8ucGJrZGYyU3luYyhwYXNzd29yZCwgdGhpcy5zYWx0LCBJVEVSQVRJT05TLCA2NCwgSEFTSF9ESUdFU1QpLnRvU3RyaW5nKCdoZXgnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==