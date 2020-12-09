"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

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
const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    STARTUP,
    STARTUP_COMPLETE,
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
  let StartupCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("StartupCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("initializeSubCommands", _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class StartupCommand extends Command {
    initializeSubCommands() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
    }

    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      super.execute(note);
      this.facade.removeCommand(STARTUP);
      this.send(STARTUP_COMPLETE);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeSubCommands", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeSubCommands"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1N0YXJ0dXBDb21tYW5kLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNUQVJUVVAiLCJTVEFSVFVQX0NPTVBMRVRFIiwiQ29tbWFuZCIsIlByZXBhcmVDb250cm9sbGVyQ29tbWFuZCIsIlByZXBhcmVNb2RlbENvbW1hbmQiLCJQcmVwYXJlVmlld0NvbW1hbmQiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiU3RhcnR1cENvbW1hbmQiLCJpbml0aWFsaXplU3ViQ29tbWFuZHMiLCJhZGRTdWJDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJmYWNhZGUiLCJyZW1vdmVDb21tYW5kIiwic2VuZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBSWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBQ0tDLElBQUFBLGdCQURMO0FBRUpDLElBQUFBLE9BRkk7QUFHSkMsSUFBQUEsd0JBSEk7QUFJSkMsSUFBQUEsbUJBSkk7QUFLSkMsSUFBQUEsa0JBTEk7QUFNSkMsSUFBQUEsVUFOSTtBQU1RQyxJQUFBQSxNQU5SO0FBTWdCQyxJQUFBQSxJQU5oQjtBQU1zQkMsSUFBQUEsTUFOdEI7QUFNOEJDLElBQUFBO0FBTjlCLE1BT0ZYLE1BQU0sQ0FBQ1ksRUFQWDtBQUR5QixNQVluQkMsY0FabUIseUNBVXpCLDBFQUU2QlYsT0FGN0IsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUUsaUZBQStCLDJCQUEvQixFQU5GLEVBWUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBWkYsQ0FWeUIsV0FXeEJLLE1BQU0sQ0FBQ1IsTUFBRCxDQVhrQixnQkFVeEJPLFVBVndCLHVEQVV6QixNQUVNTSxjQUZOLFNBRTZCVixPQUY3QixDQUVxQztBQUkzQlcsSUFBQUEscUJBQVIsR0FBc0M7QUFBQSxzREFBTCwyQkFBSzs7QUFDcEMsV0FBS0MsYUFBTCxDQUFtQlgsd0JBQW5CO0FBQ0EsV0FBS1csYUFBTCxDQUFtQlYsbUJBQW5CO0FBQ0EsV0FBS1UsYUFBTCxDQUFtQlQsa0JBQW5CO0FBQ0Q7O0FBRU9VLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHVEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxZQUFNRCxPQUFOLENBQWNDLElBQWQ7QUFDQSxXQUFLQyxNQUFMLENBQVlDLGFBQVosQ0FBMEJsQixPQUExQjtBQUNBLFdBQUttQixJQUFMLENBQVVsQixnQkFBVjtBQUNEOztBQWRrQyxHQVpaLFVBYVBtQixVQWJPLEdBYU1BLFVBYk4sVUFjVkMsTUFkVSxHQWNELEVBZEMsMkVBYXRCWCxNQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWN0QkYsSUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxR0FnQnRCQyxNQWhCc0IsMktBc0J0QkEsTUF0QnNCO0FBNEIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNUQVJUVVAsIFNUQVJUVVBfQ09NUExFVEUsXG4gICAgQ29tbWFuZCxcbiAgICBQcmVwYXJlQ29udHJvbGxlckNvbW1hbmQsXG4gICAgUHJlcGFyZU1vZGVsQ29tbWFuZCxcbiAgICBQcmVwYXJlVmlld0NvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTdGFydHVwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIGluaXRpYWxpemVTdWJDb21tYW5kcygpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWRkU3ViQ29tbWFuZChQcmVwYXJlQ29udHJvbGxlckNvbW1hbmQpO1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVNb2RlbENvbW1hbmQpO1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVWaWV3Q29tbWFuZCk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLmV4ZWN1dGUobm90ZSk7XG4gICAgICB0aGlzLmZhY2FkZS5yZW1vdmVDb21tYW5kKFNUQVJUVVApO1xuICAgICAgdGhpcy5zZW5kKFNUQVJUVVBfQ09NUExFVEUpO1xuICAgIH1cbiAgfVxufVxuIl19