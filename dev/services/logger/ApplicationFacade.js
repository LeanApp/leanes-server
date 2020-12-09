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
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    STARTUP,
    Facade,
    initialize,
    partOf,
    meta,
    property,
    method,
    nameBy
  } = Module.NS;
  let ApplicationFacade = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ApplicationFacade", _flowRuntime.default.extends(Facade), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_isInitialized", _flowRuntime.default.boolean()), _flowRuntime.default.method("startup", _flowRuntime.default.param("app", _flowRuntime.default.any())), _flowRuntime.default.method("initializeFacade", _flowRuntime.default.return(_flowRuntime.default.void())))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.boolean()), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ApplicationFacade extends Facade {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_isInitialized", _descriptor, this);
    }

    startup(app) {
      if (!this._isInitialized) {
        this._isInitialized = true;
        this.send(STARTUP, app);
      }
    }

    initializeFacade() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      super.initializeFacade(...arguments);
      this.rebind('ApplicationModule').toConstructor(this.Module);
      this.addCommand(STARTUP, 'StartupCommand');
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_isInitialized", [_dec3, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "startup", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "startup"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeFacade", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeFacade"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvZ2dlci9BcHBsaWNhdGlvbkZhY2FkZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJTVEFSVFVQIiwiRmFjYWRlIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiQXBwbGljYXRpb25GYWNhZGUiLCJzdGFydHVwIiwiYXBwIiwiX2lzSW5pdGlhbGl6ZWQiLCJzZW5kIiwiaW5pdGlhbGl6ZUZhY2FkZSIsImFyZ3VtZW50cyIsInJlYmluZCIsInRvQ29uc3RydWN0b3IiLCJhZGRDb21tYW5kIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxPQURJO0FBRUpDLElBQUFBLE1BRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsUUFIdEI7QUFHZ0NDLElBQUFBLE1BSGhDO0FBR3dDQyxJQUFBQTtBQUh4QyxNQUlGUixNQUFNLENBQUNTLEVBSlg7QUFEeUIsTUFTbkJDLGlCQVRtQix5Q0FPekIsNkVBRWdDUixNQUZoQyxHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxnREFBd0IsOEJBQXhCLENBTkYsRUFRRSxxR0FSRixFQWVFLDRFQUEwQiwyQkFBMUIsRUFmRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLHdDQWFDLDhCQWJELGlCQU94QkcsVUFQd0IsdURBT3pCLE1BRU1PLGlCQUZOLFNBRWdDUixNQUZoQyxDQUV1QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU03QlMsSUFBQUEsT0FBUixDQUFnQkMsR0FBaEIsRUFBcUI7QUFDbkIsVUFBSSxDQUFDLEtBQUtDLGNBQVYsRUFBMEI7QUFDeEIsYUFBS0EsY0FBTCxHQUFzQixJQUF0QjtBQUNBLGFBQUtDLElBQUwsQ0FBVWIsT0FBVixFQUFtQlcsR0FBbkI7QUFDRDtBQUNGOztBQUVPRyxJQUFBQSxnQkFBUixHQUFpQztBQUFBLHNEQUFMLDJCQUFLOztBQUMvQixZQUFNQSxnQkFBTixDQUF1QixHQUFJQyxTQUEzQjtBQUNBLFdBQUtDLE1BQUwsQ0FBWSxtQkFBWixFQUFpQ0MsYUFBakMsQ0FBK0MsS0FBS2xCLE1BQXBEO0FBQ0EsV0FBS21CLFVBQUwsQ0FBZ0JsQixPQUFoQixFQUF5QixnQkFBekI7QUFDRDs7QUFqQm9DLEdBVGQsVUFVUG1CLFVBVk8sR0FVTUEsVUFWTixVQVdWQyxNQVhVLEdBV0QsRUFYQywyRUFVdEJiLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCSCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1IQWF0QkMsUUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYWEsS0FiYjtBQUFBO0FBQUEsNkVBZXRCQyxNQWZzQixzS0FzQnRCQSxNQXRCc0I7QUE0QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU1RBUlRVUCxcbiAgICBGYWNhZGUsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLCBuYW1lQnlcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgQXBwbGljYXRpb25GYWNhZGUgZXh0ZW5kcyBGYWNhZGUge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAcHJvcGVydHkgX2lzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBtZXRob2Qgc3RhcnR1cChhcHApIHtcbiAgICAgIGlmICghdGhpcy5faXNJbml0aWFsaXplZCkge1xuICAgICAgICB0aGlzLl9pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZW5kKFNUQVJUVVAsIGFwcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1ldGhvZCBpbml0aWFsaXplRmFjYWRlKCk6IHZvaWQge1xuICAgICAgc3VwZXIuaW5pdGlhbGl6ZUZhY2FkZSguLi4gYXJndW1lbnRzKVxuICAgICAgdGhpcy5yZWJpbmQoJ0FwcGxpY2F0aW9uTW9kdWxlJykudG9Db25zdHJ1Y3Rvcih0aGlzLk1vZHVsZSk7XG4gICAgICB0aGlzLmFkZENvbW1hbmQoU1RBUlRVUCwgJ1N0YXJ0dXBDb21tYW5kJyk7XG4gICAgfVxuICB9XG59XG4iXX0=