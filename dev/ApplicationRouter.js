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
      this.options('/*', {
        to: 'itself#cors',
        recordName: null
      });
      this.namespace('version', {
        module: '',
        prefix: ':v'
      }, function () {
        this.resource('users', {
          except: 'delete'
        }, function () {
          this.post('/signup', {
            to: 'users#signup',
            at: 'collection',
            template: 'users/signup',
            recordName: null
          });
          this.post('/authorize', {
            to: 'users#authorize',
            at: 'collection',
            template: 'users/authorize',
            recordName: null
          });
          this.get('/signout', {
            to: 'users#signout',
            at: 'collection',
            template: 'users/signout',
            recordName: null
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcGxpY2F0aW9uUm91dGVyLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNXQUdHRVJfUk9VVEVSIiwiUm91dGVyIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm5hbWVCeSIsImluamVjdCIsIk5TIiwiQXBwbGljYXRpb25Sb3V0ZXIiLCJleHRlcm5hbHMiLCJfc3dhZ2dlckZhY3RvcnkiLCJtYXAiLCJnZXQiLCJ0byIsInJlY29yZE5hbWUiLCJvcHRpb25zIiwibmFtZXNwYWNlIiwibW9kdWxlIiwicHJlZml4IiwicmVzb3VyY2UiLCJleGNlcHQiLCJwb3N0IiwiYXQiLCJ0ZW1wbGF0ZSIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFlQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztlQUlnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsY0FESTtBQUVKQyxJQUFBQSxNQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQSxRQUg5QjtBQUd3Q0MsSUFBQUEsTUFIeEM7QUFHZ0RDLElBQUFBO0FBSGhELE1BSUZULE1BQU0sQ0FBQ1UsRUFKWDtBQUR5QixNQVNuQkMsaUJBVG1CLHlDQU96Qiw2RUFFZ0NULE1BRmhDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FLGlEQUN5QiwwREFBUSx5Q0FBUixFQUR6QixDQU5GLEVBU0Usd0NBVEYsRUFhRSxrQ0FiRixDQVB5QixXQVF4QkUsTUFBTSxDQUFDSixNQUFELENBUmtCLHdDQWNFLDBEQUFRLHlDQUFSLEVBZEYsV0FhdEJTLE1BQU0sQ0FBRSxXQUFVUixjQUFlLEdBQTNCLENBYmdCLGdCQU94QkUsVUFQd0IsdURBT3pCLE1BRU1RLGlCQUZOLFNBRWdDVCxNQUZoQyxDQUV1QztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU83QlUsSUFBQUEsU0FBUixHQUFvQjtBQUNsQixhQUFPLENBQUMsS0FBS0MsZUFBTCxFQUFELENBQVA7QUFDRDs7QUFFT0MsSUFBQUEsR0FBUixHQUFjO0FBQ1osV0FBS0MsR0FBTCxDQUFTLE9BQVQsRUFBa0I7QUFBQ0MsUUFBQUEsRUFBRSxFQUFFLGFBQUw7QUFBb0JDLFFBQUFBLFVBQVUsRUFBRTtBQUFoQyxPQUFsQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYSxJQUFiLEVBQW1CO0FBQUNGLFFBQUFBLEVBQUUsRUFBRSxhQUFMO0FBQW9CQyxRQUFBQSxVQUFVLEVBQUU7QUFBaEMsT0FBbkI7QUFDQSxXQUFLRSxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUFDQyxRQUFBQSxNQUFNLEVBQUUsRUFBVDtBQUFhQyxRQUFBQSxNQUFNLEVBQUU7QUFBckIsT0FBMUIsRUFBc0QsWUFBWTtBQUNoRSxhQUFLQyxRQUFMLENBQWMsT0FBZCxFQUF1QjtBQUFDQyxVQUFBQSxNQUFNLEVBQUU7QUFBVCxTQUF2QixFQUEyQyxZQUFZO0FBQ3JELGVBQUtDLElBQUwsQ0FBVSxTQUFWLEVBQXFCO0FBQUNSLFlBQUFBLEVBQUUsRUFBRSxjQUFMO0FBQXFCUyxZQUFBQSxFQUFFLEVBQUUsWUFBekI7QUFBdUNDLFlBQUFBLFFBQVEsRUFBRSxjQUFqRDtBQUFpRVQsWUFBQUEsVUFBVSxFQUFFO0FBQTdFLFdBQXJCO0FBQ0EsZUFBS08sSUFBTCxDQUFVLFlBQVYsRUFBd0I7QUFBQ1IsWUFBQUEsRUFBRSxFQUFFLGlCQUFMO0FBQXdCUyxZQUFBQSxFQUFFLEVBQUUsWUFBNUI7QUFBMENDLFlBQUFBLFFBQVEsRUFBRSxpQkFBcEQ7QUFBdUVULFlBQUFBLFVBQVUsRUFBRTtBQUFuRixXQUF4QjtBQUNBLGVBQUtGLEdBQUwsQ0FBUyxVQUFULEVBQXFCO0FBQUNDLFlBQUFBLEVBQUUsRUFBRSxlQUFMO0FBQXNCUyxZQUFBQSxFQUFFLEVBQUUsWUFBMUI7QUFBd0NDLFlBQUFBLFFBQVEsRUFBRSxlQUFsRDtBQUFtRVQsWUFBQUEsVUFBVSxFQUFFO0FBQS9FLFdBQXJCO0FBQ0QsU0FKRDtBQUtELE9BTkQ7QUFPRDs7QUFyQm9DLEdBVGQsVUFVUFUsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QnBCLE1BVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBV3RCSCxJQVhzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJIQWN0QkUsUUFkc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtFQWdCdEJELE1BaEJzQiwySkFvQnRCQSxNQXBCc0I7QUFnQzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgdHlwZSB7IFJvdXRlckludGVyZmFjZSB9IGZyb20gJy4vaW50ZXJmYWNlcy9Sb3V0ZXJJbnRlcmZhY2UnO1xuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTV0FHR0VSX1JPVVRFUixcbiAgICBSb3V0ZXIsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIHByb3BlcnR5LCBuYW1lQnksIGluamVjdCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgQXBwbGljYXRpb25Sb3V0ZXIgZXh0ZW5kcyBSb3V0ZXIge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAaW5qZWN0KGBGYWN0b3J5PCR7U1dBR0dFUl9ST1VURVJ9PmApXG4gICAgQHByb3BlcnR5IF9zd2FnZ2VyRmFjdG9yeTogKCkgPT4gUm91dGVySW50ZXJmYWNlO1xuXG4gICAgQG1ldGhvZCBleHRlcm5hbHMoKSB7XG4gICAgICByZXR1cm4gW3RoaXMuX3N3YWdnZXJGYWN0b3J5KCldXG4gICAgfVxuXG4gICAgQG1ldGhvZCBtYXAoKSB7XG4gICAgICB0aGlzLmdldCgnL2luZm8nLCB7dG86ICdpdHNlbGYjaW5mbycsIHJlY29yZE5hbWU6IG51bGx9KVxuICAgICAgdGhpcy5vcHRpb25zKCcvKicsIHt0bzogJ2l0c2VsZiNjb3JzJywgcmVjb3JkTmFtZTogbnVsbH0pXG4gICAgICB0aGlzLm5hbWVzcGFjZSgndmVyc2lvbicsIHttb2R1bGU6ICcnLCBwcmVmaXg6ICc6did9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2UoJ3VzZXJzJywge2V4Y2VwdDogJ2RlbGV0ZSd9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wb3N0KCcvc2lnbnVwJywge3RvOiAndXNlcnMjc2lnbnVwJywgYXQ6ICdjb2xsZWN0aW9uJywgdGVtcGxhdGU6ICd1c2Vycy9zaWdudXAnLCByZWNvcmROYW1lOiBudWxsfSlcbiAgICAgICAgICB0aGlzLnBvc3QoJy9hdXRob3JpemUnLCB7dG86ICd1c2VycyNhdXRob3JpemUnLCBhdDogJ2NvbGxlY3Rpb24nLCB0ZW1wbGF0ZTogJ3VzZXJzL2F1dGhvcml6ZScsIHJlY29yZE5hbWU6IG51bGx9KVxuICAgICAgICAgIHRoaXMuZ2V0KCcvc2lnbm91dCcsIHt0bzogJ3VzZXJzI3NpZ25vdXQnLCBhdDogJ2NvbGxlY3Rpb24nLCB0ZW1wbGF0ZTogJ3VzZXJzL3NpZ25vdXQnLCByZWNvcmROYW1lOiBudWxsfSlcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==