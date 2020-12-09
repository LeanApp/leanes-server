"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

// This file is part of leanes-server.
//
// leanes-server is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-server is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-server.  If not, see <https://www.gnu.org/licenses/>.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY29yZHMvU2Vzc2lvblJlY29yZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSZWNvcmQiLCJUaW1lc3RhbXBzUmVjb3JkTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm5hbWVCeSIsIm1peGluIiwiYXR0cmlidXRlIiwiTlMiLCJTZXNzaW9uUmVjb3JkIiwidHlwZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxNQURJO0FBRUpDLElBQUFBLHFCQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxLQUg5QjtBQUdxQ0MsSUFBQUE7QUFIckMsTUFJRlIsTUFBTSxDQUFDUyxFQUpYO0FBRHlCLE1BVW5CQyxhQVZtQixXQVF4Qk4sTUFBTSxDQUFDSixNQUFELENBUmtCLFVBU3hCTyxLQUFLLENBQUNMLHFCQUFELENBVG1CLFVBY3RCTSxTQUFTLENBQUM7QUFBRUcsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQWRhLFVBZXRCSCxTQUFTLENBQUM7QUFBRUcsSUFBQUEsSUFBSSxFQUFFO0FBQVIsR0FBRCxDQWZhLEVBT3hCUixVQVB3QixxRUFPekIsTUFHTU8sYUFITixTQUc0QlQsTUFINUIsQ0FHbUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBLEdBVlYsVUFXUFcsVUFYTyxHQVdNQSxVQVhOLFVBWVZDLE1BWlUsR0FZRCxFQVpDLDJFQVd0QlAsTUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFZdEJELElBWnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWlCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFJlY29yZCxcbiAgICBUaW1lc3RhbXBzUmVjb3JkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluLCBhdHRyaWJ1dGVcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKFRpbWVzdGFtcHNSZWNvcmRNaXhpbilcbiAgY2xhc3MgU2Vzc2lvblJlY29yZCBleHRlbmRzIFJlY29yZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBhdHRyaWJ1dGUoeyB0eXBlOiAnc3RyaW5nJyB9KSB1aWQ7XG4gICAgQGF0dHJpYnV0ZSh7IHR5cGU6ICdkYXRlJyB9KSBleHBpcmVzO1xuICB9XG59XG4iXX0=