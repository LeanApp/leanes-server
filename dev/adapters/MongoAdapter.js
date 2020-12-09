"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _DriverInterface2 = require("../interfaces/DriverInterface");

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-server.
//
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
// the specific language governing rights and limitations under the License.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0ZXJzL01vbmdvQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBZGFwdGVyIiwiQ29uZmlndXJhYmxlTWl4aW4iLCJNb25nb0FkYXB0ZXJNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwicHJvcGVydHkiLCJuYW1lQnkiLCJtaXhpbiIsIk5TIiwiTW9uZ29BZGFwdGVyIiwiaG9zdCIsImNvbmZpZ3MiLCJwb3J0IiwiZGJOYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOzs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFJZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFFSkMsSUFBQUEsaUJBRkk7QUFHSkMsSUFBQUEsaUJBSEk7QUFJSkMsSUFBQUEsVUFKSTtBQUlRQyxJQUFBQSxNQUpSO0FBSWdCQyxJQUFBQSxJQUpoQjtBQUlzQkMsSUFBQUEsUUFKdEI7QUFJZ0NDLElBQUFBLE1BSmhDO0FBSXdDQyxJQUFBQTtBQUp4QyxNQUtGVCxNQUFNLENBQUNVLEVBTFg7QUFEeUIsTUFZbkJDLFlBWm1CLHlDQVF6Qix3RUFJMkJWLE9BSjNCLEdBS0UsNkVBTEYsRUFNRSx5RUFORiw4R0FRRSxnRUFBb0IsNkJBQXBCLEVBUkYsRUFZRSxnRUFBb0IsNkJBQXBCLEVBWkYsRUFnQkUsa0VBQXNCLDZCQUF0QixFQWhCRixFQW9CRSxvRUFBd0IsOEJBQUcsNkJBQUgsQ0FBeEIsRUFwQkYsRUF3QkUsb0VBQXdCLDhCQUFHLDZCQUFILENBQXhCLEVBeEJGLENBUnlCLFdBU3hCSSxNQUFNLENBQUNMLE1BQUQsQ0FUa0IsVUFVeEJTLEtBQUssQ0FBQ04saUJBQUQsQ0FWbUIsVUFXeEJNLEtBQUssQ0FBQ1AsaUJBQUQsQ0FYbUIsZ0JBUXhCRSxVQVJ3QixxRkFRekIsTUFJTU8sWUFKTixTQUkyQlYsT0FKM0IsQ0FJOEQ7QUFBQTtBQUFBOztBQUFoQiwrQ0FBZ0I7QUFBQTs7QUFJNUQsUUFBY1csSUFBZCxHQUE2QjtBQUFBLHNEQUFQLDZCQUFPOztBQUMzQixnQ0FBTyxLQUFLQyxPQUFMLENBQWEsU0FBYixFQUF3QkQsSUFBL0I7QUFDRDs7QUFFRCxRQUFjRSxJQUFkLEdBQTZCO0FBQUEsdURBQVAsNkJBQU87O0FBQzNCLGlDQUFPLEtBQUtELE9BQUwsQ0FBYSxTQUFiLEVBQXdCQyxJQUEvQjtBQUNEOztBQUVELFFBQWNDLE1BQWQsR0FBK0I7QUFBQSx1REFBUCw2QkFBTzs7QUFDN0IsaUNBQU8sS0FBS0YsT0FBTCxDQUFhLFNBQWIsRUFBd0JFLE1BQS9CO0FBQ0Q7O0FBRUQsUUFBY0MsUUFBZCxHQUFrQztBQUFBLHVEQUFSLDhCQUFDLDZCQUFELENBQVE7O0FBQ2hDLGlDQUFPLEtBQUtILE9BQUwsQ0FBYSxTQUFiLEVBQXdCRyxRQUEvQjtBQUNEOztBQUVELFFBQWNDLFFBQWQsR0FBa0M7QUFBQSx1REFBUiw4QkFBQyw2QkFBRCxDQUFROztBQUNoQyxpQ0FBTyxLQUFLSixPQUFMLENBQWEsU0FBYixFQUF3QkksUUFBL0I7QUFDRDs7QUF0QjJELEdBWnJDLFVBYVBDLFVBYk8sR0FhTUEsVUFiTixVQWNWQyxNQWRVLEdBY0QsRUFkQywyRUFhdEJYLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQWdCdEJDLFFBaEJzQix1SkFvQnRCQSxRQXBCc0IseUpBd0J0QkEsUUF4QnNCLDZKQTRCdEJBLFFBNUJzQiwrSkFnQ3RCQSxRQWhDc0I7QUFvQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBEcml2ZXJJbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0RyaXZlckludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFkYXB0ZXIsXG4gICAgQ29uZmlndXJhYmxlTWl4aW4sXG4gICAgTW9uZ29BZGFwdGVyTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbmFtZUJ5LCBtaXhpbixcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1vbmdvQWRhcHRlck1peGluKVxuICBAbWl4aW4oQ29uZmlndXJhYmxlTWl4aW4pXG4gIGNsYXNzIE1vbmdvQWRhcHRlciBleHRlbmRzIEFkYXB0ZXIgaW1wbGVtZW50cyBEcml2ZXJJbnRlcmZhY2Uge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgZ2V0IGhvc3QoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5ob3N0O1xuICAgIH07XG5cbiAgICBAcHJvcGVydHkgZ2V0IHBvcnQoKTogc3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5wb3J0O1xuICAgIH07XG5cbiAgICBAcHJvcGVydHkgZ2V0IGRiTmFtZSgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnc1snbW9uZ29kYiddLmRiTmFtZTtcbiAgICB9O1xuXG4gICAgQHByb3BlcnR5IGdldCB1c2VybmFtZSgpOiA/c3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS51c2VybmFtZTtcbiAgICB9O1xuXG4gICAgQHByb3BlcnR5IGdldCBwYXNzd29yZCgpOiA/c3RyaW5nIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3NbJ21vbmdvZGInXS5wYXNzd29yZDtcbiAgICB9O1xuICB9XG59XG4iXX0=