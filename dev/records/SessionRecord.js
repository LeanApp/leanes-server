"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _descriptor2, _class3, _temp;

  const {
    Record,
    TimestampsRecordMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin,
    attribute
  } = Module.NS;
  let SessionRecord = (_dec = partOf(Module), _dec2 = mixin(TimestampsRecordMixin), _dec3 = attribute({
    type: 'string'
  }), _dec4 = attribute({
    type: 'date'
  }), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class SessionRecord extends Record {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "uid", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "expires", _descriptor2, this);
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "uid", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "expires", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvU2Vzc2lvblJlY29yZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSZWNvcmQiLCJUaW1lc3RhbXBzUmVjb3JkTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiYXR0cmlidXRlIiwiTlMiLCJTZXNzaW9uUmVjb3JkIiwidHlwZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE1BREk7QUFFSkMsSUFBQUEscUJBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBLEtBSDlCO0FBR3FDQyxJQUFBQTtBQUhyQyxNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFEeUIsTUFVbkJDLGFBVm1CLFdBUXhCTixNQUFNLENBQUNKLE1BQUQsQ0FSa0IsVUFTeEJPLEtBQUssQ0FBQ0wscUJBQUQsQ0FUbUIsVUFjdEJNLFNBQVMsQ0FBQztBQUFFRyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBZGEsVUFldEJILFNBQVMsQ0FBQztBQUFFRyxJQUFBQSxJQUFJLEVBQUU7QUFBUixHQUFELENBZmEsRUFPeEJSLFVBUHdCLHFFQU96QixNQUdNTyxhQUhOLFNBRzRCVCxNQUg1QixDQUdtQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsR0FWVixVQVdQVyxVQVhPLEdBV01BLFVBWE4sVUFZVkMsTUFaVSxHQVlELEVBWkMsMkVBV3RCUCxNQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVl0QkQsSUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBaUIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFJlY29yZCxcbiAgICBUaW1lc3RhbXBzUmVjb3JkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLCBhdHRyaWJ1dGVcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKFRpbWVzdGFtcHNSZWNvcmRNaXhpbilcbiAgY2xhc3MgU2Vzc2lvblJlY29yZCBleHRlbmRzIFJlY29yZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSB1aWQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdkYXRlJyB9KSBleHBpcmVzO1xuICB9XG59XG4iXX0=