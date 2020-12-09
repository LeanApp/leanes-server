"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Migration,
    MongoMigrationMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    mixin
  } = Module.NS;
  let BaseMigration = (_dec = partOf(Module), _dec2 = mixin(MongoMigrationMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class BaseMigration extends Migration {
    static change() {}

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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvQmFzZU1pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJNaWdyYXRpb24iLCJNb25nb01pZ3JhdGlvbk1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtZXRob2QiLCJtaXhpbiIsIk5TIiwiQmFzZU1pZ3JhdGlvbiIsImNoYW5nZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsU0FESTtBQUVKQyxJQUFBQSxtQkFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUEsTUFIOUI7QUFHc0NDLElBQUFBO0FBSHRDLE1BSUZSLE1BQU0sQ0FBQ1MsRUFKWDtBQUR5QixNQVVuQkMsYUFWbUIsV0FReEJOLE1BQU0sQ0FBQ0osTUFBRCxDQVJrQixVQVN4QlEsS0FBSyxDQUFDTixtQkFBRCxDQVRtQixFQU94QkMsVUFQd0IscUVBT3pCLE1BR01PLGFBSE4sU0FHNEJULFNBSDVCLENBR3NDO0FBSXBDLFdBQWVVLE1BQWYsR0FBd0IsQ0FBRTs7QUFKVSxHQVZiLFVBV1BDLFVBWE8sR0FXTUEsVUFYTixVQVlWQyxNQVpVLEdBWUQsRUFaQywyRUFXdEJQLE1BWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBWXRCRCxJQVpzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWN0QkUsTUFkc0I7QUFnQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTWlncmF0aW9uLFxuICAgIE1vbmdvTWlncmF0aW9uTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1ldGhvZCwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1vbmdvTWlncmF0aW9uTWl4aW4pXG4gIGNsYXNzIEJhc2VNaWdyYXRpb24gZXh0ZW5kcyBNaWdyYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIHN0YXRpYyBjaGFuZ2UoKSB7fVxuICB9XG59XG4iXX0=