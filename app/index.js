"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _leanes = _interopRequireDefault(require("@leansdk/leanes"));

var _leanesFsUtilsAddon = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon"));

var _leanesConfigurableAddon = _interopRequireDefault(require("@leansdk/leanes-configurable-addon"));

var _leanesMapperAddon = _interopRequireWildcard(require("@leansdk/leanes-mapper-addon"));

var _leanesMongoAddon = _interopRequireDefault(require("@leansdk/leanes-mongo-addon"));

var _leanesRestfulAddon = _interopRequireWildcard(require("@leansdk/leanes-restful-addon"));

var _leanesQueryableAddon = _interopRequireDefault(require("@leansdk/leanes-queryable-addon"));

var _leanesSwaggerAddon = _interopRequireDefault(require("@leansdk/leanes-swagger-addon"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _leanes.default.NS;
let ServerApp = (_dec = plugin(_leanesSwaggerAddon.default), _dec2 = plugin(_leanesQueryableAddon.default), _dec3 = plugin(_leanesRestfulAddon.TemplatableModule), _dec4 = plugin(_leanesRestfulAddon.default), _dec5 = plugin(_leanesMongoAddon.default), _dec6 = plugin(_leanesMapperAddon.MigratableModule), _dec7 = plugin(_leanesMapperAddon.default), _dec8 = plugin(_leanesConfigurableAddon.default), _dec9 = plugin(_leanesFsUtilsAddon.default), _dec10 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = (0, _leanesRestfulAddon.loadTemplates)(_class = (0, _leanesMapperAddon.loadMigrations)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = _dec10(_class = (_class2 = (_temp = _class3 = class ServerApp extends _leanes.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "MIGRATIONS_ADAPTER", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "USERS_ADAPTER", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "USERS", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "SESSIONS_ADAPTER", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "SESSIONS", _descriptor6, this);
  }

}, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function () {
    return _init;
  }
}), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ROOT", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return __dirname;
  }
}), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "MIGRATIONS_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'MigrationsAdapter';
  }
}), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "USERS_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'UsersAdapter';
  }
}), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "USERS", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'UsersCollection';
  }
}), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SESSIONS_ADAPTER", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SessionsAdapter';
  }
}), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "SESSIONS", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 'SessionsCollection';
  }
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = ServerApp;
exports.default = _default;