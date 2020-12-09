"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));

var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _RouterInterface2 = require("./interfaces/RouterInterface");

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
const RouterInterface = _flowRuntime.default.tdz(() => _RouterInterface2.RouterInterface);

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _class, _class2, _init, _init2, _descriptor, _class3, _temp;

  const {
    SWAGGER_ROUTER,
    Router,
    initialize,
    partOf,
    meta,
    method,
    property,
    nameBy,
    inject
  } = Module.NS;
  let ApplicationRouter = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ApplicationRouter", _flowRuntime.default.extends(Router), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.property("_swaggerFactory", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface)))), _flowRuntime.default.method("externals"), _flowRuntime.default.method("map"))), _dec2 = partOf(Module), _dec3 = _flowRuntime.default.decorate(_flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref(RouterInterface)))), _dec4 = inject(`Factory<${SWAGGER_ROUTER}>`), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class ApplicationRouter extends Router {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "_swaggerFactory", _descriptor, this);
    }

    externals() {
      return [this._swaggerFactory()];
    }

    map() {
      this.get('/info', {
        to: 'itself#info',
        recordName: null
      });
      this.resource('users', {
        except: ['delete']
      }, function () {
        this.post('/signup', {
          to: 'users#signup',
          template: 'users/signup',
          recordName: null
        });
        this.post('/authorize', {
          to: 'users#authorize',
          template: 'users/authorize',
          recordName: null
        });
        this.get('/signout', {
          to: 'users#signout',
          template: 'users/signout',
          recordName: null
        });
      });
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
  }), _class2), _descriptor = (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "_swaggerFactory", [_dec3, _dec4, property], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "externals", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "externals"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "map", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "map"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uUm91dGVyLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNXQUdHRVJfUk9VVEVSIiwiUm91dGVyIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIk5TIiwiQXBwbGljYXRpb25Sb3V0ZXIiLCJleHRlcm5hbHMiLCJfc3dhZ2dlckZhY3RvcnkiLCJtYXAiLCJnZXQiLCJ0byIsInJlY29yZE5hbWUiLCJyZXNvdXJjZSIsImV4Y2VwdCIsInBvc3QiLCJ0ZW1wbGF0ZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsY0FESTtBQUVKQyxJQUFBQSxNQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxRQUg5QjtBQUd3Q0MsSUFBQUEsTUFIeEM7QUFHZ0RDLElBQUFBO0FBSGhELE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQUR5QixNQVNuQkMsaUJBVG1CLHlDQU96Qiw2RUFFZ0NULE1BRmhDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGlEQUN5QiwwREFBUSx5Q0FBUixFQUR6QixDQU5GLEVBU0Usd0NBVEYsRUFhRSxrQ0FiRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLHdDQWNFLDBEQUFRLHlDQUFSLEVBZEYsV0FhdEJTLE1BQU0sQ0FBRSxXQUFVUixjQUFlLEdBQTNCLENBYmdCLGdCQU94QkUsVUFQd0IsdURBT3pCLE1BRU1RLGlCQUZOLFNBRWdDVCxNQUZoQyxDQUV1QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU83QlUsSUFBQUEsU0FBUixHQUFvQjtBQUNsQixhQUFPLENBQUMsS0FBS0MsZUFBTCxFQUFELENBQVA7QUFDRDs7QUFFT0MsSUFBQUEsR0FBUixHQUFjO0FBQ1osV0FBS0MsR0FBTCxDQUFTLE9BQVQsRUFBa0I7QUFBQ0MsUUFBQUEsRUFBRSxFQUFFLGFBQUw7QUFBb0JDLFFBQUFBLFVBQVUsRUFBRTtBQUFoQyxPQUFsQjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxPQUFkLEVBQXVCO0FBQUNDLFFBQUFBLE1BQU0sRUFBRSxDQUFDLFFBQUQ7QUFBVCxPQUF2QixFQUE2QyxZQUFZO0FBQ3ZELGFBQUtDLElBQUwsQ0FBVSxTQUFWLEVBQXFCO0FBQUNKLFVBQUFBLEVBQUUsRUFBRSxjQUFMO0FBQXFCSyxVQUFBQSxRQUFRLEVBQUUsY0FBL0I7QUFBK0NKLFVBQUFBLFVBQVUsRUFBRTtBQUEzRCxTQUFyQjtBQUNBLGFBQUtHLElBQUwsQ0FBVSxZQUFWLEVBQXdCO0FBQUNKLFVBQUFBLEVBQUUsRUFBRSxpQkFBTDtBQUF3QkssVUFBQUEsUUFBUSxFQUFFLGlCQUFsQztBQUFxREosVUFBQUEsVUFBVSxFQUFFO0FBQWpFLFNBQXhCO0FBQ0EsYUFBS0YsR0FBTCxDQUFTLFVBQVQsRUFBcUI7QUFBQ0MsVUFBQUEsRUFBRSxFQUFFLGVBQUw7QUFBc0JLLFVBQUFBLFFBQVEsRUFBRSxlQUFoQztBQUFpREosVUFBQUEsVUFBVSxFQUFFO0FBQTdELFNBQXJCO0FBQ0QsT0FKRDtBQUtEOztBQWxCb0MsR0FUZCxVQVVQSyxVQVZPLEdBVU1BLFVBVk4sVUFXVkMsTUFYVSxHQVdELEVBWEMsMkVBVXRCZixNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkgsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwySEFjdEJFLFFBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrRUFnQnRCRCxNQWhCc0IsMkpBb0J0QkEsTUFwQnNCO0FBNkIxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IHR5cGUgeyBSb3V0ZXJJbnRlcmZhY2UgfSBmcm9tICcuL2ludGVyZmFjZXMvUm91dGVySW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgU1dBR0dFUl9ST1VURVIsXG4gICAgUm91dGVyLFxuICAgIGluaXRpYWxpemUsIHBhcnRPZiwgbWV0YSwgbWV0aG9kLCBwcm9wZXJ0eSwgbmFtZUJ5LCBpbmplY3QsXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIEFwcGxpY2F0aW9uUm91dGVyIGV4dGVuZHMgUm91dGVyIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQGluamVjdChgRmFjdG9yeTwke1NXQUdHRVJfUk9VVEVSfT5gKVxuICAgIEBwcm9wZXJ0eSBfc3dhZ2dlckZhY3Rvcnk6ICgpID0+IFJvdXRlckludGVyZmFjZTtcblxuICAgIEBtZXRob2QgZXh0ZXJuYWxzKCkge1xuICAgICAgcmV0dXJuIFt0aGlzLl9zd2FnZ2VyRmFjdG9yeSgpXVxuICAgIH1cblxuICAgIEBtZXRob2QgbWFwKCkge1xuICAgICAgdGhpcy5nZXQoJy9pbmZvJywge3RvOiAnaXRzZWxmI2luZm8nLCByZWNvcmROYW1lOiBudWxsfSlcbiAgICAgIHRoaXMucmVzb3VyY2UoJ3VzZXJzJywge2V4Y2VwdDogWydkZWxldGUnXX0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wb3N0KCcvc2lnbnVwJywge3RvOiAndXNlcnMjc2lnbnVwJywgdGVtcGxhdGU6ICd1c2Vycy9zaWdudXAnLCByZWNvcmROYW1lOiBudWxsfSlcbiAgICAgICAgdGhpcy5wb3N0KCcvYXV0aG9yaXplJywge3RvOiAndXNlcnMjYXV0aG9yaXplJywgdGVtcGxhdGU6ICd1c2Vycy9hdXRob3JpemUnLCByZWNvcmROYW1lOiBudWxsfSlcbiAgICAgICAgdGhpcy5nZXQoJy9zaWdub3V0Jywge3RvOiAndXNlcnMjc2lnbm91dCcsIHRlbXBsYXRlOiAndXNlcnMvc2lnbm91dCcsIHJlY29yZE5hbWU6IG51bGx9KVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=