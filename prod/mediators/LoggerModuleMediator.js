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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

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
  let LoggerModuleMediator = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class LoggerModuleMediator extends Mediator {
    get logger() {
      return this.getViewComponent();
    }

    onRegister() {
      super.onRegister();
    }

    async onRemove() {
      await super.onRemove();
      await this.logger.finish();
    }

    listNotificationInterests() {
      return [CONNECT_MODULE_TO_LOGGER, CONNECT_SHELL_TO_LOGGER];
    }

    handleNotification(note) {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "logger", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "logger"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRemove", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRemove"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;