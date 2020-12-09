"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _CollectionInterface2 = require("../interfaces/CollectionInterface");

var _RecordInterface2 = require("../interfaces/RecordInterface");

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
const RecordInterface = _flowRuntime.default.tdz(() => _RecordInterface2.RecordInterface);

const CollectionInterface = _flowRuntime.default.tdz(() => _CollectionInterface2.CollectionInterface);

var _default = Module => {
  const {
    SESSIONS,
    USERS,
    initializeMixin,
    meta,
    property,
    method,
    inject,
    Utils: {
      statuses
    }
  } = Module.NS;
  const UNAUTHORIZED = statuses('unauthorized');
  Module.defineMixin(__filename, BaseClass => {
    var _dec, _dec2, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

    return _dec = inject(`Factory<${SESSIONS}>`), _dec2 = inject(`Factory<${USERS}>`), initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      constructor(...args) {
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "__sessionsFactory", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "__usersFactory", _descriptor2, this);
        (0, _initializerDefineProperty2.default)(this, "session", _descriptor3, this);
      }

      get __sessions() {
        return this.__sessionsFactory();
      }

      get __users() {
        return this.__usersFactory();
      }

      get currentUser() {
        return this.__users.find(this.session.uid);
      }

      async checkSession(...args) {
        const sessionCookie = this.configs != null && this.configs.sessionCookie != null ? this.configs.sessionCookie : 'sid';
        const sessionId = this.context.cookies.get(sessionCookie);
        if (sessionId == null) this.context.throw(UNAUTHORIZED);
        const session = await (await this.__sessions.findBy({
          "@doc.id": sessionId
        })).first();
        if (session == null) this.context.throw(UNAUTHORIZED);
        this.context.session = session;
        this.session = session;
        if (!(await this.currentUser()).emailVerified) this.context.throw(UNAUTHORIZED, 'Unverified');
        return args;
      }

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__sessionsFactory", [_dec, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "__sessions"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__usersFactory", [_dec2, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__users", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "__users"), _class2.prototype), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "session", [property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "currentUser", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "currentUser"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "checkSession", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "checkSession"), _class2.prototype)), _class2)) || _class;
  });
};

exports.default = _default;