"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Pipes,
    Proxy,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  const {
    LogMessage: {
      CHANGE,
      NONE,
      FATAL,
      ERROR,
      WARN,
      INFO,
      DEBUG
    }
  } = Pipes.NS;
  let LoggerProxy = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerProxy", _flowRuntime.default.extends(Proxy), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("addLogEntry", _flowRuntime.default.param("data", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerProxy extends Proxy {
    addLogEntry(data) {
      let _dataType = _flowRuntime.default.ref("object");

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("data", _dataType).assert(data);

      const {
        logLevel,
        sender,
        time,
        message
      } = data;

      switch (logLevel) {
        case FATAL:
        case ERROR:
          console.error(sender, '->', message);
          break;

        case INFO:
          console.info(sender, '->', message);
          break;

        case DEBUG:
          console.log(sender, '->', message);
          break;

        case WARN:
          console.warn(sender, '->', message);
          break;

        default:
          console.log(sender, '->', message);
      }
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "addLogEntry", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "addLogEntry"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9wcm94aWVzL0xvZ2dlclByb3h5LmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlBpcGVzIiwiUHJveHkiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiTG9nTWVzc2FnZSIsIkNIQU5HRSIsIk5PTkUiLCJGQVRBTCIsIkVSUk9SIiwiV0FSTiIsIklORk8iLCJERUJVRyIsIkxvZ2dlclByb3h5IiwiYWRkTG9nRW50cnkiLCJkYXRhIiwibG9nTGV2ZWwiLCJzZW5kZXIiLCJ0aW1lIiwibWVzc2FnZSIsImNvbnNvbGUiLCJlcnJvciIsImluZm8iLCJsb2ciLCJ3YXJuIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLEtBREk7QUFFSkMsSUFBQUEsS0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlAsTUFBTSxDQUFDUSxFQUpYO0FBS0EsUUFBTTtBQUNKQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUEsTUFBRjtBQUFVQyxNQUFBQSxJQUFWO0FBQWdCQyxNQUFBQSxLQUFoQjtBQUF1QkMsTUFBQUEsS0FBdkI7QUFBOEJDLE1BQUFBLElBQTlCO0FBQW9DQyxNQUFBQSxJQUFwQztBQUEwQ0MsTUFBQUE7QUFBMUM7QUFEUixNQUVGZixLQUFLLENBQUNPLEVBRlY7QUFOeUIsTUFZbkJTLFdBWm1CLHlDQVV6Qix1RUFFMEJmLEtBRjFCLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLDhFQUF3QixrQ0FBeEIsK0JBQWlDLDJCQUFqQyxFQU5GLENBVnlCLFdBV3hCRSxNQUFNLENBQUNKLE1BQUQsQ0FYa0IsZ0JBVXhCRyxVQVZ3Qix1REFVekIsTUFFTWMsV0FGTixTQUUwQmYsS0FGMUIsQ0FFZ0M7QUFJdEJnQixJQUFBQSxXQUFSLENBQW9CQyxJQUFwQixFQUF3QztBQUFBLHNCQUFoQixrQ0FBZ0I7O0FBQUEsc0RBQUwsMkJBQUs7O0FBQUE7O0FBQ3RDLFlBQU07QUFBRUMsUUFBQUEsUUFBRjtBQUFZQyxRQUFBQSxNQUFaO0FBQW9CQyxRQUFBQSxJQUFwQjtBQUEwQkMsUUFBQUE7QUFBMUIsVUFBc0NKLElBQTVDOztBQUNBLGNBQVFDLFFBQVI7QUFDRSxhQUFLUixLQUFMO0FBQ0EsYUFBS0MsS0FBTDtBQUNFVyxVQUFBQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0osTUFBZCxFQUFzQixJQUF0QixFQUE0QkUsT0FBNUI7QUFDQTs7QUFDRixhQUFLUixJQUFMO0FBQ0VTLFVBQUFBLE9BQU8sQ0FBQ0UsSUFBUixDQUFhTCxNQUFiLEVBQXFCLElBQXJCLEVBQTJCRSxPQUEzQjtBQUNBOztBQUNGLGFBQUtQLEtBQUw7QUFDRVEsVUFBQUEsT0FBTyxDQUFDRyxHQUFSLENBQVlOLE1BQVosRUFBb0IsSUFBcEIsRUFBMEJFLE9BQTFCO0FBQ0E7O0FBQ0YsYUFBS1QsSUFBTDtBQUNFVSxVQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYVAsTUFBYixFQUFxQixJQUFyQixFQUEyQkUsT0FBM0I7QUFDQTs7QUFDRjtBQUNFQyxVQUFBQSxPQUFPLENBQUNHLEdBQVIsQ0FBWU4sTUFBWixFQUFvQixJQUFwQixFQUEwQkUsT0FBMUI7QUFmSjtBQWlCRDs7QUF2QjZCLEdBWlAsVUFhUE0sVUFiTyxHQWFNQSxVQWJOLFVBY1ZDLE1BZFUsR0FjRCxFQWRDLDJFQWF0QnZCLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJGQWdCdEJDLE1BaEJzQjtBQXFDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBQaXBlcyxcbiAgICBQcm94eSxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG4gIGNvbnN0IHtcbiAgICBMb2dNZXNzYWdlOiB7IENIQU5HRSwgTk9ORSwgRkFUQUwsIEVSUk9SLCBXQVJOLCBJTkZPLCBERUJVRyB9XG4gIH0gPSBQaXBlcy5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgTG9nZ2VyUHJveHkgZXh0ZW5kcyBQcm94eSB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgYWRkTG9nRW50cnkoZGF0YTogb2JqZWN0KTogdm9pZCB7XG4gICAgICBjb25zdCB7IGxvZ0xldmVsLCBzZW5kZXIsIHRpbWUsIG1lc3NhZ2UgfSA9IGRhdGE7XG4gICAgICBzd2l0Y2ggKGxvZ0xldmVsKSB7XG4gICAgICAgIGNhc2UgRkFUQUw6XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihzZW5kZXIsICctPicsIG1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIElORk86XG4gICAgICAgICAgY29uc29sZS5pbmZvKHNlbmRlciwgJy0+JywgbWVzc2FnZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgREVCVUc6XG4gICAgICAgICAgY29uc29sZS5sb2coc2VuZGVyLCAnLT4nLCBtZXNzYWdlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBXQVJOOlxuICAgICAgICAgIGNvbnNvbGUud2FybihzZW5kZXIsICctPicsIG1lc3NhZ2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRlciwgJy0+JywgbWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=