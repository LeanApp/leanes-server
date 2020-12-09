"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _DriverInterface2 = require("../interfaces/DriverInterface");

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
const DriverInterface = _flowRuntime.default.tdz(() => _DriverInterface2.DriverInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Adapter,
    ConfigurableMixin,
    MongoAdapterMixin,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin
  } = Module.NS;
  let MongoAdapter = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MongoAdapter", _flowRuntime.default.extends(Adapter), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("host", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("port", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("dbName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("username", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()))), _flowRuntime.default.method("password", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()))))), _dec2 = partOf(Module), _dec3 = mixin(MongoAdapterMixin), _dec4 = mixin(ConfigurableMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = class MongoAdapter extends Adapter {
    constructor(...args) {
      super(...args);

      _flowRuntime.default.ref(DriverInterface).assert(this);
    }

    get host() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert(this.configs['mongodb'].host);
    }

    get port() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert(this.configs['mongodb'].port);
    }

    get dbName() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType3.assert(this.configs['mongodb'].dbName);
    }

    get username() {
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()));

      return _returnType4.assert(this.configs['mongodb'].username);
    }

    get password() {
      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()));

      return _returnType5.assert(this.configs['mongodb'].password);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "host", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "host"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "port", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "port"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "dbName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "dbName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "username", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "username"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "password", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "password"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0ZXJzL01vbmdvQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBZGFwdGVyIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJNb25nb0FkYXB0ZXJNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJuYW1lQnkiLCJtaXhpbiIsIk5TIiwiTW9uZ29BZGFwdGVyIiwiaG9zdCIsImNvbmZpZ3MiLCJwb3J0IiwiZGJOYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQWVBOzs7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O2VBSWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLGlCQUZJO0FBR0pDLElBQUFBLGlCQUhJO0FBSUpDLElBQUFBLFVBSkk7QUFJUUMsSUFBQUEsTUFKUjtBQUlnQkMsSUFBQUEsSUFKaEI7QUFJc0JDLElBQUFBLFFBSnRCO0FBSWdDQyxJQUFBQSxNQUpoQztBQUl3Q0MsSUFBQUE7QUFKeEMsTUFLRlQsTUFBTSxDQUFDVSxFQUxYO0FBRHlCLE1BWW5CQyxZQVptQix5Q0FRekIsd0VBSTJCVixPQUozQixHQUtFLDZFQUxGLEVBTUUseUVBTkYsOEdBUUUsZ0VBQW9CLDZCQUFwQixFQVJGLEVBWUUsZ0VBQW9CLDZCQUFwQixFQVpGLEVBZ0JFLGtFQUFzQiw2QkFBdEIsRUFoQkYsRUFvQkUsb0VBQXdCLDhCQUFHLDZCQUFILENBQXhCLEVBcEJGLEVBd0JFLG9FQUF3Qiw4QkFBRyw2QkFBSCxDQUF4QixFQXhCRixDQVJ5QixXQVN4QkksTUFBTSxDQUFDTCxNQUFELENBVGtCLFVBVXhCUyxLQUFLLENBQUNOLGlCQUFELENBVm1CLFVBV3hCTSxLQUFLLENBQUNQLGlCQUFELENBWG1CLGdCQVF4QkUsVUFSd0IscUZBUXpCLE1BSU1PLFlBSk4sU0FJMkJWLE9BSjNCLENBSThEO0FBQUE7QUFBQTs7QUFBaEIsK0NBQWdCO0FBQUE7O0FBSTVELFFBQWNXLElBQWQsR0FBNkI7QUFBQSxzREFBUCw2QkFBTzs7QUFDM0IsZ0NBQU8sS0FBS0MsT0FBTCxDQUFhLFNBQWIsRUFBd0JELElBQS9CO0FBQ0Q7O0FBRUQsUUFBY0UsSUFBZCxHQUE2QjtBQUFBLHVEQUFQLDZCQUFPOztBQUMzQixpQ0FBTyxLQUFLRCxPQUFMLENBQWEsU0FBYixFQUF3QkMsSUFBL0I7QUFDRDs7QUFFRCxRQUFjQyxNQUFkLEdBQStCO0FBQUEsdURBQVAsNkJBQU87O0FBQzdCLGlDQUFPLEtBQUtGLE9BQUwsQ0FBYSxTQUFiLEVBQXdCRSxNQUEvQjtBQUNEOztBQUVELFFBQWNDLFFBQWQsR0FBa0M7QUFBQSx1REFBUiw4QkFBQyw2QkFBRCxDQUFROztBQUNoQyxpQ0FBTyxLQUFLSCxPQUFMLENBQWEsU0FBYixFQUF3QkcsUUFBL0I7QUFDRDs7QUFFRCxRQUFjQyxRQUFkLEdBQWtDO0FBQUEsdURBQVIsOEJBQUMsNkJBQUQsQ0FBUTs7QUFDaEMsaUNBQU8sS0FBS0osT0FBTCxDQUFhLFNBQWIsRUFBd0JJLFFBQS9CO0FBQ0Q7O0FBdEIyRCxHQVpyQyxVQWFQQyxVQWJPLEdBYU1BLFVBYk4sVUFjVkMsTUFkVSxHQWNELEVBZEMsMkVBYXRCWCxNQWJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWN0QkYsSUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvRkFnQnRCQyxRQWhCc0IsdUpBb0J0QkEsUUFwQnNCLHlKQXdCdEJBLFFBeEJzQiw2SkE0QnRCQSxRQTVCc0IsK0pBZ0N0QkEsUUFoQ3NCO0FBb0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBEcml2ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0RyaXZlckludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFkYXB0ZXIsXG4gICAgQ29uZmlndXJhYmxlTWl4aW4sXG4gICAgTW9uZ29BZGFwdGVyTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbmFtZUJ5LCBtaXhpbixcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1vbmdvQWRhcHRlck1peGluKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIE1vbmdvQWRhcHRlciBleHRlbmRzIEFkYXB0ZXIgaW1wbGVtZW50cyBEcml2ZXJJbnRlcmZhY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5ob3N0O1xuICAgIH07XG5cbiAgICBAcHJvcGVydHkgZ2V0IHBvcnQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5wb3J0O1xuICAgIH07XG5cbiAgICBAcHJvcGVydHkgZ2V0IGRiTmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnc1snbW9uZ29kYiddLmRiTmFtZTtcbiAgICB9O1xuXG4gICAgQHByb3BlcnR5IGdldCB1c2VybmFtZSgpOiA/c3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS51c2VybmFtZTtcbiAgICB9O1xuXG4gICAgQHByb3BlcnR5IGdldCBwYXNzd29yZCgpOiA/c3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5wYXNzd29yZDtcbiAgICB9O1xuICB9XG59XG4iXX0=