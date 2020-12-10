"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _ConfigurationInterface2 = require("../interfaces/ConfigurationInterface");

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

const ConfigurationInterface = _flowRuntime.default.tdz(() => _ConfigurationInterface2.ConfigurationInterface);

var _default = Module => {
  let _t$TypeParametersSymb;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _init, _descriptor, _descriptor2, _class3, _temp;

  const {
    USERS,
    CONFIGURATION,
    BaseMigration,
    initialize,
    partOf,
    nameBy,
    meta,
    method,
    property,
    lazyInject
  } = Module.NS;

  const _GenerateAdminUserMigrationTypeParametersSymbol = Symbol("GenerateAdminUserMigrationTypeParameters");

  let GenerateAdminUserMigration = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("GenerateAdminUserMigration", GenerateAdminUserMigration => {
    const D = GenerateAdminUserMigration.typeParameter("D", undefined, _flowRuntime.default.ref(RecordInterface));
    return [_flowRuntime.default.extends(BaseMigration), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_configurationFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(ConfigurationInterface)))), _flowRuntime.default.method("configs", _flowRuntime.default.return(_flowRuntime.default.ref(ConfigurationInterface))), _flowRuntime.default.property("_usersFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(D))))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("_users", _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, D))), _flowRuntime.default.staticMethod("change")];
  })), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(ConfigurationInterface)))), _dec4 = lazyInject(`Factory<${CONFIGURATION}>`), _dec5 = _flowRuntime.default.decorate(function () {
    return _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, _flowRuntime.default.flowInto(this[_GenerateAdminUserMigrationTypeParametersSymbol].D))));
  }), _dec6 = lazyInject(`Factory<${USERS}>`), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = (_t$TypeParametersSymb = _flowRuntime.default.TypeParametersSymbol, _class3 = class GenerateAdminUserMigration extends BaseMigration {
    get configs() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.ref(ConfigurationInterface));

      return _returnType.assert(this._configurationFactory());
    }

    constructor(...args) {
      const _typeParameters = {
        D: _flowRuntime.default.typeParameter("D")
      };
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_configurationFactory", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "_usersFactory", _descriptor2, this);
      this[_GenerateAdminUserMigrationTypeParametersSymbol] = _typeParameters;
    }

    get _users() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.ref(CollectionInterface, this[_GenerateAdminUserMigrationTypeParametersSymbol].D));

      return _returnType2.assert(this._usersFactory());
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
          const admin = await this._users.build({
            email: this.configs.adminEmail,
            emailVerified: true,
            name: "admin",
            nickname: "admin",
            isAdmin: true
          });
          admin.password = this.configs.adminPassword;
          await admin.save();
        });
        await down(async () => {
          const admin = await (await this._users.findBy({
            "@doc.nickname": "admin"
          })).first();
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_configurationFactory", [_dec3, _dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "configs", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "configs"), _class2.prototype), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_usersFactory", [_dec5, _dec6, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_users", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "_users"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDkyMDQ4MDBfZ2VuZXJhdGVfYWRtaW5fdXNlcl9taWdyYXRpb24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiVVNFUlMiLCJDT05GSUdVUkFUSU9OIiwiQmFzZU1pZ3JhdGlvbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwibWV0aG9kIiwicHJvcGVydHkiLCJsYXp5SW5qZWN0IiwiTlMiLCJHZW5lcmF0ZUFkbWluVXNlck1pZ3JhdGlvbiIsImNvbmZpZ3MiLCJfY29uZmlndXJhdGlvbkZhY3RvcnkiLCJfdXNlcnMiLCJfdXNlcnNGYWN0b3J5IiwiY2hhbmdlIiwicmV2ZXJzaWJsZSIsInVwIiwiZG93biIsImFkbWluIiwiYnVpbGQiLCJlbWFpbCIsImFkbWluRW1haWwiLCJlbWFpbFZlcmlmaWVkIiwibmFtZSIsIm5pY2tuYW1lIiwiaXNBZG1pbiIsInBhc3N3b3JkIiwiYWRtaW5QYXNzd29yZCIsInNhdmUiLCJmaW5kQnkiLCJmaXJzdCIsImRlc3Ryb3kiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFDQTs7QUFDQTs7OztBQWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O2VBTWdCQSxNQUFELElBQVk7QUFBQTs7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxLQURJO0FBQ0dDLElBQUFBLGFBREg7QUFFSkMsSUFBQUEsYUFGSTtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLE1BSGhCO0FBR3dCQyxJQUFBQSxJQUh4QjtBQUc4QkMsSUFBQUEsTUFIOUI7QUFHc0NDLElBQUFBLFFBSHRDO0FBR2dEQyxJQUFBQTtBQUhoRCxNQUlGVixNQUFNLENBQUNXLEVBSlg7O0FBRHlCOztBQUFBLE1BU25CQywwQkFUbUIseUNBT3pCO0FBQUEsdUVBRXNDLHlDQUZ0QztBQUFBLHlDQUVnRVQsYUFGaEUsR0FHRSx5RUFIRixFQUtFLHVEQUMrQiwwREFBUSxnREFBUixFQUQvQixDQUxGLEVBUUUsbUVBQXVCLGdEQUF2QixFQVJGLEVBWUUsK0NBQ3VCLDBEQUFRLDhDQUFvQixnQ0FBcEIsQ0FBUixFQUR2QixDQVpGLDhHQWNFLGtFQUFzQiw4Q0FBc0IsQ0FBdEIsQ0FBdEIsRUFkRixFQWtCRSwyQ0FsQkY7QUFBQSxJQVB5QixXQVF4QkUsTUFBTSxDQUFDTCxNQUFELENBUmtCLHdDQWFRLDBEQUFRLGdEQUFSLEVBYlIsV0FZdEJVLFVBQVUsQ0FBRSxXQUFVUixhQUFjLEdBQTFCLENBWlk7QUFBQSxXQW9CQSwwREFBUSw4Q0FBb0Isc0ZBQXBCLENBQVIsRUFwQkE7QUFBQSxjQW1CdEJRLFVBQVUsQ0FBRSxXQUFVVCxLQUFNLEdBQWxCLENBbkJZLGdCQU94QkcsVUFQd0IsMkhBT3pCLE1BRU1RLDBCQUZOLFNBRWdFVCxhQUZoRSxDQUU4RTtBQU01RSxRQUFjVSxPQUFkLEdBQWdEO0FBQUEsc0RBQXZCLGdEQUF1Qjs7QUFDOUMsZ0NBQU8sS0FBS0MscUJBQUwsRUFBUDtBQUNEOztBQVIyRTtBQUFBO0FBQUEsV0FBNUM7QUFBNEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVk1RSxRQUFjQyxNQUFkLEdBQStDO0FBQUEsdURBQXZCLDhDQUFvQix1REFBcEIsQ0FBdUI7O0FBQzdDLGlDQUFPLEtBQUtDLGFBQUwsRUFBUDtBQUNEOztBQUVELFdBQWVDLE1BQWYsR0FBd0I7QUFBQTtBQUFBLFdBaEJRO0FBZ0JSO0FBQ3RCLFdBQUtDLFVBQUwsQ0FBZ0IsZ0JBQWdCO0FBQUVDLFFBQUFBLEVBQUY7QUFBTUMsUUFBQUE7QUFBTixPQUFoQixFQUE4QjtBQUM1QyxjQUFNRCxFQUFFLENBQUMsWUFBWTtBQUNuQixnQkFBTUUsS0FBSyxHQUFHLE1BQU0sS0FBS04sTUFBTCxDQUFZTyxLQUFaLENBQWtCO0FBQ3BDQyxZQUFBQSxLQUFLLEVBQUUsS0FBS1YsT0FBTCxDQUFhVyxVQURnQjtBQUVwQ0MsWUFBQUEsYUFBYSxFQUFFLElBRnFCO0FBR3BDQyxZQUFBQSxJQUFJLEVBQUUsT0FIOEI7QUFJcENDLFlBQUFBLFFBQVEsRUFBRSxPQUowQjtBQUtwQ0MsWUFBQUEsT0FBTyxFQUFFO0FBTDJCLFdBQWxCLENBQXBCO0FBT0FQLFVBQUFBLEtBQUssQ0FBQ1EsUUFBTixHQUFpQixLQUFLaEIsT0FBTCxDQUFhaUIsYUFBOUI7QUFDQSxnQkFBTVQsS0FBSyxDQUFDVSxJQUFOLEVBQU47QUFDRCxTQVZPLENBQVI7QUFXQSxjQUFNWCxJQUFJLENBQUMsWUFBWTtBQUNyQixnQkFBTUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEtBQUtOLE1BQUwsQ0FBWWlCLE1BQVosQ0FBbUI7QUFBQyw2QkFBaUI7QUFBbEIsV0FBbkIsQ0FBUCxFQUF1REMsS0FBdkQsRUFBcEI7QUFDQSxnQkFBTVosS0FBSyxDQUFDYSxPQUFOLEVBQU47QUFDRCxTQUhTLENBQVY7QUFJRCxPQWhCRDtBQWlCRDs7QUFsQzJFLEdBVHJELDZGQVVWQyxNQVZVLEdBVUQsRUFWQyx1RUFVdEI1QixJQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlJQWF0QkUsUUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQWV0QkEsUUFmc0IsZ01Bb0J0QkEsUUFwQnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFxQnRCQSxRQXJCc0IsaUpBeUJ0QkQsTUF6QnNCO0FBNkMxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBDb25maWd1cmF0aW9uSW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db25maWd1cmF0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgQ29sbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29sbGVjdGlvbkludGVyZmFjZSc7XG5pbXBvcnQgdHlwZSB7IFJlY29yZEludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvUmVjb3JkSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgVVNFUlMsIENPTkZJR1VSQVRJT04sXG4gICAgQmFzZU1pZ3JhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgbWV0aG9kLCBwcm9wZXJ0eSwgbGF6eUluamVjdCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgR2VuZXJhdGVBZG1pblVzZXJNaWdyYXRpb248IEQgPSBSZWNvcmRJbnRlcmZhY2UgPiBleHRlbmRzIEJhc2VNaWdyYXRpb24ge1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcblxuICAgIEBsYXp5SW5qZWN0KGBGYWN0b3J5PCR7Q09ORklHVVJBVElPTn0+YClcbiAgICBAcHJvcGVydHkgX2NvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uSW50ZXJmYWNlO1xuXG4gICAgQHByb3BlcnR5IGdldCBjb25maWdzKCk6IENvbmZpZ3VyYXRpb25JbnRlcmZhY2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ3VyYXRpb25GYWN0b3J5KCk7XG4gICAgfVxuXG4gICAgQGxhenlJbmplY3QoYEZhY3Rvcnk8JHtVU0VSU30+YClcbiAgICBAcHJvcGVydHkgX3VzZXJzRmFjdG9yeTogKCkgPT4gQ29sbGVjdGlvbkludGVyZmFjZTxEPjtcbiAgICBAcHJvcGVydHkgZ2V0IF91c2VycygpOiBDb2xsZWN0aW9uSW50ZXJmYWNlPEQ+IHtcbiAgICAgIHJldHVybiB0aGlzLl91c2Vyc0ZhY3RvcnkoKVxuICAgIH1cblxuICAgIEBtZXRob2Qgc3RhdGljIGNoYW5nZSgpIHtcbiAgICAgIHRoaXMucmV2ZXJzaWJsZShhc3luYyBmdW5jdGlvbiAoeyB1cCwgZG93biB9KSB7XG4gICAgICAgIGF3YWl0IHVwKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBhZG1pbiA9IGF3YWl0IHRoaXMuX3VzZXJzLmJ1aWxkKHtcbiAgICAgICAgICAgIGVtYWlsOiB0aGlzLmNvbmZpZ3MuYWRtaW5FbWFpbCxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHRydWUsXG4gICAgICAgICAgICBuYW1lOiBcImFkbWluXCIsXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJhZG1pblwiLFxuICAgICAgICAgICAgaXNBZG1pbjogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIGFkbWluLnBhc3N3b3JkID0gdGhpcy5jb25maWdzLmFkbWluUGFzc3dvcmRcbiAgICAgICAgICBhd2FpdCBhZG1pbi5zYXZlKClcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGRvd24oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgKGF3YWl0IHRoaXMuX3VzZXJzLmZpbmRCeSh7XCJAZG9jLm5pY2tuYW1lXCI6IFwiYWRtaW5cIn0pKS5maXJzdCgpXG4gICAgICAgICAgYXdhaXQgYWRtaW4uZGVzdHJveSgpXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=