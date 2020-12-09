"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    APPLICATION_PROXY,
    Pipes,
    Application,
    MigratifyApplicationMixin,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy,
    mixin,
    Utils: {
      _
    }
  } = Module.NS;
  const {
    LogMessage: {
      DEBUG
    },
    LogFilterMessage: {
      SET_LOG_LEVEL
    }
  } = Pipes.NS;
  let MainApplication = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("MainApplication", _flowRuntime.default.extends(Application), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("initialState", _flowRuntime.default.ref("object")), _flowRuntime.default.method("setLogLevelMethod", _flowRuntime.default.param("level", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("sendEvent", _flowRuntime.default.param("name", _flowRuntime.default.any()), _flowRuntime.default.param("body", _flowRuntime.default.any()), _flowRuntime.default.param("type", _flowRuntime.default.any())), _flowRuntime.default.method("setState", _flowRuntime.default.param("state", _flowRuntime.default.any()), _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("getState", _flowRuntime.default.return(_flowRuntime.default.ref("object"))), _flowRuntime.default.method("constructor", _flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.symbol(), _flowRuntime.default.ref("object"))))))), _dec2 = partOf(Module), _dec3 = mixin(MigratifyApplicationMixin), _dec4 = _flowRuntime.default.decorate(_flowRuntime.default.ref("object")), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class MainApplication extends Application {
    setLogLevelMethod(level) {
      let _levelType = _flowRuntime.default.number();

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("level", _levelType).assert(level);

      this.send(SET_LOG_LEVEL, level);
    }

    sendEvent(name, body, type = 'Event') {
      this.send(name, body, type);
    }

    setState(state) {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      appProxy.setState(state);
    }

    getState() {
      const _returnType3 = _flowRuntime.default.return(_flowRuntime.default.ref("object"));

      const appProxy = this.facade.getProxy(APPLICATION_PROXY);
      return _returnType3.assert(appProxy.getData());
    }

    constructor(data) {
      let _dataType = _flowRuntime.default.nullable(_flowRuntime.default.union(_flowRuntime.default.symbol(), _flowRuntime.default.ref("object")));

      _flowRuntime.default.param("data", _dataType).assert(data);

      const {
        ApplicationFacade
      } = Module.NS;
      const symbol = _.isSymbol(data) ? data : null;
      super(Module.name, ApplicationFacade, symbol);
      (0, _initializerDefineProperty2.default)(this, "initialState", _descriptor, this);
      this.dispatch = this.sendEvent.bind(this);

      if (!_.isSymbol(data) && _.isObject(data)) {
        this.initialState = data;
      }
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initialState", [_dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return null;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setLogLevelMethod", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setLogLevelMethod"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "sendEvent", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "sendEvent"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "setState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "setState"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "getState", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "getState"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1haW5BcHBsaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9QUk9YWSIsIlBpcGVzIiwiQXBwbGljYXRpb24iLCJNaWdyYXRpZnlBcHBsaWNhdGlvbk1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIm1peGluIiwiVXRpbHMiLCJfIiwiTlMiLCJMb2dNZXNzYWdlIiwiREVCVUciLCJMb2dGaWx0ZXJNZXNzYWdlIiwiU0VUX0xPR19MRVZFTCIsIk1haW5BcHBsaWNhdGlvbiIsInNldExvZ0xldmVsTWV0aG9kIiwibGV2ZWwiLCJzZW5kIiwic2VuZEV2ZW50IiwibmFtZSIsImJvZHkiLCJ0eXBlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImFwcFByb3h5IiwiZmFjYWRlIiwiZ2V0UHJveHkiLCJnZXRTdGF0ZSIsImdldERhdGEiLCJjb25zdHJ1Y3RvciIsImRhdGEiLCJBcHBsaWNhdGlvbkZhY2FkZSIsInN5bWJvbCIsImlzU3ltYm9sIiwiZGlzcGF0Y2giLCJiaW5kIiwiaXNPYmplY3QiLCJpbml0aWFsU3RhdGUiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGlCQURJO0FBRUpDLElBQUFBLEtBRkk7QUFHSkMsSUFBQUEsV0FISTtBQUlKQyxJQUFBQSx5QkFKSTtBQUtKQyxJQUFBQSxVQUxJO0FBS1FDLElBQUFBLE1BTFI7QUFLZ0JDLElBQUFBLElBTGhCO0FBS3NCQyxJQUFBQSxRQUx0QjtBQUtnQ0MsSUFBQUEsTUFMaEM7QUFLd0NDLElBQUFBLE1BTHhDO0FBS2dEQyxJQUFBQSxLQUxoRDtBQU1KQyxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUE7QUFB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O0FBQUEsdUZBd0J0QkMsTUF4QnNCLHlLQTRCdEJBLE1BNUJzQixnS0FnQ3RCQSxNQWhDc0IsK0pBcUN0QkEsTUFyQ3NCO0FBc0QxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEFQUExJQ0FUSU9OX1BST1hZLFxuICAgIFBpcGVzLFxuICAgIEFwcGxpY2F0aW9uLFxuICAgIE1pZ3JhdGlmeUFwcGxpY2F0aW9uTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnksIG1peGluLFxuICAgIFV0aWxzOiB7IF8gfVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIGNvbnN0IHtcbiAgICBMb2dNZXNzYWdlOiB7IERFQlVHIH0sXG4gICAgTG9nRmlsdGVyTWVzc2FnZTogeyBTRVRfTE9HX0xFVkVMIH1cbiAgfSA9IFBpcGVzLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oTWlncmF0aWZ5QXBwbGljYXRpb25NaXhpbilcbiAgY2xhc3MgTWFpbkFwcGxpY2F0aW9uIGV4dGVuZHMgQXBwbGljYXRpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgaW5pdGlhbFN0YXRlOiBvYmplY3QgPSBudWxsO1xuXG4gICAgQG1ldGhvZCBzZXRMb2dMZXZlbE1ldGhvZChsZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gICAgICB0aGlzLnNlbmQoU0VUX0xPR19MRVZFTCwgbGV2ZWwpO1xuICAgIH1cblxuICAgIEBtZXRob2Qgc2VuZEV2ZW50KG5hbWUsIGJvZHksIHR5cGUgPSAnRXZlbnQnKSB7XG4gICAgICB0aGlzLnNlbmQobmFtZSwgYm9keSwgdHlwZSk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBzZXRTdGF0ZShzdGF0ZSk6IHZvaWQge1xuICAgICAgY29uc3QgYXBwUHJveHkgPSB0aGlzLmZhY2FkZS5nZXRQcm94eShBUFBMSUNBVElPTl9QUk9YWSk7XG4gICAgICBhcHBQcm94eS5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBnZXRTdGF0ZSgpOiBvYmplY3Qge1xuICAgICAgY29uc3QgYXBwUHJveHkgPSB0aGlzLmZhY2FkZS5nZXRQcm94eShBUFBMSUNBVElPTl9QUk9YWSk7XG4gICAgICByZXR1cm4gYXBwUHJveHkuZ2V0RGF0YSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGE6ID8oU3ltYm9sIHwgb2JqZWN0KSkge1xuICAgICAgY29uc3QgeyBBcHBsaWNhdGlvbkZhY2FkZSB9ID0gTW9kdWxlLk5TO1xuICAgICAgY29uc3Qgc3ltYm9sID0gXy5pc1N5bWJvbChkYXRhKVxuICAgICAgICA/IGRhdGFcbiAgICAgICAgOiBudWxsO1xuICAgICAgc3VwZXIoTW9kdWxlLm5hbWUsIEFwcGxpY2F0aW9uRmFjYWRlLCBzeW1ib2wpO1xuICAgICAgdGhpcy5kaXNwYXRjaCA9IHRoaXMuc2VuZEV2ZW50LmJpbmQodGhpcyk7XG4gICAgICBpZiAoIV8uaXNTeW1ib2woZGF0YSkgJiYgXy5pc09iamVjdChkYXRhKSkge1xuICAgICAgICB0aGlzLmluaXRpYWxTdGF0ZSA9IGRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=