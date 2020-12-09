"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Collection,
    MongoCollectionMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let MigrationsCollection = (_dec = partOf(Module), _dec2 = mixin(MongoCollectionMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MigrationsCollection extends Collection {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL01pZ3JhdGlvbnNDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIkNvbGxlY3Rpb24iLCJNb25nb0NvbGxlY3Rpb25NaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJOUyIsIk1pZ3JhdGlvbnNDb2xsZWN0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxVQURJO0FBRUpDLElBQUFBLG9CQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQTtBQUg5QixNQUlGUCxNQUFNLENBQUNRLEVBSlg7QUFEeUIsTUFVbkJDLG9CQVZtQixXQVF4QkwsTUFBTSxDQUFDSixNQUFELENBUmtCLFVBU3hCTyxLQUFLLENBQUNMLG9CQUFELENBVG1CLEVBT3hCQyxVQVB3QixxRUFPekIsTUFHTU0sb0JBSE4sU0FHbUNSLFVBSG5DLENBRzhDLEVBVnJCLFVBV1BTLFVBWE8sR0FXTUEsVUFYTixVQVlWQyxNQVpVLEdBWUQsRUFaQywyRUFXdEJMLE1BWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBWXRCRCxJQVpzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQ29sbGVjdGlvbixcbiAgICBNb25nb0NvbGxlY3Rpb25NaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1vbmdvQ29sbGVjdGlvbk1peGluKVxuICBjbGFzcyBNaWdyYXRpb25zQ29sbGVjdGlvbiBleHRlbmRzIENvbGxlY3Rpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIH1cbn1cbiJdfQ==