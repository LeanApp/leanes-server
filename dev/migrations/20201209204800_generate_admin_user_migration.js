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
  let _t$TypeParametersSymb;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _descriptor, _class3, _temp;

  const {
    USERS,
    BaseMigration,
    ConfigurableMixin,
    initialize,
    partOf,
    nameBy,
    meta,
    method,
    inject,
    property,
    mixin
  } = Module.NS;

  const _GenerateAdminUserMigrationTypeParametersSymbol = Symbol("GenerateAdminUserMigrationTypeParameters");

  let GenerateAdminUserMigration = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("GenerateAdminUserMigration", GenerateAdminUserMigration => {
    const D = GenerateAdminUserMigration.typeParameter("D", undefined, _flowRuntime.default.ref(RecordInterface));
    return [_flowRuntime.default.extends(BaseMigration), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_usersFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_users", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.staticMethod("change")];
  })), _dec2 = partOf(Module), _dec3 = mixin(ConfigurableMixin), _dec4 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_GenerateAdminUserMigrationTypeParametersSymbol].D))));
  }), _dec5 = inject(`Factory<${USERS}>`), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class GenerateAdminUserMigration extends BaseMigration {
    constructor(...args) {
      const _typeParameters = {
        D: _flowRuntime.default.typeParameter("D")
      };
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_usersFactory", _descriptor, this);
      this[_GenerateAdminUserMigrationTypeParametersSymbol] = _typeParameters;
    }

    get _users() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_GenerateAdminUserMigrationTypeParametersSymbol].D));

      return _returnType.assert(this._usersFactory());
    }

    static change() {
      const _typeParameters = {
        D: _flowRuntime.default.typeParameter("D")
      };
      this.reversible(async function ({
        up,
        down
      }) {
        await up(async () => {
          await this.__users.create({
            email: this.configs.adminEmail,
            emailVerified: true,
            name: "admin",
            nickname: "admin",
            password: this.configs.adminPassword,
            isAdmin: true
          });
        });
        await down(async () => {
          const admin = await this.__users.findBy({
            "@doc.email": this.configs.adminEmail
          });
          await admin.destroy();
        });
      });
    }

  }), _class3[_t$TypeParametersSymb] = _GenerateAdminUserMigrationTypeParametersSymbol, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_usersFactory", [_dec4, _dec5, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_users", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_users"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDkyMDQ4MDBfZ2VuZXJhdGVfYWRtaW5fdXNlcl9taWdyYXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiVVNFUlMiLCJCYXNlTWlncmF0aW9uIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJpbml0aWFsaXplIiwicGFydE9mIiwibmFtZUJ5IiwibWV0YSIsIm1ldGhvZCIsImluamVjdCIsInByb3BlcnR5IiwibWl4aW4iLCJOUyIsIkdlbmVyYXRlQWRtaW5Vc2VyTWlncmF0aW9uIiwiX3VzZXJzIiwiX3VzZXJzRmFjdG9yeSIsImNoYW5nZSIsInJldmVyc2libGUiLCJ1cCIsImRvd24iLCJfX3VzZXJzIiwiY3JlYXRlIiwiZW1haWwiLCJjb25maWdzIiwiYWRtaW5FbWFpbCIsImVtYWlsVmVyaWZpZWQiLCJuYW1lIiwibmlja25hbWUiLCJwYXNzd29yZCIsImFkbWluUGFzc3dvcmQiLCJpc0FkbWluIiwiYWRtaW4iLCJmaW5kQnkiLCJkZXN0cm95Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBZUE7O0FBQ0E7Ozs7QUFoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFLZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLEtBREk7QUFFSkMsSUFBQUEsYUFGSTtBQUdKQyxJQUFBQSxpQkFISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLE1BSmhCO0FBSXdCQyxJQUFBQSxJQUp4QjtBQUk4QkMsSUFBQUEsTUFKOUI7QUFJc0NDLElBQUFBLE1BSnRDO0FBSThDQyxJQUFBQSxRQUo5QztBQUl3REMsSUFBQUE7QUFKeEQsTUFLRlgsTUFBTSxDQUFDWSxFQUxYOztBQUR5Qjs7QUFBQSxNQVduQkMsMEJBWG1CLHlDQVF6QjtBQUFBLHVFQUdzQyx5Q0FIdEM7QUFBQSx5Q0FHZ0VYLGFBSGhFLEdBSUUseUVBSkYsRUFNRSwrQ0FDdUIsMERBQVEsOENBQW9CLGdDQUFwQixDQUFSLEVBRHZCLENBTkYsOEdBUUUsa0VBQXNCLDhDQUFzQixDQUF0QixDQUF0QixFQVJGLEVBV0UsMkNBWEY7QUFBQSxJQVJ5QixXQVN4QkcsTUFBTSxDQUFDTCxNQUFELENBVGtCLFVBVXhCVyxLQUFLLENBQUNSLGlCQUFELENBVm1CO0FBQUEsV0FlQSwwREFBUSw4Q0FBb0Isc0ZBQXBCLENBQVIsRUFmQTtBQUFBLGNBY3RCTSxNQUFNLENBQUUsV0FBVVIsS0FBTSxHQUFsQixDQWRnQixnQkFReEJHLFVBUndCLDBJQVF6QixNQUdNUywwQkFITixTQUdnRVgsYUFIaEUsQ0FHOEU7QUFBQTtBQUFBO0FBQUEsV0FBNUM7QUFBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLNUUsUUFBY1ksTUFBZCxHQUErQztBQUFBLHNEQUF2Qiw4Q0FBb0IsdURBQXBCLENBQXVCOztBQUM3QyxnQ0FBTyxLQUFLQyxhQUFMLEVBQVA7QUFDRDs7QUFDRCxXQUFlQyxNQUFmLEdBQXdCO0FBQUE7QUFBQSxXQVJRO0FBUVI7QUFDdEIsV0FBS0MsVUFBTCxDQUFnQixnQkFBZ0I7QUFBRUMsUUFBQUEsRUFBRjtBQUFNQyxRQUFBQTtBQUFOLE9BQWhCLEVBQThCO0FBQzVDLGNBQU1ELEVBQUUsQ0FBQyxZQUFZO0FBQ25CLGdCQUFNLEtBQUtFLE9BQUwsQ0FBYUMsTUFBYixDQUFvQjtBQUN4QkMsWUFBQUEsS0FBSyxFQUFFLEtBQUtDLE9BQUwsQ0FBYUMsVUFESTtBQUV4QkMsWUFBQUEsYUFBYSxFQUFFLElBRlM7QUFHeEJDLFlBQUFBLElBQUksRUFBRSxPQUhrQjtBQUl4QkMsWUFBQUEsUUFBUSxFQUFFLE9BSmM7QUFLeEJDLFlBQUFBLFFBQVEsRUFBRSxLQUFLTCxPQUFMLENBQWFNLGFBTEM7QUFNeEJDLFlBQUFBLE9BQU8sRUFBRTtBQU5lLFdBQXBCLENBQU47QUFRRCxTQVRPLENBQVI7QUFVQSxjQUFNWCxJQUFJLENBQUMsWUFBWTtBQUNyQixnQkFBTVksS0FBSyxHQUFHLE1BQU0sS0FBS1gsT0FBTCxDQUFhWSxNQUFiLENBQW9CO0FBQUMsMEJBQWMsS0FBS1QsT0FBTCxDQUFhQztBQUE1QixXQUFwQixDQUFwQjtBQUNBLGdCQUFNTyxLQUFLLENBQUNFLE9BQU4sRUFBTjtBQUNELFNBSFMsQ0FBVjtBQUlELE9BZkQ7QUFnQkQ7O0FBekIyRSxHQVhyRCw2RkFZVkMsTUFaVSxHQVlELEVBWkMsdUVBWXRCM0IsSUFac0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5SEFldEJHLFFBZnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFnQnRCQSxRQWhCc0IsaUpBbUJ0QkYsTUFuQnNCO0FBc0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb2xsZWN0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db2xsZWN0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgUmVjb3JkSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9SZWNvcmRJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBVU0VSUyxcbiAgICBCYXNlTWlncmF0aW9uLFxuICAgIENvbmZpZ3VyYWJsZU1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbmFtZUJ5LCBtZXRhLCBtZXRob2QsIGluamVjdCwgcHJvcGVydHksIG1peGluLFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIEdlbmVyYXRlQWRtaW5Vc2VyTWlncmF0aW9uPCBEID0gUmVjb3JkSW50ZXJmYWNlID4gZXh0ZW5kcyBCYXNlTWlncmF0aW9uIHtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7VVNFUlN9PmApXG4gICAgQHByb3BlcnR5IF91c2Vyc0ZhY3Rvcnk6ICgpID0+IENvbGxlY3Rpb25JbnRlcmZhY2U8RD47XG4gICAgQHByb3BlcnR5IGdldCBfdXNlcnMoKTogQ29sbGVjdGlvbkludGVyZmFjZTxEPiB7XG4gICAgICByZXR1cm4gdGhpcy5fdXNlcnNGYWN0b3J5KClcbiAgICB9XG4gICAgQG1ldGhvZCBzdGF0aWMgY2hhbmdlKCkge1xuICAgICAgdGhpcy5yZXZlcnNpYmxlKGFzeW5jIGZ1bmN0aW9uICh7IHVwLCBkb3duIH0pIHtcbiAgICAgICAgYXdhaXQgdXAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IHRoaXMuX191c2Vycy5jcmVhdGUoe1xuICAgICAgICAgICAgZW1haWw6IHRoaXMuY29uZmlncy5hZG1pbkVtYWlsLFxuICAgICAgICAgICAgZW1haWxWZXJpZmllZDogdHJ1ZSxcbiAgICAgICAgICAgIG5hbWU6IFwiYWRtaW5cIixcbiAgICAgICAgICAgIG5pY2tuYW1lOiBcImFkbWluXCIsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5jb25maWdzLmFkbWluUGFzc3dvcmQsXG4gICAgICAgICAgICBpc0FkbWluOiB0cnVlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBkb3duKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhZG1pbiA9IGF3YWl0IHRoaXMuX191c2Vycy5maW5kQnkoe1wiQGRvYy5lbWFpbFwiOiB0aGlzLmNvbmZpZ3MuYWRtaW5FbWFpbH0pXG4gICAgICAgICAgYXdhaXQgYWRtaW4uZGVzdHJveSgpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=