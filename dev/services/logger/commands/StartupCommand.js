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
    Command,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let StartupCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("StartupCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("initializeSubCommands", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class StartupCommand extends Command {
    initializeSubCommands() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeSubCommands", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeSubCommands"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9jb21tYW5kcy9TdGFydHVwQ29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJDb21tYW5kIiwiUHJlcGFyZUNvbnRyb2xsZXJDb21tYW5kIiwiUHJlcGFyZU1vZGVsQ29tbWFuZCIsIlByZXBhcmVWaWV3Q29tbWFuZCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJTdGFydHVwQ29tbWFuZCIsImluaXRpYWxpemVTdWJDb21tYW5kcyIsImFkZFN1YkNvbW1hbmQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSx3QkFGSTtBQUdKQyxJQUFBQSxtQkFISTtBQUlKQyxJQUFBQSxrQkFKSTtBQUtKQyxJQUFBQSxVQUxJO0FBS1FDLElBQUFBLE1BTFI7QUFLZ0JDLElBQUFBLElBTGhCO0FBS3NCQyxJQUFBQSxNQUx0QjtBQUs4QkMsSUFBQUE7QUFMOUIsTUFNRlQsTUFBTSxDQUFDVSxFQU5YO0FBRHlCLE1BV25CQyxjQVhtQix5Q0FTekIsMEVBRTZCVixPQUY3QixHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxpRkFBK0IsMkJBQS9CLEVBTkYsQ0FUeUIsV0FVeEJLLE1BQU0sQ0FBQ04sTUFBRCxDQVZrQixnQkFTeEJLLFVBVHdCLHVEQVN6QixNQUVNTSxjQUZOLFNBRTZCVixPQUY3QixDQUVxQztBQUkzQlcsSUFBQUEscUJBQVIsR0FBc0M7QUFBQSxzREFBTCwyQkFBSzs7QUFDcEMsV0FBS0MsYUFBTCxDQUFtQlgsd0JBQW5CO0FBQ0EsV0FBS1csYUFBTCxDQUFtQlYsbUJBQW5CO0FBQ0EsV0FBS1UsYUFBTCxDQUFtQlQsa0JBQW5CO0FBQ0Q7O0FBUmtDLEdBWFosVUFZUFUsVUFaTyxHQVlNQSxVQVpOLFVBYVZDLE1BYlUsR0FhRCxFQWJDLDJFQVl0Qk4sTUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFhdEJGLElBYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUdBZXRCQyxNQWZzQjtBQXFCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBDb21tYW5kLFxuICAgIFByZXBhcmVDb250cm9sbGVyQ29tbWFuZCxcbiAgICBQcmVwYXJlTW9kZWxDb21tYW5kLFxuICAgIFByZXBhcmVWaWV3Q29tbWFuZCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFN0YXJ0dXBDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgaW5pdGlhbGl6ZVN1YkNvbW1hbmRzKCk6IHZvaWQge1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVDb250cm9sbGVyQ29tbWFuZCk7XG4gICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcGFyZU1vZGVsQ29tbWFuZCk7XG4gICAgICB0aGlzLmFkZFN1YkNvbW1hbmQoUHJlcGFyZVZpZXdDb21tYW5kKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==