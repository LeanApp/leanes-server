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
    let _t$TypeParametersSymb;

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

    const _AnonymousClassTypeParametersSymbol = Symbol("AnonymousClassTypeParameters");

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", Mixin => {
      const D = Mixin.typeParameter("D", undefined, _flowRuntime.default.ref(RecordInterface));
      return [_flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("__sessionsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("__sessions", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.property("__usersFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("__users", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.property("session", _flowRuntime.default.ref(RecordInterface)), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("currentUser", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.ref(RecordInterface)))), _flowRuntime.default.method("checkSession", _flowRuntime.default.param("args", _flowRuntime.default.any()))];
    })), _dec2 = _flowRuntime.default.decorate(function () {
      return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_AnonymousClassTypeParametersSymbol].D))));
    }), _dec3 = inject(`Factory<${SESSIONS}>`), _dec4 = _flowRuntime.default.decorate(function () {
      return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_AnonymousClassTypeParametersSymbol].D))));
    }), _dec5 = inject(`Factory<${USERS}>`), _dec6 = _flowRuntime.default.decorate(_flowRuntime.default.ref(RecordInterface)), _dec(_class = initializeMixin(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class Mixin extends BaseClass {
      get __sessions() {
        const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_AnonymousClassTypeParametersSymbol].D));

        return _returnType.assert(this.__sessionsFactory());
      }

      get __users() {
        const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_AnonymousClassTypeParametersSymbol].D));

        return _returnType2.assert(this.__usersFactory());
      }

      constructor(...args) {
        const _typeParameters = {
          D: _flowRuntime.default.typeParameter("D")
        };
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "__sessionsFactory", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "__usersFactory", _descriptor2, this);
        (0, _initializerDefineProperty2.default)(this, "session", _descriptor3, this);
        this[_AnonymousClassTypeParametersSymbol] = _typeParameters;
      }

      get currentUser() {
        const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref(RecordInterface));

        return this.__users.find(this.session.uid).then(_arg => _returnType3.assert(_arg));
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
        if (!(await this.currentUser).emailVerified) this.context.throw(UNAUTHORIZED, 'Unverified');
        return args;
      }

    }), _class3[_t$TypeParametersSymb] = _AnonymousClassTypeParametersSymbol, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__sessionsFactory", [_dec2, _dec3, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__sessions", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "__sessions"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__usersFactory", [_dec4, _dec5, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: null
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "__users", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "__users"), _class2.prototype), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "session", [_dec6, property], {
      configurable: true,
      enumerable: true,
      writable: true,
      initializer: function () {
        return null;
      }
    }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "currentUser", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "currentUser"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "checkSession", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "checkSession"), _class2.prototype)), _class2)) || _class) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9DaGVja1Nlc3Npb25zTWl4aW4uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0VTU0lPTlMiLCJVU0VSUyIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsImluamVjdCIsIlV0aWxzIiwic3RhdHVzZXMiLCJOUyIsIlVOQVVUSE9SSVpFRCIsImRlZmluZU1peGluIiwiX19maWxlbmFtZSIsIkJhc2VDbGFzcyIsIk1peGluIiwiX19zZXNzaW9ucyIsIl9fc2Vzc2lvbnNGYWN0b3J5IiwiX191c2VycyIsIl9fdXNlcnNGYWN0b3J5IiwiY3VycmVudFVzZXIiLCJmaW5kIiwic2Vzc2lvbiIsInVpZCIsImNoZWNrU2Vzc2lvbiIsImFyZ3MiLCJzZXNzaW9uQ29va2llIiwiY29uZmlncyIsInNlc3Npb25JZCIsImNvbnRleHQiLCJjb29raWVzIiwiZ2V0IiwidGhyb3ciLCJmaW5kQnkiLCJmaXJzdCIsImVtYWlsVmVyaWZpZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7OztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUNNQyxJQUFBQSxLQUROO0FBRUpDLElBQUFBLGVBRkk7QUFFYUMsSUFBQUEsSUFGYjtBQUVtQkMsSUFBQUEsUUFGbkI7QUFFNkJDLElBQUFBLE1BRjdCO0FBRXFDQyxJQUFBQSxNQUZyQztBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUhILE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQU1BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFFQVQsRUFBQUEsTUFBTSxDQUFDWSxXQUFQLENBQW1CQyxVQUFuQixFQUFnQ0MsU0FBRCxJQUFl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QkdBLFFBaEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWdCdUMsSUFoQnZDO0FBQUE7QUFBQSxtRkFpQkdBLFFBakJILHNLQXFCR0MsTUFyQkg7QUFxQ0QsR0F0Q0Q7QUF1Q0QsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFJlY29yZEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU0VTU0lPTlMsIFVTRVJTLFxuICAgIGluaXRpYWxpemVNaXhpbiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCwgaW5qZWN0LFxuICAgIFV0aWxzOiB7IHN0YXR1c2VzIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBjb25zdCBVTkFVVEhPUklaRUQgPSBzdGF0dXNlcygndW5hdXRob3JpemVkJyk7XG5cbiAgTW9kdWxlLmRlZmluZU1peGluKF9fZmlsZW5hbWUsIChCYXNlQ2xhc3MpID0+IHtcbiAgICByZXR1cm4gQGluaXRpYWxpemVNaXhpblxuICAgIGNsYXNzIE1peGluPCBEID0gUmVjb3JkSW50ZXJmYWNlID4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0VTU0lPTlN9PmApXG4gICAgICBAcHJvcGVydHkgX19zZXNzaW9uc0ZhY3Rvcnk6ICgpID0+IENvbGxlY3Rpb25JbnRlcmZhY2U8RD47XG4gICAgICBAcHJvcGVydHkgZ2V0IF9fc2Vzc2lvbnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2Vzc2lvbnNGYWN0b3J5KClcbiAgICAgIH1cblxuICAgICAgQGluamVjdChgRmFjdG9yeTwke1VTRVJTfT5gKVxuICAgICAgQHByb3BlcnR5IF9fdXNlcnNGYWN0b3J5OiAoKSA9PiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+O1xuICAgICAgQHByb3BlcnR5IGdldCBfX3VzZXJzKCk6IENvbGxlY3Rpb25JbnRlcmZhY2U8RD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VzZXJzRmFjdG9yeSgpXG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBzZXNzaW9uOiBSZWNvcmRJbnRlcmZhY2UgPSBudWxsO1xuICAgICAgQHByb3BlcnR5IGdldCBjdXJyZW50VXNlcigpOiBQcm9taXNlPFJlY29yZEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VzZXJzLmZpbmQodGhpcy5zZXNzaW9uLnVpZClcbiAgICAgIH1cblxuICAgICAgQG1ldGhvZCBhc3luYyBjaGVja1Nlc3Npb24oLi4uIGFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbkNvb2tpZSA9IHRoaXMuY29uZmlncyAhPSBudWxsICYmIHRoaXMuY29uZmlncy5zZXNzaW9uQ29va2llICE9IG51bGxcbiAgICAgICAgICA/IHRoaXMuY29uZmlncy5zZXNzaW9uQ29va2llXG4gICAgICAgICAgOiAnc2lkJztcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gdGhpcy5jb250ZXh0LmNvb2tpZXMuZ2V0KHNlc3Npb25Db29raWUpO1xuICAgICAgICBpZiAoc2Vzc2lvbklkID09IG51bGwpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQpO1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgKGF3YWl0IHRoaXMuX19zZXNzaW9ucy5maW5kQnkoe1xuICAgICAgICAgIFwiQGRvYy5pZFwiOiBzZXNzaW9uSWRcbiAgICAgICAgfSkpLmZpcnN0KCk7XG4gICAgICAgIGlmIChzZXNzaW9uID09IG51bGwpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuY3VycmVudFVzZXIpLmVtYWlsVmVyaWZpZWQpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQsICdVbnZlcmlmaWVkJyk7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=