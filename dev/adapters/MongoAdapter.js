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

const {
  DB_PROTO,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS
} = process.env;

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Adapter,
    MongoAdapterMixin,
    QueryableMongoAdapterMixin,
    initialize,
    partOf,
    meta,
    property,
    nameBy,
    mixin
  } = Module.NS;
  let MongoAdapter = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MongoAdapter", _flowRuntime.default.extends(Adapter), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("constructor", _flowRuntime.default.param("args", _flowRuntime.default.any())), _flowRuntime.default.method("dbProto", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("host", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("port", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("dbName", _flowRuntime.default.return(_flowRuntime.default.string())), _flowRuntime.default.method("username", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()))), _flowRuntime.default.method("password", _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()))))), _dec2 = partOf(Module), _dec3 = mixin(QueryableMongoAdapterMixin), _dec4 = mixin(MongoAdapterMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_class2 = (_temp = _class3 = class MongoAdapter extends Adapter {
    constructor(...args) {
      super(...args);

      _flowRuntime.default.ref(DriverInterface).assert(this);
    }

    get dbProto() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType.assert(DB_PROTO);
    }

    get host() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType2.assert(DB_HOST);
    }

    get port() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType3.assert(DB_PORT);
    }

    get dbName() {
      const _returnType4 = _flowRuntime.default.return(_flowRuntime.default.string());

      return _returnType4.assert(DB_NAME);
    }

    get username() {
      const _returnType5 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()));

      return _returnType5.assert(DB_USER);
    }

    get password() {
      const _returnType6 = _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string()));

      return _returnType6.assert(DB_PASS);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "dbProto", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "dbProto"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "host", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "host"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "port", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "port"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "dbName", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "dbName"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "username", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "username"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "password", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "password"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkYXB0ZXJzL01vbmdvQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJEQl9QUk9UTyIsIkRCX0hPU1QiLCJEQl9QT1JUIiwiREJfTkFNRSIsIkRCX1VTRVIiLCJEQl9QQVNTIiwicHJvY2VzcyIsImVudiIsIk1vZHVsZSIsIkFkYXB0ZXIiLCJNb25nb0FkYXB0ZXJNaXhpbiIsIlF1ZXJ5YWJsZU1vbmdvQWRhcHRlck1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsIm1peGluIiwiTlMiLCJNb25nb0FkYXB0ZXIiLCJkYlByb3RvIiwiaG9zdCIsInBvcnQiLCJkYk5hbWUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBVUE7Ozs7QUFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBLE1BQU07QUFDSkEsRUFBQUEsUUFESTtBQUNNQyxFQUFBQSxPQUROO0FBQ2VDLEVBQUFBLE9BRGY7QUFDd0JDLEVBQUFBLE9BRHhCO0FBQ2lDQyxFQUFBQSxPQURqQztBQUMwQ0MsRUFBQUE7QUFEMUMsSUFFRkMsT0FBTyxDQUFDQyxHQUZaOztlQUlnQkMsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsT0FESTtBQUVKQyxJQUFBQSxpQkFGSTtBQUdKQyxJQUFBQSwwQkFISTtBQUlKQyxJQUFBQSxVQUpJO0FBSVFDLElBQUFBLE1BSlI7QUFJZ0JDLElBQUFBLElBSmhCO0FBSXNCQyxJQUFBQSxRQUp0QjtBQUlnQ0MsSUFBQUEsTUFKaEM7QUFJd0NDLElBQUFBO0FBSnhDLE1BS0ZULE1BQU0sQ0FBQ1UsRUFMWDtBQUR5QixNQVluQkMsWUFabUIseUNBUXpCLHdFQUkyQlYsT0FKM0IsR0FLRSw2RUFMRixFQU1FLHlFQU5GLDhHQVFFLG1FQUF1Qiw2QkFBdkIsRUFSRixFQVlFLGdFQUFvQiw2QkFBcEIsRUFaRixFQWdCRSxnRUFBb0IsNkJBQXBCLEVBaEJGLEVBb0JFLGtFQUFzQiw2QkFBdEIsRUFwQkYsRUF3QkUsb0VBQXdCLDhCQUFHLDZCQUFILENBQXhCLEVBeEJGLEVBNEJFLG9FQUF3Qiw4QkFBRyw2QkFBSCxDQUF4QixFQTVCRixDQVJ5QixXQVN4QkksTUFBTSxDQUFDTCxNQUFELENBVGtCLFVBVXhCUyxLQUFLLENBQUNOLDBCQUFELENBVm1CLFVBV3hCTSxLQUFLLENBQUNQLGlCQUFELENBWG1CLGdCQVF4QkUsVUFSd0IscUZBUXpCLE1BSU1PLFlBSk4sU0FJMkJWLE9BSjNCLENBSThEO0FBQUE7QUFBQTs7QUFBaEIsK0NBQWdCO0FBQUE7O0FBSTVELFFBQWNXLE9BQWQsR0FBZ0M7QUFBQSxzREFBUCw2QkFBTzs7QUFDOUIsZ0NBQU9wQixRQUFQO0FBQ0Q7O0FBRUQsUUFBY3FCLElBQWQsR0FBNkI7QUFBQSx1REFBUCw2QkFBTzs7QUFDM0IsaUNBQU9wQixPQUFQO0FBQ0Q7O0FBRUQsUUFBY3FCLElBQWQsR0FBNkI7QUFBQSx1REFBUCw2QkFBTzs7QUFDM0IsaUNBQU9wQixPQUFQO0FBQ0Q7O0FBRUQsUUFBY3FCLE1BQWQsR0FBK0I7QUFBQSx1REFBUCw2QkFBTzs7QUFDN0IsaUNBQU9wQixPQUFQO0FBQ0Q7O0FBRUQsUUFBY3FCLFFBQWQsR0FBa0M7QUFBQSx1REFBUiw4QkFBQyw2QkFBRCxDQUFROztBQUNoQyxpQ0FBT3BCLE9BQVA7QUFDRDs7QUFFRCxRQUFjcUIsUUFBZCxHQUFrQztBQUFBLHVEQUFSLDhCQUFDLDZCQUFELENBQVE7O0FBQ2hDLGlDQUFPcEIsT0FBUDtBQUNEOztBQTFCMkQsR0FackMsVUFhUHFCLFVBYk8sR0FhTUEsVUFiTixVQWNWQyxNQWRVLEdBY0QsRUFkQywyRUFhdEJYLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVGQWdCdEJDLFFBaEJzQiwwSkFvQnRCQSxRQXBCc0IsdUpBd0J0QkEsUUF4QnNCLHlKQTRCdEJBLFFBNUJzQiw2SkFnQ3RCQSxRQWhDc0IsK0pBb0N0QkEsUUFwQ3NCO0FBd0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmltcG9ydCB0eXBlIHsgRHJpdmVySW50ZXJmYWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Ecml2ZXJJbnRlcmZhY2UnO1xuXG5jb25zdCB7XG4gIERCX1BST1RPLCBEQl9IT1NULCBEQl9QT1JULCBEQl9OQU1FLCBEQl9VU0VSLCBEQl9QQVNTLFxufSA9IHByb2Nlc3MuZW52O1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBBZGFwdGVyLFxuICAgIE1vbmdvQWRhcHRlck1peGluLFxuICAgIFF1ZXJ5YWJsZU1vbmdvQWRhcHRlck1peGluLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgcHJvcGVydHksIG5hbWVCeSwgbWl4aW4sXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihRdWVyeWFibGVNb25nb0FkYXB0ZXJNaXhpbilcbiAgQG1peGluKE1vbmdvQWRhcHRlck1peGluKVxuICBjbGFzcyBNb25nb0FkYXB0ZXIgZXh0ZW5kcyBBZGFwdGVyIGltcGxlbWVudHMgRHJpdmVySW50ZXJmYWNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQHByb3BlcnR5IGdldCBkYlByb3RvKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gREJfUFJPVE87XG4gICAgfTtcblxuICAgIEBwcm9wZXJ0eSBnZXQgaG9zdCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIERCX0hPU1Q7XG4gICAgfTtcblxuICAgIEBwcm9wZXJ0eSBnZXQgcG9ydCgpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuIERCX1BPUlQ7XG4gICAgfTtcblxuICAgIEBwcm9wZXJ0eSBnZXQgZGJOYW1lKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gREJfTkFNRTtcbiAgICB9O1xuXG4gICAgQHByb3BlcnR5IGdldCB1c2VybmFtZSgpOiA/c3RyaW5nIHtcbiAgICAgIHJldHVybiBEQl9VU0VSO1xuICAgIH07XG5cbiAgICBAcHJvcGVydHkgZ2V0IHBhc3N3b3JkKCk6ID9zdHJpbmcge1xuICAgICAgcmV0dXJuIERCX1BBU1M7XG4gICAgfTtcbiAgfVxufVxuIl19