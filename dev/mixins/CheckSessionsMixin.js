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
    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _init, _descriptor, _descriptor2, _descriptor3, _class3, _temp;

    return _dec = _flowRuntime.default.annotate(_flowRuntime.default.class("Mixin", _flowRuntime.default.extends(BaseClass), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("__sessionsFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D"))))), _flowRuntime.default.method("__sessions", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D")))), _flowRuntime.default.property("__usersFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D"))))), _flowRuntime.default.method("__users", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D")))), _flowRuntime.default.property("session", _flowRuntime.default.ref(RecordInterface)), _flowRuntime.default.method("currentUser", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.ref(RecordInterface)))), _flowRuntime.default.method("checkSession", _flowRuntime.default.param("args", _flowRuntime.default.any())))), _dec2 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D"))))), _dec3 = inject(`Factory<${SESSIONS}>`), _dec4 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D"))))), _dec5 = inject(`Factory<${USERS}>`), _dec6 = _flowRuntime.default.decorate(_flowRuntime.default.ref(RecordInterface)), _dec(_class = initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      constructor(...args) {
        super(...args);
        (0, _initializerDefineProperty2.default)(this, "__sessionsFactory", _descriptor, this);
        (0, _initializerDefineProperty2.default)(this, "__usersFactory", _descriptor2, this);
        (0, _initializerDefineProperty2.default)(this, "session", _descriptor3, this);
      }

      get __sessions() {
        const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D")));

        return _returnType.assert(this.__sessionsFactory());
      }

      get __users() {
        const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.ref("D")));

        return _returnType2.assert(this.__usersFactory());
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

    }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9DaGVja1Nlc3Npb25zTWl4aW4uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU0VTU0lPTlMiLCJVU0VSUyIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsImluamVjdCIsIlV0aWxzIiwic3RhdHVzZXMiLCJOUyIsIlVOQVVUSE9SSVpFRCIsImRlZmluZU1peGluIiwiX19maWxlbmFtZSIsIkJhc2VDbGFzcyIsIk1peGluIiwiX19zZXNzaW9ucyIsIl9fc2Vzc2lvbnNGYWN0b3J5IiwiX191c2VycyIsIl9fdXNlcnNGYWN0b3J5IiwiY3VycmVudFVzZXIiLCJmaW5kIiwic2Vzc2lvbiIsInVpZCIsImNoZWNrU2Vzc2lvbiIsImFyZ3MiLCJzZXNzaW9uQ29va2llIiwiY29uZmlncyIsInNlc3Npb25JZCIsImNvbnRleHQiLCJjb29raWVzIiwiZ2V0IiwidGhyb3ciLCJmaW5kQnkiLCJmaXJzdCIsImVtYWlsVmVyaWZpZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7OztBQWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztlQUtnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsUUFESTtBQUNNQyxJQUFBQSxLQUROO0FBRUpDLElBQUFBLGVBRkk7QUFFYUMsSUFBQUEsSUFGYjtBQUVtQkMsSUFBQUEsUUFGbkI7QUFFNkJDLElBQUFBLE1BRjdCO0FBRXFDQyxJQUFBQSxNQUZyQztBQUdKQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFBRjtBQUhILE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQU1BLFFBQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDLGNBQUQsQ0FBN0I7QUFFQVQsRUFBQUEsTUFBTSxDQUFDWSxXQUFQLENBQW1CQyxVQUFuQixFQUFnQ0MsU0FBRCxJQUFlO0FBQUE7O0FBQzVDLGdEQUFPLGlFQUNhQSxTQURiLEdBRUwseUVBRkssRUFJTCxtREFDMkIsMERBQVEsOENBQW9CLDZCQUFwQixDQUFSLEVBRDNCLENBSkssRUFNTCxzRUFBMEIsOENBQXNCLDZCQUF0QixDQUExQixFQU5LLEVBVUwsZ0RBQ3dCLDBEQUFRLDhDQUFvQiw2QkFBcEIsQ0FBUixFQUR4QixDQVZLLEVBWUwsbUVBQXVCLDhDQUFzQiw2QkFBdEIsQ0FBdkIsRUFaSyxFQWdCTCx5Q0FBaUIseUNBQWpCLENBaEJLLEVBaUJMLHVFQUEyQixvQ0FBVSx5Q0FBVixDQUEzQixFQWpCSyxFQXFCTCwyR0FyQkssQ0FBUCx5Q0FLNkIsMERBQVEsOENBQW9CLDZCQUFwQixDQUFSLEVBTDdCLFdBSUdQLE1BQU0sQ0FBRSxXQUFVTixRQUFTLEdBQXJCLENBSlQsd0NBVzBCLDBEQUFRLDhDQUFvQiw2QkFBcEIsQ0FBUixFQVgxQixXQVVHTSxNQUFNLENBQUUsV0FBVUwsS0FBTSxHQUFsQixDQVZULHdDQWdCbUIseUNBaEJuQixpQkFBUUMsZUFBUix3Q0FBTyxNQUNEWSxLQURDLFNBQ2FELFNBRGIsQ0FDdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSzVCLFVBQWNFLFVBQWQsR0FBbUQ7QUFBQSx3REFBdkIsOENBQW9CLDZCQUFwQixDQUF1Qjs7QUFDakQsa0NBQU8sS0FBS0MsaUJBQUwsRUFBUDtBQUNEOztBQUlELFVBQWNDLE9BQWQsR0FBZ0Q7QUFBQSx5REFBdkIsOENBQW9CLDZCQUFwQixDQUF1Qjs7QUFDOUMsbUNBQU8sS0FBS0MsY0FBTCxFQUFQO0FBQ0Q7O0FBR0QsVUFBY0MsV0FBZCxHQUFzRDtBQUFBLHlEQUFqQix5Q0FBaUI7O0FBQ3BELGVBQU8sS0FBS0YsT0FBTCxDQUFhRyxJQUFiLENBQWtCLEtBQUtDLE9BQUwsQ0FBYUMsR0FBL0IsQ0FBUDtBQUNEOztBQUVELFlBQWNDLFlBQWQsQ0FBMkIsR0FBSUMsSUFBL0IsRUFBcUM7QUFDbkMsY0FBTUMsYUFBYSxHQUFHLEtBQUtDLE9BQUwsSUFBZ0IsSUFBaEIsSUFBd0IsS0FBS0EsT0FBTCxDQUFhRCxhQUFiLElBQThCLElBQXRELEdBQ2xCLEtBQUtDLE9BQUwsQ0FBYUQsYUFESyxHQUVsQixLQUZKO0FBR0EsY0FBTUUsU0FBUyxHQUFHLEtBQUtDLE9BQUwsQ0FBYUMsT0FBYixDQUFxQkMsR0FBckIsQ0FBeUJMLGFBQXpCLENBQWxCO0FBQ0EsWUFBSUUsU0FBUyxJQUFJLElBQWpCLEVBQXVCLEtBQUtDLE9BQUwsQ0FBYUcsS0FBYixDQUFtQnJCLFlBQW5CO0FBQ3ZCLGNBQU1XLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxLQUFLTixVQUFMLENBQWdCaUIsTUFBaEIsQ0FBdUI7QUFDbEQscUJBQVdMO0FBRHVDLFNBQXZCLENBQVAsRUFFbEJNLEtBRmtCLEVBQXRCO0FBR0EsWUFBSVosT0FBTyxJQUFJLElBQWYsRUFBcUIsS0FBS08sT0FBTCxDQUFhRyxLQUFiLENBQW1CckIsWUFBbkI7QUFDckIsYUFBS2tCLE9BQUwsQ0FBYVAsT0FBYixHQUF1QkEsT0FBdkI7QUFDQSxhQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxZQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUtGLFdBQUwsRUFBUCxFQUEyQmUsYUFBaEMsRUFBK0MsS0FBS04sT0FBTCxDQUFhRyxLQUFiLENBQW1CckIsWUFBbkIsRUFBaUMsWUFBakM7QUFDL0MsZUFBT2MsSUFBUDtBQUNEOztBQWxDMkIsS0FEOUIsVUFFZVcsTUFGZixHQUV3QixFQUZ4Qix1RUFFR2hDLElBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrSEFLR0MsUUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0ZBTUdBLFFBTkgsb01BV0dBLFFBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQVlHQSxRQVpILG1MQWdCR0EsUUFoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZ0J1QyxJQWhCdkM7QUFBQTtBQUFBLG1GQWlCR0EsUUFqQkgsc0tBcUJHQyxNQXJCSDtBQXFDRCxHQXRDRDtBQXVDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUmVjb3JkSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTRVNTSU9OUywgVVNFUlMsXG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBpbmplY3QsXG4gICAgVXRpbHM6IHsgc3RhdHVzZXMgfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IFVOQVVUSE9SSVpFRCA9IHN0YXR1c2VzKCd1bmF1dGhvcml6ZWQnKTtcblxuICBNb2R1bGUuZGVmaW5lTWl4aW4oX19maWxlbmFtZSwgKEJhc2VDbGFzcykgPT4ge1xuICAgIHJldHVybiBAaW5pdGlhbGl6ZU1peGluXG4gICAgY2xhc3MgTWl4aW4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U0VTU0lPTlN9PmApXG4gICAgICBAcHJvcGVydHkgX19zZXNzaW9uc0ZhY3Rvcnk6ICgpID0+IENvbGxlY3Rpb25JbnRlcmZhY2U8RD47XG4gICAgICBAcHJvcGVydHkgZ2V0IF9fc2Vzc2lvbnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2Vzc2lvbnNGYWN0b3J5KClcbiAgICAgIH1cblxuICAgICAgQGluamVjdChgRmFjdG9yeTwke1VTRVJTfT5gKVxuICAgICAgQHByb3BlcnR5IF9fdXNlcnNGYWN0b3J5OiAoKSA9PiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+O1xuICAgICAgQHByb3BlcnR5IGdldCBfX3VzZXJzKCk6IENvbGxlY3Rpb25JbnRlcmZhY2U8RD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VzZXJzRmFjdG9yeSgpXG4gICAgICB9XG5cbiAgICAgIEBwcm9wZXJ0eSBzZXNzaW9uOiBSZWNvcmRJbnRlcmZhY2UgPSBudWxsO1xuICAgICAgQHByb3BlcnR5IGdldCBjdXJyZW50VXNlcigpOiBQcm9taXNlPFJlY29yZEludGVyZmFjZT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3VzZXJzLmZpbmQodGhpcy5zZXNzaW9uLnVpZClcbiAgICAgIH1cblxuICAgICAgQG1ldGhvZCBhc3luYyBjaGVja1Nlc3Npb24oLi4uIGFyZ3MpIHtcbiAgICAgICAgY29uc3Qgc2Vzc2lvbkNvb2tpZSA9IHRoaXMuY29uZmlncyAhPSBudWxsICYmIHRoaXMuY29uZmlncy5zZXNzaW9uQ29va2llICE9IG51bGxcbiAgICAgICAgICA/IHRoaXMuY29uZmlncy5zZXNzaW9uQ29va2llXG4gICAgICAgICAgOiAnc2lkJztcbiAgICAgICAgY29uc3Qgc2Vzc2lvbklkID0gdGhpcy5jb250ZXh0LmNvb2tpZXMuZ2V0KHNlc3Npb25Db29raWUpO1xuICAgICAgICBpZiAoc2Vzc2lvbklkID09IG51bGwpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQpO1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgKGF3YWl0IHRoaXMuX19zZXNzaW9ucy5maW5kQnkoe1xuICAgICAgICAgIFwiQGRvYy5pZFwiOiBzZXNzaW9uSWRcbiAgICAgICAgfSkpLmZpcnN0KCk7XG4gICAgICAgIGlmIChzZXNzaW9uID09IG51bGwpIHRoaXMuY29udGV4dC50aHJvdyhVTkFVVEhPUklaRUQpO1xuICAgICAgICB0aGlzLmNvbnRleHQuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIHRoaXMuc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgIGlmICghKGF3YWl0IHRoaXMuY3VycmVudFVzZXIoKSkuZW1haWxWZXJpZmllZCkgdGhpcy5jb250ZXh0LnRocm93KFVOQVVUSE9SSVpFRCwgJ1VudmVyaWZpZWQnKTtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==