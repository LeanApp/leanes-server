"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _PipeMessageInterface2 = require("../interfaces/PipeMessageInterface");

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
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Pipes,
    Application,
    LoggingJunctionMixin,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    mixin
  } = Module.NS;
  const {
    Junction,
    PipeAwareModule,
    LogMessage,
    Pipe,
    TeeSplit,
    TeeMerge,
    JunctionMediator
  } = Pipes.NS;
  const {
    CONNECT_MODULE_TO_SHELL,
    CONNECT_SHELL_TO_LOGGER
  } = Application;
  const {
    INPUT,
    OUTPUT
  } = Junction;
  const {
    STDIN,
    STDOUT,
    STDLOG,
    STDSHELL
  } = PipeAwareModule;
  const {
    SEND_TO_LOG,
    LEVELS,
    DEBUG
  } = LogMessage;
  let ShellJunctionMediator = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ShellJunctionMediator", _flowRuntime.default.extends(JunctionMediator), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("listNotificationInterests", _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.method("handleNotification", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))];
  }), _flowRuntime.default.method("handlePipeMessage", _flowRuntime.default.param("msg", _flowRuntime.default.ref(PipeMessageInterface)), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("onRegister"))), _dec2 = partOf(Module), _dec3 = mixin(LoggingJunctionMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class ShellJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.array(_flowRuntime.default.string()));

      const interests = super.listNotificationInterests(...arguments);
      interests.push(CONNECT_MODULE_TO_SHELL);
      return _returnType3.assert(interests);
    }

    async handleNotification(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("note", _noteType).assert(note);

      switch (note.getName()) {
        case CONNECT_MODULE_TO_SHELL:
          this.send(SEND_TO_LOG, 'Connecting new module instance to Shell.', LEVELS[DEBUG]); // Connect a module's STDSHELL to the shell's STDIN

          const module = note.getBody();
          const moduleToShell = Pipe.new();
          module.acceptOutputPipe(STDSHELL, moduleToShell);

          const shellIn = this._junction.retrievePipe(STDIN);

          shellIn.connectInput(moduleToShell); // Connect the shell's STDOUT to the module's STDIN

          const shellToModule = Pipe.new();
          module.acceptInputPipe(STDIN, shellToModule);

          const shellOut = this._junction.retrievePipe(STDOUT);

          shellOut.connect(shellToModule);
          break;

        default:
          await super.handleNotification(note);
      }
    }

    async handlePipeMessage(msg) {
      let _msgType = _flowRuntime.default.ref(PipeMessageInterface);

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));

      _flowRuntime.default.param("msg", _msgType).assert(msg);

      return _returnType2.assert();
    }

    onRegister() {
      super.onRegister(); // The STDOUT pipe from the shell to all modules

      this._junction.registerPipe(STDOUT, OUTPUT, TeeSplit.new()); // The STDIN pipe to the shell from all modules


      this._junction.registerPipe(STDIN, INPUT, TeeMerge.new());

      this._junction.addPipeListener(STDIN, this, this.handlePipeMessage); // The STDLOG pipe from the shell to the logger


      this._junction.registerPipe(STDLOG, OUTPUT, Pipe.new());

      this.send(CONNECT_SHELL_TO_LOGGER, this._junction);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9TaGVsbEp1bmN0aW9uTWVkaWF0b3IuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiUGlwZXMiLCJBcHBsaWNhdGlvbiIsIkxvZ2dpbmdKdW5jdGlvbk1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIm1peGluIiwiTlMiLCJKdW5jdGlvbiIsIlBpcGVBd2FyZU1vZHVsZSIsIkxvZ01lc3NhZ2UiLCJQaXBlIiwiVGVlU3BsaXQiLCJUZWVNZXJnZSIsIkp1bmN0aW9uTWVkaWF0b3IiLCJDT05ORUNUX01PRFVMRV9UT19TSEVMTCIsIkNPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIiwiSU5QVVQiLCJPVVRQVVQiLCJTVERJTiIsIlNURE9VVCIsIlNURExPRyIsIlNURFNIRUxMIiwiU0VORF9UT19MT0ciLCJMRVZFTFMiLCJERUJVRyIsIlNoZWxsSnVuY3Rpb25NZWRpYXRvciIsImxpc3ROb3RpZmljYXRpb25JbnRlcmVzdHMiLCJpbnRlcmVzdHMiLCJhcmd1bWVudHMiLCJwdXNoIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwibm90ZSIsImdldE5hbWUiLCJzZW5kIiwibW9kdWxlIiwiZ2V0Qm9keSIsIm1vZHVsZVRvU2hlbGwiLCJuZXciLCJhY2NlcHRPdXRwdXRQaXBlIiwic2hlbGxJbiIsIl9qdW5jdGlvbiIsInJldHJpZXZlUGlwZSIsImNvbm5lY3RJbnB1dCIsInNoZWxsVG9Nb2R1bGUiLCJhY2NlcHRJbnB1dFBpcGUiLCJzaGVsbE91dCIsImNvbm5lY3QiLCJoYW5kbGVQaXBlTWVzc2FnZSIsIm1zZyIsIm9uUmVnaXN0ZXIiLCJyZWdpc3RlclBpcGUiLCJhZGRQaXBlTGlzdGVuZXIiLCJjb25zdHJ1Y3RvciIsInNldFZpZXdDb21wb25lbnQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFVQTs7QUFDQTs7OztBQVhBO0FBQ0E7QUFDQTtBQUNB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LFlBQU0sR0FBSXhCLFNBQVY7QUFDQSxXQUFLeUIsZ0JBQUwsQ0FBc0I5QyxRQUFRLENBQUM4QixHQUFULEVBQXRCO0FBQ0Q7O0FBcERrRCxHQXJCNUIsVUFzQlBpQixVQXRCTyxHQXNCTUEsVUF0Qk4sVUF1QlZDLE1BdkJVLEdBdUJELEVBdkJDLDJFQXNCdEJuRCxNQXRCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUF1QnRCSCxJQXZCc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5R0F5QnRCRSxNQXpCc0IsMExBK0J0QkEsTUEvQnNCLGtMQXNEdEJBLE1BdERzQiwwS0EwRHRCQSxNQTFEc0I7QUEyRTFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFBpcGVNZXNzYWdlSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9QaXBlTWVzc2FnZUludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFBpcGVzLFxuICAgIEFwcGxpY2F0aW9uLFxuICAgIExvZ2dpbmdKdW5jdGlvbk1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgbmFtZUJ5LCBtaXhpblxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBKdW5jdGlvbiwgUGlwZUF3YXJlTW9kdWxlLCBMb2dNZXNzYWdlLCBQaXBlLCBUZWVTcGxpdCwgVGVlTWVyZ2UsXG4gICAgSnVuY3Rpb25NZWRpYXRvcixcbiAgfSA9IFBpcGVzLk5TO1xuXG4gIGNvbnN0IHsgQ09OTkVDVF9NT0RVTEVfVE9fU0hFTEwsIENPTk5FQ1RfU0hFTExfVE9fTE9HR0VSIH0gPSBBcHBsaWNhdGlvbjtcbiAgY29uc3QgeyBJTlBVVCwgT1VUUFVUIH0gPSBKdW5jdGlvbjtcbiAgY29uc3QgeyBTVERJTiwgU1RET1VULCBTVERMT0csIFNURFNIRUxMIH0gPSBQaXBlQXdhcmVNb2R1bGU7XG4gIGNvbnN0IHsgU0VORF9UT19MT0csIExFVkVMUywgREVCVUcgfSA9IExvZ01lc3NhZ2U7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihMb2dnaW5nSnVuY3Rpb25NaXhpbilcbiAgY2xhc3MgU2hlbGxKdW5jdGlvbk1lZGlhdG9yIGV4dGVuZHMgSnVuY3Rpb25NZWRpYXRvciB7XG4gICAgQG5hbWVCeSBzdGF0aWMgIF9fZmlsZW5hbWUgPSBfX2ZpbGVuYW1lO1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBtZXRob2QgbGlzdE5vdGlmaWNhdGlvbkludGVyZXN0cygpOiBzdHJpbmdbXSB7XG4gICAgICBjb25zdCBpbnRlcmVzdHMgPSBzdXBlci5saXN0Tm90aWZpY2F0aW9uSW50ZXJlc3RzKC4uLiBhcmd1bWVudHMpO1xuICAgICAgaW50ZXJlc3RzLnB1c2goQ09OTkVDVF9NT0RVTEVfVE9fU0hFTEwpO1xuICAgICAgcmV0dXJuIGludGVyZXN0cztcbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGhhbmRsZU5vdGlmaWNhdGlvbjxUID0gP2FueT4obm90ZTogTm90aWZpY2F0aW9uSW50ZXJmYWNlPFQ+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBzd2l0Y2ggKG5vdGUuZ2V0TmFtZSgpKSB7XG4gICAgICAgIGNhc2UgKENPTk5FQ1RfTU9EVUxFX1RPX1NIRUxMKTpcbiAgICAgICAgICB0aGlzLnNlbmQoXG4gICAgICAgICAgICBTRU5EX1RPX0xPRywgJ0Nvbm5lY3RpbmcgbmV3IG1vZHVsZSBpbnN0YW5jZSB0byBTaGVsbC4nLCBMRVZFTFNbREVCVUddXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBDb25uZWN0IGEgbW9kdWxlJ3MgU1REU0hFTEwgdG8gdGhlIHNoZWxsJ3MgU1RESU5cbiAgICAgICAgICBjb25zdCBtb2R1bGUgPSBub3RlLmdldEJvZHkoKTtcbiAgICAgICAgICBjb25zdCBtb2R1bGVUb1NoZWxsID0gUGlwZS5uZXcoKTtcbiAgICAgICAgICBtb2R1bGUuYWNjZXB0T3V0cHV0UGlwZShTVERTSEVMTCwgbW9kdWxlVG9TaGVsbCk7XG4gICAgICAgICAgY29uc3Qgc2hlbGxJbiA9IHRoaXMuX2p1bmN0aW9uLnJldHJpZXZlUGlwZShTVERJTik7XG4gICAgICAgICAgc2hlbGxJbi5jb25uZWN0SW5wdXQobW9kdWxlVG9TaGVsbCk7XG4gICAgICAgICAgLy8gQ29ubmVjdCB0aGUgc2hlbGwncyBTVERPVVQgdG8gdGhlIG1vZHVsZSdzIFNURElOXG4gICAgICAgICAgY29uc3Qgc2hlbGxUb01vZHVsZSA9IFBpcGUubmV3KCk7XG4gICAgICAgICAgbW9kdWxlLmFjY2VwdElucHV0UGlwZShTVERJTiwgc2hlbGxUb01vZHVsZSk7XG4gICAgICAgICAgY29uc3Qgc2hlbGxPdXQgPSB0aGlzLl9qdW5jdGlvbi5yZXRyaWV2ZVBpcGUoU1RET1VUKTtcbiAgICAgICAgICBzaGVsbE91dC5jb25uZWN0KHNoZWxsVG9Nb2R1bGUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGF3YWl0IHN1cGVyLmhhbmRsZU5vdGlmaWNhdGlvbihub3RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWV0aG9kIGFzeW5jIGhhbmRsZVBpcGVNZXNzYWdlKG1zZzogUGlwZU1lc3NhZ2VJbnRlcmZhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBAbWV0aG9kIG9uUmVnaXN0ZXIoKSB7XG4gICAgICBzdXBlci5vblJlZ2lzdGVyKCk7XG4gICAgICAvLyBUaGUgU1RET1VUIHBpcGUgZnJvbSB0aGUgc2hlbGwgdG8gYWxsIG1vZHVsZXNcbiAgICAgIHRoaXMuX2p1bmN0aW9uLnJlZ2lzdGVyUGlwZShTVERPVVQsIE9VVFBVVCwgVGVlU3BsaXQubmV3KCkpO1xuICAgICAgLy8gVGhlIFNURElOIHBpcGUgdG8gdGhlIHNoZWxsIGZyb20gYWxsIG1vZHVsZXNcbiAgICAgIHRoaXMuX2p1bmN0aW9uLnJlZ2lzdGVyUGlwZShTVERJTiwgSU5QVVQsIFRlZU1lcmdlLm5ldygpKTtcbiAgICAgIHRoaXMuX2p1bmN0aW9uLmFkZFBpcGVMaXN0ZW5lcihTVERJTiwgdGhpcywgdGhpcy5oYW5kbGVQaXBlTWVzc2FnZSk7XG4gICAgICAvLyBUaGUgU1RETE9HIHBpcGUgZnJvbSB0aGUgc2hlbGwgdG8gdGhlIGxvZ2dlclxuICAgICAgdGhpcy5fanVuY3Rpb24ucmVnaXN0ZXJQaXBlKFNURExPRywgT1VUUFVULCBQaXBlLm5ldygpKTtcbiAgICAgIHRoaXMuc2VuZChDT05ORUNUX1NIRUxMX1RPX0xPR0dFUiwgdGhpcy5fanVuY3Rpb24pO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoLi4uIGFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnNldFZpZXdDb21wb25lbnQoSnVuY3Rpb24ubmV3KCkpO1xuICAgIH1cbiAgfVxufVxuIl19