"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _leanes = _interopRequireDefault(require("@leansdk/leanes"));

var _leanesFsUtilsAddon = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon"));

var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _leanes.default.NS;
let Logger = (_dec = plugin(_leanesFsUtilsAddon.default), _dec2 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class Logger extends _leanes.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
  }

}, _class3.__filename = 'Logger', _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
}), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "ROOT", [constant], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return __dirname;
  }
})), _class2)) || _class) || _class) || _class) || _class);
;
var _default = Logger;
exports.default = _default;