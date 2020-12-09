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

// import SwaggerResource from './resources/SwaggerResource';
const {
  initialize,
  meta,
  nameBy,
  resolver,
  constant,
  plugin,
  loadFiles
} = _index.default.NS; // @SwaggerResource

let ServerApp = (_dec = plugin(_dev.default), _dec2 = plugin(_index6.TemplatableModule), _dec3 = plugin(_index6.default), _dec4 = plugin(_index5.default), _dec5 = plugin(_index4.MigratableModule), _dec6 = plugin(_index4.default), _dec7 = plugin(_index3.default), _dec8 = plugin(_index2.default), _dec9 = resolver(require, name => require(name)), initialize(_class = loadFiles(_class = (0, _index6.loadTemplates)(_class = (0, _index4.loadMigrations)(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = _dec8(_class = _dec9(_class = (_class2 = (_temp = _class3 = class ServerApp extends _index.default {
  constructor(...args) {
    super(...args);
    (0, _initializerDefineProperty2.default)(this, "ROOT", _descriptor, this);
    (0, _initializerDefineProperty2.default)(this, "MIGRATIONS_ADAPTER", _descriptor2, this);
    (0, _initializerDefineProperty2.default)(this, "USERS_ADAPTER", _descriptor3, this);
    (0, _initializerDefineProperty2.default)(this, "USERS", _descriptor4, this);
    (0, _initializerDefineProperty2.default)(this, "SESSIONS_ADAPTER", _descriptor5, this);
    (0, _initializerDefineProperty2.default)(this, "SESSIONS", _descriptor6, this);
  } // @constant SWAGGER_ROUTER = 'SwaggerRouter';
  // @constant SWAGGER_GATEWAY = 'SwaggerGateway';


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluaXRpYWxpemUiLCJtZXRhIiwibmFtZUJ5IiwicmVzb2x2ZXIiLCJjb25zdGFudCIsInBsdWdpbiIsImxvYWRGaWxlcyIsIkxlYW5FUyIsIk5TIiwiU2VydmVyQXBwIiwiU3dhZ2dlckFkZG9uIiwiVGVtcGxhdGFibGVNb2R1bGUiLCJSZXN0ZnVsQWRkb24iLCJNb25nb0FkZG9uIiwiTWlncmF0YWJsZU1vZHVsZSIsIk1hcHBlckFkZG9uIiwiQ29uZmlndXJhYmxlQWRkb24iLCJGc1V0aWxzQWRkb24iLCJyZXF1aXJlIiwibmFtZSIsImxvYWRUZW1wbGF0ZXMiLCJsb2FkTWlncmF0aW9ucyIsIm9iamVjdCIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7O0FBR0E7Ozs7QUFFQTtBQUVBLE1BQU07QUFBRUEsRUFBQUEsVUFBRjtBQUFjQyxFQUFBQSxJQUFkO0FBQW9CQyxFQUFBQSxNQUFwQjtBQUE0QkMsRUFBQUEsUUFBNUI7QUFBc0NDLEVBQUFBLFFBQXRDO0FBQWdEQyxFQUFBQSxNQUFoRDtBQUF3REMsRUFBQUE7QUFBeEQsSUFBc0VDLGVBQU9DLEVBQW5GLEMsQ0FFQTs7SUFlTUMsUyxXQVRMSixNQUFNLENBQUNLLFlBQUQsQyxVQUNOTCxNQUFNLENBQUNNLHlCQUFELEMsVUFDTk4sTUFBTSxDQUFDTyxlQUFELEMsVUFDTlAsTUFBTSxDQUFDUSxlQUFELEMsVUFDTlIsTUFBTSxDQUFDUyx3QkFBRCxDLFVBQ05ULE1BQU0sQ0FBQ1UsZUFBRCxDLFVBQ05WLE1BQU0sQ0FBQ1csZUFBRCxDLFVBQ05YLE1BQU0sQ0FBQ1ksZUFBRCxDLFVBQ05kLFFBQVEsQ0FBQ2UsT0FBRCxFQUFVQyxJQUFJLElBQUlELE9BQU8sQ0FBQ0MsSUFBRCxDQUF6QixDLEVBWlJuQixVLFVBQ0FNLFMsY0FDQWMscUIsZUFDQUMsc0IsK0tBSEQsTUFhTVosU0FiTixTQWF3QkYsY0FieEIsQ0FhK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFTN0I7QUFDQTs7O0FBVjZCLEMsVUFDaEJlLE0sR0FBUyxFLHVFQUFyQnJCLEk7Ozs7Ozs7Z0dBQ0FHLFE7Ozs7O1dBQWdCbUIsUzs7cUdBQ2hCbkIsUTs7Ozs7V0FBOEIsbUI7O2dHQUM5QkEsUTs7Ozs7V0FBeUIsYzs7d0ZBQ3pCQSxROzs7OztXQUFpQixpQjs7bUdBQ2pCQSxROzs7OztXQUE0QixpQjs7MkZBQzVCQSxROzs7OztXQUFvQixvQjs7O2VBTVJLLFMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgTGVhbkVTIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy9saWIvaW5kZXguZGV2JztcbmltcG9ydCBGc1V0aWxzQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLWZzLXV0aWxzLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IENvbmZpZ3VyYWJsZUFkZG9uIGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1jb25maWd1cmFibGUtYWRkb24vbGliL2luZGV4LmRldic7XG5pbXBvcnQge1xuICBkZWZhdWx0IGFzIE1hcHBlckFkZG9uLCBNaWdyYXRhYmxlTW9kdWxlLCBsb2FkTWlncmF0aW9uc1xufSBmcm9tICdAbGVhbnNkay9sZWFuZXMtbWFwcGVyLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IE1vbmdvQWRkb24gZnJvbSAnQGxlYW5zZGsvbGVhbmVzLW1vbmdvLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IHtcbiAgZGVmYXVsdCBhcyBSZXN0ZnVsQWRkb24sIFRlbXBsYXRhYmxlTW9kdWxlLCBsb2FkVGVtcGxhdGVzXG59IGZyb20gJ0BsZWFuc2RrL2xlYW5lcy1yZXN0ZnVsLWFkZG9uL2xpYi9pbmRleC5kZXYnO1xuaW1wb3J0IFN3YWdnZXJBZGRvbiBmcm9tICdAbGVhbnNkay9sZWFuZXMtc3dhZ2dlci1hZGRvbi9kZXYnO1xuXG4vLyBpbXBvcnQgU3dhZ2dlclJlc291cmNlIGZyb20gJy4vcmVzb3VyY2VzL1N3YWdnZXJSZXNvdXJjZSc7XG5cbmNvbnN0IHsgaW5pdGlhbGl6ZSwgbWV0YSwgbmFtZUJ5LCByZXNvbHZlciwgY29uc3RhbnQsIHBsdWdpbiwgbG9hZEZpbGVzIH0gPSBMZWFuRVMuTlM7XG5cbi8vIEBTd2FnZ2VyUmVzb3VyY2VcblxuQGluaXRpYWxpemVcbkBsb2FkRmlsZXNcbkBsb2FkVGVtcGxhdGVzXG5AbG9hZE1pZ3JhdGlvbnNcbkBwbHVnaW4oU3dhZ2dlckFkZG9uKVxuQHBsdWdpbihUZW1wbGF0YWJsZU1vZHVsZSlcbkBwbHVnaW4oUmVzdGZ1bEFkZG9uKVxuQHBsdWdpbihNb25nb0FkZG9uKVxuQHBsdWdpbihNaWdyYXRhYmxlTW9kdWxlKVxuQHBsdWdpbihNYXBwZXJBZGRvbilcbkBwbHVnaW4oQ29uZmlndXJhYmxlQWRkb24pXG5AcGx1Z2luKEZzVXRpbHNBZGRvbilcbkByZXNvbHZlcihyZXF1aXJlLCBuYW1lID0+IHJlcXVpcmUobmFtZSkpXG5jbGFzcyBTZXJ2ZXJBcHAgZXh0ZW5kcyBMZWFuRVMge1xuICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIEBjb25zdGFudCBST09UID0gX19kaXJuYW1lO1xuICBAY29uc3RhbnQgTUlHUkFUSU9OU19BREFQVEVSID0gJ01pZ3JhdGlvbnNBZGFwdGVyJztcbiAgQGNvbnN0YW50IFVTRVJTX0FEQVBURVIgPSAnVXNlcnNBZGFwdGVyJztcbiAgQGNvbnN0YW50IFVTRVJTID0gJ1VzZXJzQ29sbGVjdGlvbic7XG4gIEBjb25zdGFudCBTRVNTSU9OU19BREFQVEVSID0gJ1Nlc3Npb25zQWRhcHRlcic7XG4gIEBjb25zdGFudCBTRVNTSU9OUyA9ICdTZXNzaW9uc0NvbGxlY3Rpb24nO1xuXG4gIC8vIEBjb25zdGFudCBTV0FHR0VSX1JPVVRFUiA9ICdTd2FnZ2VyUm91dGVyJztcbiAgLy8gQGNvbnN0YW50IFNXQUdHRVJfR0FURVdBWSA9ICdTd2FnZ2VyR2F0ZXdheSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZlckFwcDtcbiJdfQ==