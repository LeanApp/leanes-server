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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

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
  let PrepareModelCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareModelCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareModelCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

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
      this.facade.addProxy(APPLICATION_ROUTER, 'ApplicationRouter'); // this.facade.addProxy(SWAGGER_ROUTER, 'SwaggerRouter')
      // this.facade.addProxy(SWAGGER_GATEWAY, 'SwaggerGateway')
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVNb2RlbENvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUFJPWFkiLCJDT05GSUdVUkFUSU9OIiwiTUlHUkFUSU9OU19BREFQVEVSIiwiVVNFUlNfQURBUFRFUiIsIlNFU1NJT05TX0FEQVBURVIiLCJNSUdSQVRJT05TIiwiVVNFUlMiLCJTRVNTSU9OUyIsIkFQUExJQ0FUSU9OX1JPVVRFUiIsIlNXQUdHRVJfUk9VVEVSIiwiU1dBR0dFUl9HQVRFV0FZIiwiQ29tbWFuZCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJQcmVwYXJlTW9kZWxDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJnZXRCb2R5IiwiZmFjYWRlIiwiYWRkUHJveHkiLCJhcHAiLCJpbml0aWFsU3RhdGUiLCJST09UIiwiYWRkQWRhcHRlciIsImRlbGVnYXRlIiwiYWRhcHRlciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxpQkFESTtBQUNlQyxJQUFBQSxhQURmO0FBRUpDLElBQUFBLGtCQUZJO0FBRWdCQyxJQUFBQSxhQUZoQjtBQUUrQkMsSUFBQUEsZ0JBRi9CO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsS0FIUjtBQUdlQyxJQUFBQSxRQUhmO0FBR3lCQyxJQUFBQSxrQkFIekI7QUFJSkMsSUFBQUEsY0FKSTtBQUlZQyxJQUFBQSxlQUpaO0FBS0pDLElBQUFBLE9BTEk7QUFNSkMsSUFBQUEsVUFOSTtBQU1RQyxJQUFBQSxNQU5SO0FBTWdCQyxJQUFBQSxJQU5oQjtBQU1zQkMsSUFBQUEsTUFOdEI7QUFNOEJDLElBQUFBO0FBTjlCLE1BT0ZqQixNQUFNLENBQUNrQixFQVBYO0FBRHlCLE1BWW5CQyxtQkFabUIseUNBVXpCLCtFQUVrQ1AsT0FGbEMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FWeUIsV0FXeEJFLE1BQU0sQ0FBQ2QsTUFBRCxDQVhrQixnQkFVeEJhLFVBVndCLHVEQVV6QixNQUVNTSxtQkFGTixTQUVrQ1AsT0FGbEMsQ0FFMEM7QUFJaENRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxrQkFBUyw4Q0FBVCxRQUFrQ0EsSUFBSSxDQUFDQyxPQUFMLEVBQWxDOztBQUNBLFdBQUtDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQnZCLGlCQUFyQixFQUF3QyxrQkFBeEMsRUFBNER3QixHQUFHLENBQUNDLFlBQWhFO0FBQ0EsV0FBS0gsTUFBTCxDQUFZQyxRQUFaLENBQXFCdEIsYUFBckIsRUFBb0MsbUJBQXBDLEVBQXlELEtBQUtGLE1BQUwsQ0FBWWtCLEVBQVosQ0FBZVMsSUFBeEU7QUFDQSxXQUFLSixNQUFMLENBQVlLLFVBQVosQ0FBdUJ6QixrQkFBdkIsRUFBMkMsY0FBM0M7QUFDQSxXQUFLb0IsTUFBTCxDQUFZSyxVQUFaLENBQXVCeEIsYUFBdkIsRUFBc0MsY0FBdEM7QUFDQSxXQUFLbUIsTUFBTCxDQUFZSyxVQUFaLENBQXVCdkIsZ0JBQXZCLEVBQXlDLGNBQXpDO0FBQ0EsV0FBS2tCLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmxCLFVBQXJCLEVBQWlDLHNCQUFqQyxFQUF5RDtBQUN2RHVCLFFBQUFBLFFBQVEsRUFBRSxlQUQ2QztBQUV2REMsUUFBQUEsT0FBTyxFQUFFM0I7QUFGOEMsT0FBekQ7QUFJQSxXQUFLb0IsTUFBTCxDQUFZQyxRQUFaLENBQXFCakIsS0FBckIsRUFBNEIsZ0JBQTVCLEVBQThDO0FBQzVDc0IsUUFBQUEsUUFBUSxFQUFFLFlBRGtDO0FBRTVDQyxRQUFBQSxPQUFPLEVBQUUxQjtBQUZtQyxPQUE5QztBQUlBLFdBQUttQixNQUFMLENBQVlDLFFBQVosQ0FBcUJoQixRQUFyQixFQUErQixnQkFBL0IsRUFBaUQ7QUFDL0NxQixRQUFBQSxRQUFRLEVBQUUsZUFEcUM7QUFFL0NDLFFBQUFBLE9BQU8sRUFBRXpCO0FBRnNDLE9BQWpEO0FBSUEsV0FBS2tCLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmYsa0JBQXJCLEVBQXlDLG1CQUF6QyxFQW5COEQsQ0FvQjlEO0FBQ0E7QUFDRDs7QUExQnVDLEdBWmpCLFVBYVBzQixVQWJPLEdBYU1BLFVBYk4sVUFjVkMsTUFkVSxHQWNELEVBZEMsMkVBYXRCZixNQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWN0QkYsSUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1RkFnQnRCQyxNQWhCc0I7QUF3QzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0FwcGxpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQVBQTElDQVRJT05fUFJPWFksIENPTkZJR1VSQVRJT04sXG4gICAgTUlHUkFUSU9OU19BREFQVEVSLCBVU0VSU19BREFQVEVSLCBTRVNTSU9OU19BREFQVEVSLFxuICAgIE1JR1JBVElPTlMsIFVTRVJTLCBTRVNTSU9OUywgQVBQTElDQVRJT05fUk9VVEVSLFxuICAgIFNXQUdHRVJfUk9VVEVSLCBTV0FHR0VSX0dBVEVXQVksXG4gICAgQ29tbWFuZCxcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG1ldGhvZCwgbmFtZUJ5XG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIFByZXBhcmVNb2RlbENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIGNvbnN0IGFwcDogQXBwbGljYXRpb25JbnRlcmZhY2UgPSBub3RlLmdldEJvZHkoKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KEFQUExJQ0FUSU9OX1BST1hZLCAnQXBwbGljYXRpb25Qcm94eScsIGFwcC5pbml0aWFsU3RhdGUpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkUHJveHkoQ09ORklHVVJBVElPTiwgJ01haW5Db25maWd1cmF0aW9uJywgdGhpcy5Nb2R1bGUuTlMuUk9PVCk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRBZGFwdGVyKE1JR1JBVElPTlNfQURBUFRFUiwgJ01vbmdvQWRhcHRlcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkQWRhcHRlcihVU0VSU19BREFQVEVSLCAnTW9uZ29BZGFwdGVyJyk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRBZGFwdGVyKFNFU1NJT05TX0FEQVBURVIsICdNb25nb0FkYXB0ZXInKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KE1JR1JBVElPTlMsICdNaWdyYXRpb25zQ29sbGVjdGlvbicsIHtcbiAgICAgICAgZGVsZWdhdGU6ICdCYXNlTWlncmF0aW9uJyxcbiAgICAgICAgYWRhcHRlcjogTUlHUkFUSU9OU19BREFQVEVSXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KFVTRVJTLCAnTWFpbkNvbGxlY3Rpb24nLCB7XG4gICAgICAgIGRlbGVnYXRlOiAnVXNlclJlY29yZCcsXG4gICAgICAgIGFkYXB0ZXI6IFVTRVJTX0FEQVBURVJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkUHJveHkoU0VTU0lPTlMsICdNYWluQ29sbGVjdGlvbicsIHtcbiAgICAgICAgZGVsZWdhdGU6ICdTZXNzaW9uUmVjb3JkJyxcbiAgICAgICAgYWRhcHRlcjogU0VTU0lPTlNfQURBUFRFUlxuICAgICAgfSk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRQcm94eShBUFBMSUNBVElPTl9ST1VURVIsICdBcHBsaWNhdGlvblJvdXRlcicpO1xuICAgICAgLy8gdGhpcy5mYWNhZGUuYWRkUHJveHkoU1dBR0dFUl9ST1VURVIsICdTd2FnZ2VyUm91dGVyJylcbiAgICAgIC8vIHRoaXMuZmFjYWRlLmFkZFByb3h5KFNXQUdHRVJfR0FURVdBWSwgJ1N3YWdnZXJHYXRld2F5JylcbiAgICB9XG4gIH1cbn1cbiJdfQ==