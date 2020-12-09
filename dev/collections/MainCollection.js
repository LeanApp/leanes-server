"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _default = Module => {
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Collection,
    MongoCollectionMixin,
    GenerateUuidIdMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let MainCollection = (_dec = partOf(Module), _dec2 = mixin(MongoCollectionMixin), _dec3 = mixin(GenerateUuidIdMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class MainCollection extends Collection {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL01haW5Db2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIkNvbGxlY3Rpb24iLCJNb25nb0NvbGxlY3Rpb25NaXhpbiIsIkdlbmVyYXRlVXVpZElkTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiTlMiLCJNYWluQ29sbGVjdGlvbiIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsVUFESTtBQUVKQyxJQUFBQSxvQkFGSTtBQUdKQyxJQUFBQSxtQkFISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLElBSmhCO0FBSXNCQyxJQUFBQSxNQUp0QjtBQUk4QkMsSUFBQUE7QUFKOUIsTUFLRlIsTUFBTSxDQUFDUyxFQUxYO0FBRHlCLE1BWW5CQyxjQVptQixXQVN4QkwsTUFBTSxDQUFDTCxNQUFELENBVGtCLFVBVXhCUSxLQUFLLENBQUNOLG9CQUFELENBVm1CLFVBV3hCTSxLQUFLLENBQUNMLG1CQUFELENBWG1CLEVBUXhCQyxVQVJ3QixvRkFRekIsTUFJTU0sY0FKTixTQUk2QlQsVUFKN0IsQ0FJd0MsRUFaZixVQWFQVSxVQWJPLEdBYU1BLFVBYk4sVUFjVkMsTUFkVSxHQWNELEVBZEMsMkVBYXRCTCxNQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWN0QkQsSUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWdCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBDb2xsZWN0aW9uLFxuICAgIE1vbmdvQ29sbGVjdGlvbk1peGluLFxuICAgIEdlbmVyYXRlVXVpZElkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihNb25nb0NvbGxlY3Rpb25NaXhpbilcbiAgQG1peGluKEdlbmVyYXRlVXVpZElkTWl4aW4pXG4gIGNsYXNzIE1haW5Db2xsZWN0aW9uIGV4dGVuZHMgQ29sbGVjdGlvbiB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgfVxufVxuIl19