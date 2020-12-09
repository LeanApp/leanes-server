"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _default = Module => {
  var _dec, _class, _class2, _init, _class3, _temp;

  const {
    BaseMigration,
    initialize,
    partOf,
    nameBy,
    meta,
    method
  } = Module.NS;
  let CreateUsersMigration = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class CreateUsersMigration extends BaseMigration {
    static change() {
      const name = 'users';
      this.createCollection(name);
      this.addField(name, 'id', 'string');
      this.addField(name, 'type', 'string');
      this.addTimestamps(name);
      this.addField(name, 'email', 'string');
      this.addField(name, 'email_verified', 'boolean');
      this.addField(name, 'name', 'string');
      this.addField(name, 'nickname', 'string');
      this.addField(name, 'picture', 'string');
      this.addField(name, 'sub', 'string');
      this.addField(name, 'salt', 'string');
      this.addField(name, 'password_hash', 'string');
      this.addField(name, 'isAdmin', 'boolean');
      this.addField(name, 'isLocked', 'boolean');
      this.addIndex(name, ['id'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['sub'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['email'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['nickname'], {
        type: 'hash',
        unique: true
      });
    }

  }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;