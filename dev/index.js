"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _index = _interopRequireDefault(require("@leansdk/leanes/lib/index.dev"));

var _index2 = _interopRequireDefault(require("@leansdk/leanes-fs-utils-addon/lib/index.dev"));

var _index3 = _interopRequireDefault(require("@leansdk/leanes-configurable-addon/lib/index.dev"));

var _index4 = _interopRequireWildcard(require("@leansdk/leanes-mapper-addon/lib/index.dev"));

var _index5 = _interopRequireDefault(require("@leansdk/leanes-mongo-addon/lib/index.dev"));

var _index6 = _interopRequireWildcard(require("@leansdk/leanes-restful-addon/lib/index.dev"));

var _dev = _interopRequireDefault(require("@leansdk/leanes-swagger-addon/dev"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _temp;

const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS;
let ServerApp = (_dec = plugin(_dev.default), _dec2 = plugin(_index6.TemplatableModule), _dec3 = plugin(_index6.default), _dec4 = plugin(_index5.default), _dec5 = plugin(_index4.MigratableModule), _dec6 = plugin(_index4.default), _dec7 = plugin(_index3.default), _dec8 = plugin(_index2.default), _dec9 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = (0, _index6.loadTemplates)(_class = (0, _index4.loadMigrations)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = (_temp = _class3 = class ServerApp extends _index.default {
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
})), _class2)) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = ServerApp;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJtZXRhIiwibmFtZUJ5IiwicmVzb2x2ZXIiLCJjb25zdGFudCIsInBsdWdpbiIsImxvYWRGaWxlcyIsIkxlYW5FUyIsIk5TIiwiU2VydmVyQXBwIiwiU3dhZ2dlckFkZG9uIiwiVGVtcGxhdGFibGVNb2R1bGUiLCJSZXN0ZnVsQWRkb24iLCJNb25nb0FkZG9uIiwiTWlncmF0YWJsZU1vZHVsZSIsIk1hcHBlckFkZG9uIiwiQ29uZmlndXJhYmxlQWRkb24iLCJGc1V0aWxzQWRkb24iLCJyZXF1aXJlIiwibmFtZSIsImxvYWRUZW1wbGF0ZXMiLCJsb2FkTWlncmF0aW9ucyIsIm9iamVjdCIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBR0E7Ozs7QUFFQSxNQUFNO0FBQUVBLEVBQUFBLFVBQUY7QUFBY0MsRUFBQUEsSUFBZDtBQUFvQkMsRUFBQUEsTUFBcEI7QUFBNEJDLEVBQUFBLFFBQTVCO0FBQXNDQyxFQUFBQSxRQUF0QztBQUFnREMsRUFBQUEsTUFBaEQ7QUFBd0RDLEVBQUFBO0FBQXhELElBQXNFQyxlQUFPQyxFQUFuRjtJQWVNQyxTLFdBVExKLE1BQU0sQ0FBQ0ssWUFBRCxDLFVBQ05MLE1BQU0sQ0FBQ00seUJBQUQsQyxVQUNOTixNQUFNLENBQUNPLGVBQUQsQyxVQUNOUCxNQUFNLENBQUNRLGVBQUQsQyxVQUNOUixNQUFNLENBQUNTLHdCQUFELEMsVUFDTlQsTUFBTSxDQUFDVSxlQUFELEMsVUFDTlYsTUFBTSxDQUFDVyxlQUFELEMsVUFDTlgsTUFBTSxDQUFDWSxlQUFELEMsVUFDTmQsUUFBUSxDQUFDZSxPQUFELEVBQVVDLElBQUksSUFBSUQsT0FBTyxDQUFDQyxJQUFELENBQXpCLEMsRUFaUm5CLFUsVUFDQU0sUyxjQUNBYyxxQixlQUNBQyxzQiwrS0FIRCxNQWFNWixTQWJOLFNBYXdCRixjQWJ4QixDQWErQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxDLFVBQ2hCZSxNLEdBQVMsRSx1RUFBckJyQixJOzs7Ozs7O2dHQUNBRyxROzs7OztXQUFnQm1CLFM7O3FHQUNoQm5CLFE7Ozs7O1dBQThCLG1COztnR0FDOUJBLFE7Ozs7O1dBQXlCLGM7O3dGQUN6QkEsUTs7Ozs7V0FBaUIsaUI7O21HQUNqQkEsUTs7Ozs7V0FBNEIsaUI7OzJGQUM1QkEsUTs7Ozs7V0FBb0Isb0I7OztlQUdSSyxTIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IExlYW5FUyBmcm9tICdAbGVhbnNkay9sZWFuZXMvbGliL2luZGV4LmRldic7XG5pbXBvcnQgRnNVdGlsc0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1mcy11dGlscy1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBDb25maWd1cmFibGVBZGRvbiBmcm9tICdAbGVhbnNkay9sZWFuZXMtY29uZmlndXJhYmxlLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdCBhcyBNYXBwZXJBZGRvbiwgTWlncmF0YWJsZU1vZHVsZSwgbG9hZE1pZ3JhdGlvbnNcbn0gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLW1hcHBlci1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBNb25nb0FkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1tb25nby1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCB7XG4gIGRlZmF1bHQgYXMgUmVzdGZ1bEFkZG9uLCBUZW1wbGF0YWJsZU1vZHVsZSwgbG9hZFRlbXBsYXRlc1xufSBmcm9tICdAbGVhbnNkay9sZWFuZXMtcmVzdGZ1bC1hZGRvbi9saWIvaW5kZXguZGV2JztcbmltcG9ydCBTd2FnZ2VyQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLXN3YWdnZXItYWRkb24vZGV2JztcblxuY29uc3QgeyBpbml0aWFsaXplLCBtZXRhLCBuYW1lQnksIHJlc29sdmVyLCBjb25zdGFudCwgcGx1Z2luLCBsb2FkRmlsZXMgfSA9IExlYW5FUy5OUztcblxuQGluaXRpYWxpemVcbkBsb2FkRmlsZXNcbkBsb2FkVGVtcGxhdGVzXG5AbG9hZE1pZ3JhdGlvbnNcbkBwbHVnaW4oU3dhZ2dlckFkZG9uKVxuQHBsdWdpbihUZW1wbGF0YWJsZU1vZHVsZSlcbkBwbHVnaW4oUmVzdGZ1bEFkZG9uKVxuQHBsdWdpbihNb25nb0FkZG9uKVxuQHBsdWdpbihNaWdyYXRhYmxlTW9kdWxlKVxuQHBsdWdpbihNYXBwZXJBZGRvbilcbkBwbHVnaW4oQ29uZmlndXJhYmxlQWRkb24pXG5AcGx1Z2luKEZzVXRpbHNBZGRvbilcbkByZXNvbHZlcihyZXF1aXJlLCBuYW1lID0+IHJlcXVpcmUobmFtZSkpXG5jbGFzcyBTZXJ2ZXJBcHAgZXh0ZW5kcyBMZWFuRVMge1xuICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIEBjb25zdGFudCBST09UID0gX19kaXJuYW1lO1xuICBAY29uc3RhbnQgTUlHUkFUSU9OU19BREFQVEVSID0gJ01pZ3JhdGlvbnNBZGFwdGVyJztcbiAgQGNvbnN0YW50IFVTRVJTX0FEQVBURVIgPSAnVXNlcnNBZGFwdGVyJztcbiAgQGNvbnN0YW50IFVTRVJTID0gJ1VzZXJzQ29sbGVjdGlvbic7XG4gIEBjb25zdGFudCBTRVNTSU9OU19BREFQVEVSID0gJ1Nlc3Npb25zQWRhcHRlcic7XG4gIEBjb25zdGFudCBTRVNTSU9OUyA9ICdTZXNzaW9uc0NvbGxlY3Rpb24nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2ZXJBcHA7XG4iXX0=