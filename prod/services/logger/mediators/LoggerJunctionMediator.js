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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

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
  let LoggerJunctionMediator = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class LoggerJunctionMediator extends JunctionMediator {
    listNotificationInterests() {
      return super.listNotificationInterests(...arguments);
    }

    handleNotification(note) {
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
      this.send(LOG_MSG, msg);
    }

    onRegister() {
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "listNotificationInterests", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "listNotificationInterests"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handleNotification", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handleNotification"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "handlePipeMessage", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "handlePipeMessage"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "onRegister", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "onRegister"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;