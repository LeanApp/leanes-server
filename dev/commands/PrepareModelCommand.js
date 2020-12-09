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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVNb2RlbENvbW1hbmQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiQVBQTElDQVRJT05fUFJPWFkiLCJDT05GSUdVUkFUSU9OIiwiTUlHUkFUSU9OU19BREFQVEVSIiwiVVNFUlNfQURBUFRFUiIsIlNFU1NJT05TX0FEQVBURVIiLCJNSUdSQVRJT05TIiwiVVNFUlMiLCJTRVNTSU9OUyIsIkFQUExJQ0FUSU9OX1JPVVRFUiIsIlNXQUdHRVJfUk9VVEVSIiwiU1dBR0dFUl9HQVRFV0FZIiwiQ29tbWFuZCIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibWV0aG9kIiwibmFtZUJ5IiwiTlMiLCJQcmVwYXJlTW9kZWxDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJnZXRCb2R5IiwiZmFjYWRlIiwiYWRkUHJveHkiLCJhcHAiLCJpbml0aWFsU3RhdGUiLCJST09UIiwiYWRkQWRhcHRlciIsImRlbGVnYXRlIiwiYWRhcHRlciIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOztBQUNBOzs7O0FBaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2VBS2dCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxpQkFESTtBQUNlQyxJQUFBQSxhQURmO0FBRUpDLElBQUFBLGtCQUZJO0FBRWdCQyxJQUFBQSxhQUZoQjtBQUUrQkMsSUFBQUEsZ0JBRi9CO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsS0FIUjtBQUdlQyxJQUFBQSxRQUhmO0FBR3lCQyxJQUFBQSxrQkFIekI7QUFJSkMsSUFBQUEsY0FKSTtBQUlZQyxJQUFBQSxlQUpaO0FBS0pDLElBQUFBLE9BTEk7QUFNSkMsSUFBQUEsVUFOSTtBQU1RQyxJQUFBQSxNQU5SO0FBTWdCQyxJQUFBQSxJQU5oQjtBQU1zQkMsSUFBQUEsTUFOdEI7QUFNOEJDLElBQUFBO0FBTjlCLE1BT0ZqQixNQUFNLENBQUNrQixFQVBYO0FBRHlCLE1BWW5CQyxtQkFabUIseUNBVXpCLCtFQUVrQ1AsT0FGbEMsR0FHRSw2RUFIRixFQUlFLHlFQUpGLEVBTUU7QUFBQSxnREFBb0IsOEJBQUMsMEJBQUQsQ0FBcEI7O0FBQUEsK0NBQThCLGdEQUF3QixnQ0FBeEIsQ0FBOUIsK0JBQXlELDJCQUF6RDtBQUFBLElBTkYsQ0FWeUIsV0FXeEJFLE1BQU0sQ0FBQ2QsTUFBRCxDQVhrQixnQkFVeEJhLFVBVndCLHVEQVV6QixNQUVNTSxtQkFGTixTQUVrQ1AsT0FGbEMsQ0FFMEM7QUFJaENRLElBQUFBLE9BQVIsQ0FBMEJDLElBQTFCLEVBQWdFO0FBQUEsbUVBQTVDLDhCQUFDLDBCQUFELENBQTRDOztBQUFBLHNCQUFsQyxnREFBd0IsZ0NBQXhCLENBQWtDOztBQUFBLHNEQUFMLDJCQUFLOztBQUFBOztBQUM5RCxrQkFBUyw4Q0FBVCxRQUFrQ0EsSUFBSSxDQUFDQyxPQUFMLEVBQWxDOztBQUNBLFdBQUtDLE1BQUwsQ0FBWUMsUUFBWixDQUFxQnZCLGlCQUFyQixFQUF3QyxrQkFBeEMsRUFBNER3QixHQUFHLENBQUNDLFlBQWhFO0FBQ0EsV0FBS0gsTUFBTCxDQUFZQyxRQUFaLENBQXFCdEIsYUFBckIsRUFBb0MsbUJBQXBDLEVBQXlELEtBQUtGLE1BQUwsQ0FBWWtCLEVBQVosQ0FBZVMsSUFBeEU7QUFDQSxXQUFLSixNQUFMLENBQVlLLFVBQVosQ0FBdUJ6QixrQkFBdkIsRUFBMkMsY0FBM0M7QUFDQSxXQUFLb0IsTUFBTCxDQUFZSyxVQUFaLENBQXVCeEIsYUFBdkIsRUFBc0MsY0FBdEM7QUFDQSxXQUFLbUIsTUFBTCxDQUFZSyxVQUFaLENBQXVCdkIsZ0JBQXZCLEVBQXlDLGNBQXpDO0FBQ0EsV0FBS2tCLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmxCLFVBQXJCLEVBQWlDLHNCQUFqQyxFQUF5RDtBQUN2RHVCLFFBQUFBLFFBQVEsRUFBRSxlQUQ2QztBQUV2REMsUUFBQUEsT0FBTyxFQUFFM0I7QUFGOEMsT0FBekQ7QUFJQSxXQUFLb0IsTUFBTCxDQUFZQyxRQUFaLENBQXFCakIsS0FBckIsRUFBNEIsZ0JBQTVCLEVBQThDO0FBQzVDc0IsUUFBQUEsUUFBUSxFQUFFLFlBRGtDO0FBRTVDQyxRQUFBQSxPQUFPLEVBQUUxQjtBQUZtQyxPQUE5QztBQUlBLFdBQUttQixNQUFMLENBQVlDLFFBQVosQ0FBcUJoQixRQUFyQixFQUErQixnQkFBL0IsRUFBaUQ7QUFDL0NxQixRQUFBQSxRQUFRLEVBQUUsZUFEcUM7QUFFL0NDLFFBQUFBLE9BQU8sRUFBRXpCO0FBRnNDLE9BQWpEO0FBSUEsV0FBS2tCLE1BQUwsQ0FBWUMsUUFBWixDQUFxQmYsa0JBQXJCLEVBQXlDLG1CQUF6QztBQUNEOztBQXhCdUMsR0FaakIsVUFhUHNCLFVBYk8sR0FhTUEsVUFiTixVQWNWQyxNQWRVLEdBY0QsRUFkQywyRUFhdEJmLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWdCdEJDLE1BaEJzQjtBQXNDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgTm90aWZpY2F0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ob3RpZmljYXRpb25JbnRlcmZhY2UnO1xuaW1wb3J0IHR5cGUgeyBBcHBsaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBUFBMSUNBVElPTl9QUk9YWSwgQ09ORklHVVJBVElPTixcbiAgICBNSUdSQVRJT05TX0FEQVBURVIsIFVTRVJTX0FEQVBURVIsIFNFU1NJT05TX0FEQVBURVIsXG4gICAgTUlHUkFUSU9OUywgVVNFUlMsIFNFU1NJT05TLCBBUFBMSUNBVElPTl9ST1VURVIsXG4gICAgU1dBR0dFUl9ST1VURVIsIFNXQUdHRVJfR0FURVdBWSxcbiAgICBDb21tYW5kLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgUHJlcGFyZU1vZGVsQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIGV4ZWN1dGU8VCA9ID9hbnk+KG5vdGU6IE5vdGlmaWNhdGlvbkludGVyZmFjZTxUPik6IHZvaWQge1xuICAgICAgY29uc3QgYXBwOiBBcHBsaWNhdGlvbkludGVyZmFjZSA9IG5vdGUuZ2V0Qm9keSgpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkUHJveHkoQVBQTElDQVRJT05fUFJPWFksICdBcHBsaWNhdGlvblByb3h5JywgYXBwLmluaXRpYWxTdGF0ZSk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRQcm94eShDT05GSUdVUkFUSU9OLCAnTWFpbkNvbmZpZ3VyYXRpb24nLCB0aGlzLk1vZHVsZS5OUy5ST09UKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZEFkYXB0ZXIoTUlHUkFUSU9OU19BREFQVEVSLCAnTW9uZ29BZGFwdGVyJyk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRBZGFwdGVyKFVTRVJTX0FEQVBURVIsICdNb25nb0FkYXB0ZXInKTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZEFkYXB0ZXIoU0VTU0lPTlNfQURBUFRFUiwgJ01vbmdvQWRhcHRlcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkUHJveHkoTUlHUkFUSU9OUywgJ01pZ3JhdGlvbnNDb2xsZWN0aW9uJywge1xuICAgICAgICBkZWxlZ2F0ZTogJ0Jhc2VNaWdyYXRpb24nLFxuICAgICAgICBhZGFwdGVyOiBNSUdSQVRJT05TX0FEQVBURVJcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkUHJveHkoVVNFUlMsICdNYWluQ29sbGVjdGlvbicsIHtcbiAgICAgICAgZGVsZWdhdGU6ICdVc2VyUmVjb3JkJyxcbiAgICAgICAgYWRhcHRlcjogVVNFUlNfQURBUFRFUlxuICAgICAgfSk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRQcm94eShTRVNTSU9OUywgJ01haW5Db2xsZWN0aW9uJywge1xuICAgICAgICBkZWxlZ2F0ZTogJ1Nlc3Npb25SZWNvcmQnLFxuICAgICAgICBhZGFwdGVyOiBTRVNTSU9OU19BREFQVEVSXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmFjYWRlLmFkZFByb3h5KEFQUExJQ0FUSU9OX1JPVVRFUiwgJ0FwcGxpY2F0aW9uUm91dGVyJyk7XG4gICAgfVxuICB9XG59XG4iXX0=