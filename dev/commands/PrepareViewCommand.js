"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _ApplicationInterface2 = require("../interfaces/ApplicationInterface");

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
const ApplicationInterface = _flowRuntime.default.tdz(() => _ApplicationInterface2.ApplicationInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_MEDIATOR,
    SHELL,
    LOGGER_MODULE,
    HTTP_MEDIATOR,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareViewCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareViewCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareViewCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      this.facade.addMediator(LOGGER_MODULE, 'LoggerModuleMediator');
      this.facade.addMediator(SHELL, 'ShellJunctionMediator');
      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      this.facade.activateMediator(APPLICATION_MEDIATOR);
      this.facade.activateMediator(LOGGER_MODULE);
      this.facade.activateMediator(SHELL);

      if (!app.isLightweight) {
        this.facade.addMediator(HTTP_MEDIATOR, 'ServerMediator');
        this.facade.activateMediator(HTTP_MEDIATOR);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVWaWV3Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9NRURJQVRPUiIsIlNIRUxMIiwiTE9HR0VSX01PRFVMRSIsIkhUVFBfTUVESUFUT1IiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVWaWV3Q29tbWFuZCIsImV4ZWN1dGUiLCJub3RlIiwiZ2V0Qm9keSIsImZhY2FkZSIsImFkZE1lZGlhdG9yIiwiYXBwIiwiYWN0aXZhdGVNZWRpYXRvciIsImlzTGlnaHR3ZWlnaHQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlQTs7QUFDQTs7OztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsb0JBREk7QUFDa0JDLElBQUFBLEtBRGxCO0FBQ3lCQyxJQUFBQSxhQUR6QjtBQUN3Q0MsSUFBQUEsYUFEeEM7QUFFSkMsSUFBQUEsT0FGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLElBSGhCO0FBR3NCQyxJQUFBQSxNQUh0QjtBQUc4QkMsSUFBQUE7QUFIOUIsTUFJRlYsTUFBTSxDQUFDVyxFQUpYO0FBRHlCLE1BU25CQyxrQkFUbUIseUNBT3pCLDhFQUVpQ1AsT0FGakMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FQeUIsV0FReEJFLE1BQU0sQ0FBQ1AsTUFBRCxDQVJrQixnQkFPeEJNLFVBUHdCLHVEQU96QixNQUVNTSxrQkFGTixTQUVpQ1AsT0FGakMsQ0FFeUM7QUFJL0JRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxrQkFBUyw4Q0FBVCxRQUFrQ0EsSUFBSSxDQUFDQyxPQUFMLEVBQWxDOztBQUVBLFdBQUtDLE1BQUwsQ0FBWUMsV0FBWixDQUF3QmQsYUFBeEIsRUFBdUMsc0JBQXZDO0FBQ0EsV0FBS2EsTUFBTCxDQUFZQyxXQUFaLENBQXdCZixLQUF4QixFQUErQix1QkFBL0I7QUFDQSxXQUFLYyxNQUFMLENBQVlDLFdBQVosQ0FBd0JoQixvQkFBeEIsRUFBOEMscUJBQTlDLEVBQXFFaUIsR0FBckU7QUFFQSxXQUFLRixNQUFMLENBQVlHLGdCQUFaLENBQTZCbEIsb0JBQTdCO0FBQ0EsV0FBS2UsTUFBTCxDQUFZRyxnQkFBWixDQUE2QmhCLGFBQTdCO0FBQ0EsV0FBS2EsTUFBTCxDQUFZRyxnQkFBWixDQUE2QmpCLEtBQTdCOztBQUVBLFVBQUksQ0FBQ2dCLEdBQUcsQ0FBQ0UsYUFBVCxFQUF3QjtBQUN0QixhQUFLSixNQUFMLENBQVlDLFdBQVosQ0FBd0JiLGFBQXhCLEVBQXVDLGdCQUF2QztBQUNBLGFBQUtZLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJmLGFBQTdCO0FBQ0Q7QUFDRjs7QUFuQnNDLEdBVGhCLFVBVVBpQixVQVZPLEdBVU1BLFVBVk4sVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCWixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkYsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFhdEJDLE1BYnNCO0FBOEIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IEFwcGxpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9BcHBsaWNhdGlvbkludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFQUExJQ0FUSU9OX01FRElBVE9SLCBTSEVMTCwgTE9HR0VSX01PRFVMRSwgSFRUUF9NRURJQVRPUixcbiAgICBDb21tYW5kLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZVZpZXdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgZXhlY3V0ZTxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogdm9pZCB7XG4gICAgICBjb25zdCBhcHA6IEFwcGxpY2F0aW9uSW50ZXJmYWNlID0gbm90ZS5nZXRCb2R5KCk7XG5cbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKExPR0dFUl9NT0RVTEUsICdMb2dnZXJNb2R1bGVNZWRpYXRvcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoU0hFTEwsICdTaGVsbEp1bmN0aW9uTWVkaWF0b3InKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKEFQUExJQ0FUSU9OX01FRElBVE9SLCAnQXBwbGljYXRpb25NZWRpYXRvcicsIGFwcCk7XG5cbiAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihMT0dHRVJfTU9EVUxFKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoU0hFTEwpO1xuXG4gICAgICBpZiAoIWFwcC5pc0xpZ2h0d2VpZ2h0KSB7XG4gICAgICAgIHRoaXMuZmFjYWRlLmFkZE1lZGlhdG9yKEhUVFBfTUVESUFUT1IsICdTZXJ2ZXJNZWRpYXRvcicpO1xuICAgICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKEhUVFBfTUVESUFUT1IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19