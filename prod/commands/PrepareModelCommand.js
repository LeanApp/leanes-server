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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_PROXY,
    CONFIGURATION,
    MIGRATIONS_ADAPTER,
    USERS_ADAPTER,
    SESSIONS_ADAPTER,
    MIGRATIONS,
    USERS,
    SESSIONS,
    APPLICATION_ROUTER,
    SWAGGER_ROUTER,
    SWAGGER_GATEWAY,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareModelCommand = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class PrepareModelCommand extends Command {
    execute(note) {
      const app = note.getBody();
      this.facade.addProxy(APPLICATION_PROXY, 'ApplicationProxy', app.initialState);
      this.facade.addProxy(CONFIGURATION, 'MainConfiguration', this.Module.NS.ROOT);
      this.facade.addAdapter(MIGRATIONS_ADAPTER, 'MongoAdapter');
      this.facade.addAdapter(USERS_ADAPTER, 'MongoAdapter');
      this.facade.addAdapter(SESSIONS_ADAPTER, 'MongoAdapter');
      this.facade.addProxy(MIGRATIONS, 'MigrationsCollection', {
        delegate: 'BaseMigration',
        adapter: MIGRATIONS_ADAPTER
      });
      this.facade.addProxy(USERS, 'MainCollection', {
        delegate: 'UserRecord',
        adapter: USERS_ADAPTER
      });
      this.facade.addProxy(SESSIONS, 'MainCollection', {
        delegate: 'SessionRecord',
        adapter: SESSIONS_ADAPTER
      });
      this.facade.addProxy(APPLICATION_ROUTER, 'ApplicationRouter');
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class);
};

exports.default = _default;