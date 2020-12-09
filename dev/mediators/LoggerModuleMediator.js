"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _logger = _interopRequireDefault(require("../services/logger"));

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _PipeAwareInterface2 = require("../interfaces/PipeAwareInterface");

// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
const {
  LoggerApplication
} = _logger.default.NS;

const PipeAwareInterface = _flowRuntime.default.tdz(() => _PipeAwareInterface2.PipeAwareInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    LIGHTWEIGHT,
    Pipes,
    Mediator,
    Application,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  const {
    Pipe,
    PipeAwareModule: {
      STDIN,
      STDOUT,
      STDLOG,
      STDSHELL
    }
  } = Pipes.NS;
  const {
    CONNECT_MODULE_TO_LOGGER,
    CONNECT_SHELL_TO_LOGGER
  } = Application;
  let LoggerModuleMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("LoggerModuleMediator", _flowRuntime.default.extends(Mediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("logger", _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface))), _flowRuntime.default.method("onRegister"), _flowRuntime.default.method("onRemove", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class LoggerModuleMediator extends Mediator {
    get logger() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(PipeAwareInterface));

      return _returnType2.assert(this.getViewComponent());
    }

    onRegister() {
      super.onRegister();
    }

    async onRemove() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      await super.onRemove();
      await this.logger.finish();
    }

    listNotificationInterests() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      return _returnType3.assert([CONNECT_MODULE_TO_LOGGER, CONNECT_SHELL_TO_LOGGER]);
    }

    handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        // Connect any Module's STDLOG to the logger's STDIN
        case CONNECT_MODULE_TO_LOGGER:
          const module = note.getBody();
          const pipe = Pipe.new();
          module.acceptOutputPipe(STDLOG, pipe);
          this.logger.acceptInputPipe(STDIN, pipe);
          break;
        // Bidirectionally connect shell and logger on STDLOG/STDSHELL

        case CONNECT_SHELL_TO_LOGGER:
          // The junction was passed from ShellJunctionMediator
          const junction = note.getBody(); // Connect the shell's STDLOG to the logger's STDIN

          const shellToLog = junction.retrievePipe(STDLOG);
          this.logger.acceptInputPipe(STDIN, shellToLog); // Connect the logger's STDSHELL to the shell's STDIN

          const logToShell = Pipe.new();
          const shellIn = junction.retrievePipe(STDIN);
          shellIn.connectInput(logToShell);
          this.logger.acceptOutputPipe(STDSHELL, logToShell);
          break;
      }
    }

    constructor() {
      super(...arguments);
      this.setViewComponent(LoggerApplication.new(LIGHTWEIGHT));
      this.logger.start();
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "logger", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "logger"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9Mb2dnZXJNb2R1bGVNZWRpYXRvci5qcyJdLCJuYW1lcyI6WyJMb2dnZXJBcHBsaWNhdGlvbiIsIkxvZ2dlciIsIk5TIiwiTW9kdWxlIiwiTElHSFRXRUlHSFQiLCJQaXBlcyIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb24iLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwibmFtZUJ5IiwiUGlwZSIsIlBpcGVBd2FyZU1vZHVsZSIsIlNURElOIiwiU1RET1VUIiwiU1RETE9HIiwiU1REU0hFTEwiLCJDT05ORUNUX01PRFVMRV9UT19MT0dHRVIiLCJDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiIsIkxvZ2dlck1vZHVsZU1lZGlhdG9yIiwibG9nZ2VyIiwiZ2V0Vmlld0NvbXBvbmVudCIsIm9uUmVnaXN0ZXIiLCJvblJlbW92ZSIsImZpbmlzaCIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJoYW5kbGVOb3RpZmljYXRpb24iLCJub3RlIiwiZ2V0TmFtZSIsIm1vZHVsZSIsImdldEJvZHkiLCJwaXBlIiwibmV3IiwiYWNjZXB0T3V0cHV0UGlwZSIsImFjY2VwdElucHV0UGlwZSIsImp1bmN0aW9uIiwic2hlbGxUb0xvZyIsInJldHJpZXZlUGlwZSIsImxvZ1RvU2hlbGwiLCJzaGVsbEluIiwiY29ubmVjdElucHV0IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJzZXRWaWV3Q29tcG9uZW50Iiwic3RhcnQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFVQTs7OztBQUdBOztBQUNBOztBQWRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU07QUFBRUEsRUFBQUE7QUFBRixJQUF3QkMsZ0JBQU9DLEVBQXJDOzs7Ozs7ZUFLZ0JDLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFdBREk7QUFFSkMs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R0osUUFBUSxDQUFDRSxZQUFULENBQXNCeEIsS0FBdEIsQ0FBaEI7QUFDQTBCLFVBQUFBLE9BQU8sQ0FBQ0MsWUFBUixDQUFxQkYsVUFBckI7QUFDQSxlQUFLbEIsTUFBTCxDQUFZYSxnQkFBWixDQUE2QmpCLFFBQTdCLEVBQXVDc0IsVUFBdkM7QUFDQTtBQXBCSjtBQXNCRDs7QUFFREcsSUFBQUEsV0FBVyxHQUFHO0FBQ1osWUFBTSxHQUFJQyxTQUFWO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0I5QyxpQkFBaUIsQ0FBQ21DLEdBQWxCLENBQXNCL0IsV0FBdEIsQ0FBdEI7QUFDQSxXQUFLbUIsTUFBTCxDQUFZd0IsS0FBWjtBQUNEOztBQWxEeUMsR0FuQm5CLFVBb0JQQyxVQXBCTyxHQW9CTUEsVUFwQk4sVUFxQlZDLE1BckJVLEdBcUJELEVBckJDLDJFQW9CdEJwQyxNQXBCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFxQnRCSCxJQXJCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzRkF1QnRCQyxRQXZCc0IsK0pBMkJ0QkMsTUEzQnNCLGlLQStCdEJBLE1BL0JzQixnTEFvQ3RCQSxNQXBDc0IsMExBd0N0QkEsTUF4Q3NCO0FBdUUxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vc2VydmljZXMvbG9nZ2VyJztcbmNvbnN0IHsgTG9nZ2VyQXBwbGljYXRpb24gfSA9IExvZ2dlci5OUztcblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFBpcGVBd2FyZUludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUGlwZUF3YXJlSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTElHSFRXRUlHSFQsXG4gICAgUGlwZXMsXG4gICAgTWVkaWF0b3IsIEFwcGxpY2F0aW9uLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgY29uc3Qge1xuICAgIFBpcGUsXG4gICAgUGlwZUF3YXJlTW9kdWxlOiB7XG4gICAgICBTVERJTiwgU1RET1VULCBTVERMT0csIFNURFNIRUxMXG4gICAgfSxcbiAgfSA9IFBpcGVzLk5TO1xuXG4gIGNvbnN0IHsgQ09OTkVDVF9NT0RVTEVfVE9fTE9HR0VSLCBDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiB9ID0gQXBwbGljYXRpb247XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIExvZ2dlck1vZHVsZU1lZGlhdG9yIGV4dGVuZHMgTWVkaWF0b3Ige1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGxvZ2dlcigpOiBQaXBlQXdhcmVJbnRlcmZhY2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0Vmlld0NvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIEBtZXRob2Qgb25SZWdpc3RlcigpIHtcbiAgICAgIHN1cGVyLm9uUmVnaXN0ZXIoKTtcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIG9uUmVtb3ZlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgYXdhaXQgc3VwZXIub25SZW1vdmUoKTtcbiAgICAgIGF3YWl0IHRoaXMubG9nZ2VyLmZpbmlzaCgpO1xuICAgIH1cblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gWyBDT05ORUNUX01PRFVMRV9UT19MT0dHRVIsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIF07XG4gICAgfVxuXG4gICAgQG1ldGhvZCBoYW5kbGVOb3RpZmljYXRpb248VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6ID9Qcm9taXNlPHZvaWQ+IHtcbiAgICAgIHN3aXRjaCAobm90ZS5nZXROYW1lKCkpIHtcbiAgICAgICAgLy8gQ29ubmVjdCBhbnkgTW9kdWxlJ3MgU1RETE9HIHRvIHRoZSBsb2dnZXIncyBTVERJTlxuICAgICAgICBjYXNlIChDT05ORUNUX01PRFVMRV9UT19MT0dHRVIpOlxuICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IG5vdGUuZ2V0Qm9keSgpO1xuICAgICAgICAgIGNvbnN0IHBpcGUgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIG1vZHVsZS5hY2NlcHRPdXRwdXRQaXBlKFNURExPRywgcGlwZSk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBwaXBlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgLy8gQmlkaXJlY3Rpb25hbGx5IGNvbm5lY3Qgc2hlbGwgYW5kIGxvZ2dlciBvbiBTVERMT0cvU1REU0hFTExcbiAgICAgICAgY2FzZSAoQ09OTkVDVF9TSEVMTF9UT19MT0dHRVIpOlxuICAgICAgICAgIC8vIFRoZSBqdW5jdGlvbiB3YXMgcGFzc2VkIGZyb20gU2hlbGxKdW5jdGlvbk1lZGlhdG9yXG4gICAgICAgICAgY29uc3QganVuY3Rpb24gPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBzaGVsbCdzIFNURExPRyB0byB0aGUgbG9nZ2VyJ3MgU1RESU5cbiAgICAgICAgICBjb25zdCBzaGVsbFRvTG9nID0ganVuY3Rpb24ucmV0cmlldmVQaXBlKFNURExPRyk7XG4gICAgICAgICAgdGhpcy5sb2dnZXIuYWNjZXB0SW5wdXRQaXBlKFNURElOLCBzaGVsbFRvTG9nKTtcbiAgICAgICAgICAvLyBDb25uZWN0IHRoZSBsb2dnZXIncyBTVERTSEVMTCB0byB0aGUgc2hlbGwncyBTVERJTlxuICAgICAgICAgIGNvbnN0IGxvZ1RvU2hlbGwgPSBQaXBlLm5ldygpO1xuICAgICAgICAgIGNvbnN0IHNoZWxsSW4gPSBqdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RESU4pO1xuICAgICAgICAgIHNoZWxsSW4uY29ubmVjdElucHV0KGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIHRoaXMubG9nZ2VyLmFjY2VwdE91dHB1dFBpcGUoU1REU0hFTEwsIGxvZ1RvU2hlbGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnNldFZpZXdDb21wb25lbnQoTG9nZ2VyQXBwbGljYXRpb24ubmV3KExJR0hUV0VJR0hUKSk7XG4gICAgICB0aGlzLmxvZ2dlci5zdGFydCgpO1xuICAgIH1cbiAgfVxufVxuIl19