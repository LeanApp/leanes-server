"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _dec, _dec2, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
let Logger = (_dec = plugin(_index2.default), _dec2 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class Logger extends _index.default {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsaXplIiwibWV0YSIsIm5hbWVCeSIsInJlc29sdmVyIiwiY29uc3RhbnQiLCJwbHVnaW4iLCJsb2FkRmlsZXMiLCJMZWFuRVMiLCJOUyIsIkxvZ2dlciIsIkZzVXRpbHNBZGRvbiIsInJlcXVpcmUiLCJuYW1lIiwiX19maWxlbmFtZSIsIm9iamVjdCIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBOztBQUNBOzs7O0FBRUEsTUFBTTtBQUFFQSxFQUFBQSxVQUFGO0FBQWNDLEVBQUFBLElBQWQ7QUFBb0JDLEVBQUFBLE1BQXBCO0FBQTRCQyxFQUFBQSxRQUE1QjtBQUFzQ0MsRUFBQUEsUUFBdEM7QUFBZ0RDLEVBQUFBLE1BQWhEO0FBQXdEQyxFQUFBQTtBQUF4RCxJQUFzRUMsZUFBT0MsRUFBbkY7SUFNTUMsTSxXQUZMSixNQUFNLENBQUNLLGVBQUQsQyxVQUNOUCxRQUFRLENBQUNRLE9BQUQsRUFBVUMsSUFBSSxJQUFJRCxPQUFPLENBQUNDLElBQUQsQ0FBekIsQyxFQUhSWixVLFVBQ0FNLFMscUVBREQsTUFJTUcsTUFKTixTQUlxQkYsY0FKckIsQ0FJNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDLFVBQ1ZNLFUsR0FBYSxRLFVBQ2hCQyxNLEdBQVMsRSwyRUFEckJaLE07Ozs7Ozs7MEVBQ0FELEk7Ozs7Ozs7Z0dBQ0FHLFE7Ozs7O1dBQWdCVyxTOzs7QUFDbEI7ZUFFY04sTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5pbXBvcnQgTGVhbkVTIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy9saWIvaW5kZXguZGV2JztcbmltcG9ydCBGc1V0aWxzQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLWZzLXV0aWxzLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuXG5jb25zdCB7IGluaXRpYWxpemUsIG1ldGEsIG5hbWVCeSwgcmVzb2x2ZXIsIGNvbnN0YW50LCBwbHVnaW4sIGxvYWRGaWxlcyB9ID0gTGVhbkVTLk5TO1xuXG5AaW5pdGlhbGl6ZVxuQGxvYWRGaWxlc1xuQHBsdWdpbihGc1V0aWxzQWRkb24pXG5AcmVzb2x2ZXIocmVxdWlyZSwgbmFtZSA9PiByZXF1aXJlKG5hbWUpKVxuY2xhc3MgTG9nZ2VyIGV4dGVuZHMgTGVhbkVTIHtcbiAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSAnTG9nZ2VyJztcbiAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICBAY29uc3RhbnQgUk9PVCA9IF9fZGlybmFtZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2dlcjtcbiJdfQ==