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
        if (!(await this.currentUser()).emailVerified) this.context.throw(UNAUTHORIZED, 'Unverified');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9DaGVja1Nlc3Npb25zTWl4aW4uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0VTU0lPTlMiLCJVU0VSUyIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsImluamVjdCIsIlV0aWxzIiwic3RhdHVzZXMiLCJOUyIsIlVOQVVUSE9SSVpFRCIsImRlZmluZU1peGluIiwiX19maWxlbmFtZSIsIkJhc2VDbGFzcyIsIk1peGluIiwiX19zZXNzaW9ucyIsIl9fc2Vzc2lvbnNGYWN0b3J5IiwiX191c2VycyIsIl9fdXNlcnNGYWN0b3J5IiwiY3VycmVudFVzZXIiLCJmaW5kIiwic2Vzc2lvbiIsInVpZCIsImNoZWNrU2Vzc2lvbiIsImFyZ3MiLCJzZXNzaW9uQ29va2llIiwiY29uZmlncyIsInNlc3Npb25JZCIsImNvbnRleHQiLCJjb29raWVzIiwiZ2V0IiwidGhyb3ciLCJmaW5kQnkiLCJmaXJzdCIsImVtYWlsVmVyaWZpZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7OztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUNNQyxJQUFBQSxLQUROO0FBRUpDLElBQUFBLGVBRkk7QUFFYUMsSUFBQUEsSUFGYjtBQUVtQkMsSUFBQUEsUUFGbkI7QUFFNkJDLElBQUFBLE1BRjdCO0FBRXFDQyxJQUFBQSxNQUZyQztBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUhILE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQU1BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFFQVQsRUFBQUEsTUFBTSxDQUFDWSxXQUFQLENBQW1CQyxVQUFuQixFQUFnQ0MsU0FBRCxJQUFl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LG1MQWdCR0EsUUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZ0J1QyxJQWhCdkM7QUFBQTtBQUFBLG1GQWlCR0EsUUFqQkgsc0tBcUJHQyxNQXJCSDtBQXFDRCxHQXRDRDtBQXVDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUmVjb3JkSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTRVNTSU9OUywgVVNFUlMsXG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBpbmplY3QsXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcblxuICBNb2R1bGUuZGVmaW5lTWl4aW4oX19maWxlbmFtZSwgKEJhc2VDbGFzcykgPT4ge1xuICAgIHJldHVybiBAaW5pdGlhbGl6ZU1peGluXG4gICAgY2xhc3MgTWl4aW48IEQgPSBSZWNvcmRJbnRlcmZhY2UgPiBleHRlbmRzIEJhc2VDbGFzcyB7XG4gICAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICAgIEBpbmplY3QoYEZhY3Rvcnk8JHtTRVNTSU9OU30+YClcbiAgICAgIEBwcm9wZXJ0eSBfX3Nlc3Npb25zRmFjdG9yeTogKCkgPT4gQ29sbGVjdGlvbkludGVyZmFjZTxEPjtcbiAgICAgIEBwcm9wZXJ0eSBnZXQgX19zZXNzaW9ucygpOiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zZXNzaW9uc0ZhY3RvcnkoKVxuICAgICAgfVxuXG4gICAgICBAaW5qZWN0KGBGYWN0b3J5PCR7VVNFUlN9PmApXG4gICAgICBAcHJvcGVydHkgX191c2Vyc0ZhY3Rvcnk6ICgpID0+IENvbGxlY3Rpb25JbnRlcmZhY2U8RD47XG4gICAgICBAcHJvcGVydHkgZ2V0IF9fdXNlcnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXNlcnNGYWN0b3J5KClcbiAgICAgIH1cblxuICAgICAgQHByb3BlcnR5IHNlc3Npb246IFJlY29yZEludGVyZmFjZSA9IG51bGw7XG4gICAgICBAcHJvcGVydHkgZ2V0IGN1cnJlbnRVc2VyKCk6IFByb21pc2U8UmVjb3JkSW50ZXJmYWNlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fdXNlcnMuZmluZCh0aGlzLnNlc3Npb24udWlkKVxuICAgICAgfVxuXG4gICAgICBAbWV0aG9kIGFzeW5jIGNoZWNrU2Vzc2lvbiguLi4gYXJncykge1xuICAgICAgICBjb25zdCBzZXNzaW9uQ29va2llID0gdGhpcy5jb25maWdzICE9IG51bGwgJiYgdGhpcy5jb25maWdzLnNlc3Npb25Db29raWUgIT0gbnVsbFxuICAgICAgICAgID8gdGhpcy5jb25maWdzLnNlc3Npb25Db29raWVcbiAgICAgICAgICA6ICdzaWQnO1xuICAgICAgICBjb25zdCBzZXNzaW9uSWQgPSB0aGlzLmNvbnRleHQuY29va2llcy5nZXQoc2Vzc2lvbkNvb2tpZSk7XG4gICAgICAgIGlmIChzZXNzaW9uSWQgPT0gbnVsbCkgdGhpcy5jb250ZXh0LnRocm93KFVOQVVUSE9SSVpFRCk7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCAoYXdhaXQgdGhpcy5fX3Nlc3Npb25zLmZpbmRCeSh7XG4gICAgICAgICAgXCJAZG9jLmlkXCI6IHNlc3Npb25JZFxuICAgICAgICB9KSkuZmlyc3QoKTtcbiAgICAgICAgaWYgKHNlc3Npb24gPT0gbnVsbCkgdGhpcy5jb250ZXh0LnRocm93KFVOQVVUSE9SSVpFRCk7XG4gICAgICAgIHRoaXMuY29udGV4dC5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgaWYgKCEoYXdhaXQgdGhpcy5jdXJyZW50VXNlcigpKS5lbWFpbFZlcmlmaWVkKSB0aGlzLmNvbnRleHQudGhyb3coVU5BVVRIT1JJWkVELCAnVW52ZXJpZmllZCcpO1xuICAgICAgICByZXR1cm4gYXJncztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl19