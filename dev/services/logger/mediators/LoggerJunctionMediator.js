"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../../../interfaces/NotificationInterface");

var _PipeMessageInterface2 = require("../../../interfaces/PipeMessageInterface");

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
const PipeMessageInterface = _flowRuntime.default.tdz(() => _PipeMessageInterface2.PipeMessageInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    LOG_MSG,
    Pipes,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  const {
    JunctionMediator,
    LogFilterMessage,
    PipeAwareModule,
    PipeListener,
    Junction,
    TeeMerge,
    Filter
  } = Pipes.NS;
  const {
    STDIN
  } = PipeAwareModule;
  const {
    INPUT
  } = Junction;
  const {
    ACCEPT_INPUT_PIPE
  } = JunctionMediator;
  const {
    LOG_FILTER_NAME,
    filterLogByLevel
  } = LogFilterMessage;
  let LoggerJunctionMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerJunctionMediator", _flowRuntime.default.extends(JunctionMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }), _flowRuntime.default.method("handlePipeMessage", _flowRuntime.default.param("msg", _flowRuntime.default.ref(PipeMessageInterface)), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("onRegister", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      return _returnType2.assert(super.listNotificationInterests(...arguments));
    }

    handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        case ACCEPT_INPUT_PIPE:
          const name = note.getType();

          if (name === STDIN) {
            const pipe = note.getBody();

            const tee = this._junction.retrievePipe(STDIN);

            tee.connectInput(pipe);
          } else {
            super.handleNotification(note);
          }

          break;

        default:
          super.handleNotification(note);
      }
    }

    async handlePipeMessage(msg) {
      let _msgType = _flowRuntime.default.ref(PipeMessageInterface);

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("msg", _msgType).assert(msg);

      this.send(LOG_MSG, msg);
    }

    onRegister() {
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.void());

      super.onRegister();
      const teeMerge = TeeMerge.new();
      const filter = Filter.new(LOG_FILTER_NAME, null, filterLogByLevel);
      filter.connect(PipeListener.new(this, this.handlePipeMessage));
      teeMerge.connect(filter);

      this._junction.registerPipe(STDIN, INPUT, teeMerge);
    }

    constructor() {
      super(...arguments);
      this.setViewComponent(Junction.new());
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9tZWRpYXRvcnMvTG9nZ2VySnVuY3Rpb25NZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJMT0dfTVNHIiwiUGlwZXMiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJKdW5jdGlvbk1lZGlhdG9yIiwiTG9nRmlsdGVyTWVzc2FnZSIsIlBpcGVBd2FyZU1vZHVsZSIsIlBpcGVMaXN0ZW5lciIsIkp1bmN0aW9uIiwiVGVlTWVyZ2UiLCJGaWx0ZXIiLCJTVERJTiIsIklOUFVUIiwiQUNDRVBUX0lOUFVUX1BJUEUiLCJMT0dfRklMVEVSX05BTUUiLCJmaWx0ZXJMb2dCeUxldmVsIiwiTG9nZ2VySnVuY3Rpb25NZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJoYW5kbGVOb3RpZmljYXRpb24iLCJub3RlIiwiZ2V0TmFtZSIsIm5hbWUiLCJnZXRUeXBlIiwicGlwZSIsImdldEJvZHkiLCJ0ZWUiLCJfanVuY3Rpb24iLCJyZXRyaWV2ZVBpcGUiLCJjb25uZWN0SW5wdXQiLCJoYW5kbGVQaXBlTWVzc2FnZSIsIm1zZyIsInNlbmQiLCJvblJlZ2lzdGVyIiwidGVlTWVyZ2UiLCJuZXciLCJmaWx0ZXIiLCJjb25uZWN0IiwicmVnaXN0ZXJQaXBlIiwiY29uc3RydWN0b3IiLCJzZXRWaWV3Q29tcG9uZW50IiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUE7O0FBQ0E7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLEtBRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsUUFIdEI7QUFHZ0NDLElBQUFBLE1BSGhDO0FBR3dDQyxJQUFBQTtBQUh4QyxNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFNQSxRQUFNO0FBQ0pDLElBQUFBLGdCQURJO0FBQ2NDLElBQUFBLGdCQURkO0FBQ2dDQyxJQUFBQSxlQURoQztBQUNpREMsSUFBQUEsWUFEakQ7QUFFSkMsSUFBQUEsUUFGSTtBQUVNQyxJQUFBQSxRQUZOO0FBRWdCQyxJQUFBQTtBQUZoQixNQUdGZCxLQUFLLENBQUNPLEVBSFY7QUFLQSxRQUFNO0FBQUVRLElBQUFBO0FBQUYsTUFBWUwsZUFBbEI7QUFDQSxRQUFNO0FBQUVNLElBQUFBO0FBQUYsTUFBWUosUUFBbEI7QUFDQSxRQUFNO0FBQUVLLElBQUFBO0FBQUYsTUFBd0JULGdCQUE5QjtBQUNBLFFBQU07QUFBRVUsSUFBQUEsZUFBRjtBQUFtQkMsSUFBQUE7QUFBbkIsTUFBd0NWLGdCQUE5QztBQWZ5QixNQW1CbkJXLHNCQW5CbUIseUNBaUJ6QixrRkFFcUNaLGdCQUZyQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxxRkFBbUMsMkJBQUUsNkJBQUYsQ0FBbkMsRUFORixFQVVFO0FBQUEsZ0RBQStCLDhCQUFDLDBCQUFELENBQS9COztBQUFBLCtDQUF5QyxnREFBd0IsZ0NBQXhCLENBQXpDLCtCQUFvRSw4QkFBRyxvQ0FBUSwyQkFBUixDQUFILENBQXBFO0FBQUEsSUFWRixFQTJCRSxtRkFBbUMsOENBQW5DLCtCQUEwRCxvQ0FBVSwyQkFBVixDQUExRCxFQTNCRixFQStCRSxzRUFBb0IsMkJBQXBCLEVBL0JGLENBakJ5QixXQWtCeEJOLE1BQU0sQ0FBQ0osTUFBRCxDQWxCa0IsZ0JBaUJ4QkcsVUFqQndCLHVEQWlCekIsTUFFTW1CLHNCQUZOLFNBRXFDWixnQkFGckMsQ0FFc0Q7QUFJNUNhLElBQUFBLHlCQUFSLEdBQThDO0FBQUEsdURBQVQseURBQVM7O0FBQzVDLGlDQUFPLE1BQU1BLHlCQUFOLENBQWdDLEdBQUlDLFNBQXBDLENBQVA7QUFDRDs7QUFFT0MsSUFBQUEsa0JBQVIsQ0FBcUNDLElBQXJDLEVBQXFGO0FBQUEsbUVBQXRELDhCQUFDLDBCQUFELENBQXNEOztBQUFBLHNCQUE1QyxnREFBd0IsZ0NBQXhCLENBQTRDOztBQUFBLHVEQUFmLDhCQUFDLG9DQUFRLDJCQUFSLENBQUQsQ0FBZTs7QUFBQTs7QUFDbkYsY0FBUUEsSUFBSSxDQUFDQyxPQUFMLEVBQVI7QUFDRSxhQUFNUixpQkFBTjtBQUNFLGdCQUFNUyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csT0FBTCxFQUFiOztBQUNBLGNBQUlELElBQUksS0FBS1gsS0FBYixFQUFvQjtBQUNsQixrQkFBTWEsSUFBSSxHQUFHSixJQUFJLENBQUNLLE9BQUwsRUFBYjs7QUFDQSxrQkFBTUMsR0FBRyxHQUFHLEtBQUtDLFNBQUwsQ0FBZUMsWUFBZixDQUE0QmpCLEtBQTVCLENBQVo7O0FBQ0FlLFlBQUFBLEdBQUcsQ0FBQ0csWUFBSixDQUFpQkwsSUFBakI7QUFDRCxXQUpELE1BSU87QUFDTCxrQkFBTUwsa0JBQU4sQ0FBeUJDLElBQXpCO0FBQ0Q7O0FBQ0Q7O0FBQ0Y7QUFDRSxnQkFBTUQsa0JBQU4sQ0FBeUJDLElBQXpCO0FBWko7QUFjRDs7QUFFRCxVQUFjVSxpQkFBZCxDQUFnQ0MsR0FBaEMsRUFBMEU7QUFBQSxxQkFBdkMsOENBQXVDOztBQUFBLGlGQUFOLDJCQUFNLEVBQWQsb0NBQVEsMkJBQVIsQ0FBYzs7QUFBQTs7QUFDeEUsV0FBS0MsSUFBTCxDQUFVckMsT0FBVixFQUFtQm9DLEdBQW5CO0FBQ0Q7O0FBRU9FLElBQUFBLFVBQVIsR0FBMkI7QUFBQSx1REFBTCwyQkFBSzs7QUFDekIsWUFBTUEsVUFBTjtBQUNBLFlBQU1DLFFBQVEsR0FBR3pCLFFBQVEsQ0FBQzBCLEdBQVQsRUFBakI7QUFDQSxZQUFNQyxNQUFNLEdBQUcxQixNQUFNLENBQUN5QixHQUFQLENBQVdyQixlQUFYLEVBQTRCLElBQTVCLEVBQWtDQyxnQkFBbEMsQ0FBZjtBQUNBcUIsTUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWU5QixZQUFZLENBQUM0QixHQUFiLENBQWlCLElBQWpCLEVBQXVCLEtBQUtMLGlCQUE1QixDQUFmO0FBQ0FJLE1BQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQkQsTUFBakI7O0FBQ0EsV0FBS1QsU0FBTCxDQUFlVyxZQUFmLENBQTRCM0IsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDc0IsUUFBMUM7QUFDRDs7QUFFREssSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFJckIsU0FBVjtBQUNBLFdBQUtzQixnQkFBTCxDQUFzQmhDLFFBQVEsQ0FBQzJCLEdBQVQsRUFBdEI7QUFDRDs7QUF6Q21ELEdBbkI3QixVQW9CUE0sVUFwQk8sR0FvQk1BLFVBcEJOLFVBcUJWQyxNQXJCVSxHQXFCRCxFQXJCQywyRUFvQnRCeEMsTUFwQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBcUJ0QkgsSUFyQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUdBdUJ0QkUsTUF2QnNCLDBMQTJCdEJBLE1BM0JzQixrTEE0Q3RCQSxNQTVDc0IsMEtBZ0R0QkEsTUFoRHNCO0FBOEQxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBQaXBlTWVzc2FnZUludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvUGlwZU1lc3NhZ2VJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBMT0dfTVNHLFxuICAgIFBpcGVzLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3Qge1xuICAgIEp1bmN0aW9uTWVkaWF0b3IsIExvZ0ZpbHRlck1lc3NhZ2UsIFBpcGVBd2FyZU1vZHVsZSwgUGlwZUxpc3RlbmVyLFxuICAgIEp1bmN0aW9uLCBUZWVNZXJnZSwgRmlsdGVyXG4gIH0gPSBQaXBlcy5OUztcblxuICBjb25zdCB7IFNURElOIH0gPSBQaXBlQXdhcmVNb2R1bGU7XG4gIGNvbnN0IHsgSU5QVVQgfSA9IEp1bmN0aW9uO1xuICBjb25zdCB7IEFDQ0VQVF9JTlBVVF9QSVBFIH0gPSBKdW5jdGlvbk1lZGlhdG9yO1xuICBjb25zdCB7IExPR19GSUxURVJfTkFNRSwgZmlsdGVyTG9nQnlMZXZlbCB9ID0gTG9nRmlsdGVyTWVzc2FnZTtcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgTG9nZ2VySnVuY3Rpb25NZWRpYXRvciBleHRlbmRzIEp1bmN0aW9uTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIGxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoKTogc3RyaW5nW10ge1xuICAgICAgcmV0dXJuIHN1cGVyLmxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMoLi4uIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYW5kbGVOb3RpZmljYXRpb248VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6ID9Qcm9taXNlPHZvaWQ+IHtcbiAgICAgIHN3aXRjaCAobm90ZS5nZXROYW1lKCkpIHtcbiAgICAgICAgY2FzZSAoQUNDRVBUX0lOUFVUX1BJUEUpOlxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBub3RlLmdldFR5cGUoKTtcbiAgICAgICAgICBpZiAobmFtZSA9PT0gU1RESU4pIHtcbiAgICAgICAgICAgIGNvbnN0IHBpcGUgPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICAgIGNvbnN0IHRlZSA9IHRoaXMuX2p1bmN0aW9uLnJldHJpZXZlUGlwZShTVERJTik7XG4gICAgICAgICAgICB0ZWUuY29ubmVjdElucHV0KHBpcGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5oYW5kbGVOb3RpZmljYXRpb24obm90ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN1cGVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGhhbmRsZVBpcGVNZXNzYWdlKG1zZzogUGlwZU1lc3NhZ2VJbnRlcmZhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHRoaXMuc2VuZChMT0dfTVNHLCBtc2cpO1xuICAgIH1cblxuICAgIEBtZXRob2Qgb25SZWdpc3RlcigpOiB2b2lkIHtcbiAgICAgIHN1cGVyLm9uUmVnaXN0ZXIoKTtcbiAgICAgIGNvbnN0IHRlZU1lcmdlID0gVGVlTWVyZ2UubmV3KCk7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBGaWx0ZXIubmV3KExPR19GSUxURVJfTkFNRSwgbnVsbCwgZmlsdGVyTG9nQnlMZXZlbCk7XG4gICAgICBmaWx0ZXIuY29ubmVjdChQaXBlTGlzdGVuZXIubmV3KHRoaXMsIHRoaXMuaGFuZGxlUGlwZU1lc3NhZ2UpKTtcbiAgICAgIHRlZU1lcmdlLmNvbm5lY3QoZmlsdGVyKTtcbiAgICAgIHRoaXMuX2p1bmN0aW9uLnJlZ2lzdGVyUGlwZShTVERJTiwgSU5QVVQsIHRlZU1lcmdlKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLiBhcmd1bWVudHMpO1xuICAgICAgdGhpcy5zZXRWaWV3Q29tcG9uZW50KEp1bmN0aW9uLm5ldygpKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==