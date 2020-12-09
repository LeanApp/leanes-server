"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Configuration,
    initialize,
    partOf,
    meta,
    property,
    nameBy
  } = Module.NS;
  let MainConfiguration = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MainConfiguration", _flowRuntime.default.extends(Configuration), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("manifestPath", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("configPath", _flowRuntime.default.return(_flowRuntime.default.string())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MainConfiguration extends Configuration {
    get manifestPath() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert('../package.json');
    }

    get configPath() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert(`../configs/${this.environment}`);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "manifestPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "manifestPath"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configPath", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configPath"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3hpZXMvTWFpbkNvbmZpZ3VyYXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQ29uZmlndXJhdGlvbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJuYW1lQnkiLCJOUyIsIk1haW5Db25maWd1cmF0aW9uIiwibWFuaWZlc3RQYXRoIiwiY29uZmlnUGF0aCIsImVudmlyb25tZW50IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGFBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxJQUZoQjtBQUVzQkMsSUFBQUEsUUFGdEI7QUFFZ0NDLElBQUFBO0FBRmhDLE1BR0ZOLE1BQU0sQ0FBQ08sRUFIWDtBQUR5QixNQVFuQkMsaUJBUm1CLHlDQU16Qiw2RUFFZ0NQLGFBRmhDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLHdFQUE0Qiw2QkFBNUIsRUFORixFQVVFLHNFQUEwQiw2QkFBMUIsRUFWRixDQU55QixXQU94QkUsTUFBTSxDQUFDSCxNQUFELENBUGtCLGdCQU14QkUsVUFOd0IsdURBTXpCLE1BRU1NLGlCQUZOLFNBRWdDUCxhQUZoQyxDQUU4QztBQUk1QyxRQUFjUSxZQUFkLEdBQXFDO0FBQUEsc0RBQVAsNkJBQU87O0FBQ25DLGdDQUFPLGlCQUFQO0FBQ0Q7O0FBRUQsUUFBY0MsVUFBZCxHQUFtQztBQUFBLHVEQUFQLDZCQUFPOztBQUNqQyxpQ0FBUSxjQUFhLEtBQUtDLFdBQVksRUFBdEM7QUFDRDs7QUFWMkMsR0FSckIsVUFTUEMsVUFUTyxHQVNNQSxVQVROLFVBVVZDLE1BVlUsR0FVRCxFQVZDLDJFQVN0QlAsTUFUc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFVdEJGLElBVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEZBWXRCQyxRQVpzQixxS0FnQnRCQSxRQWhCc0I7QUFvQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQ29uZmlndXJhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIHByb3BlcnR5LCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgTWFpbkNvbmZpZ3VyYXRpb24gZXh0ZW5kcyBDb25maWd1cmF0aW9uIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IGdldCBtYW5pZmVzdFBhdGgoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiAnLi4vcGFja2FnZS5qc29uJztcbiAgICB9XG5cbiAgICBAcHJvcGVydHkgZ2V0IGNvbmZpZ1BhdGgoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiBgLi4vY29uZmlncy8ke3RoaXMuZW52aXJvbm1lbnR9YDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==