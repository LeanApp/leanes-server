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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

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
  let ShellJunctionMediator = (_dec = partOf(Module), _dec2 = mixin(LoggingJunctionMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ShellJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      const interests = super.listNotificationInterests(...arguments);
      interests.push(CONNECT_MODULE_TO_SHELL);
      return interests;
    }

    async handleNotification(note) {
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
      return;
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;