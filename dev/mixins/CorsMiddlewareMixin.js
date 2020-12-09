"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _cors = _interopRequireDefault(require("@koa/cors"));

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
var _default = Module => {
  const {
    initializeMixin,
    meta,
    property,
    method
  } = Module.NS;
  Module.defineMixin(__filename, BaseClass => {
    var _class, _class2, _init, _init2, _class3, _temp;

    return initializeMixin(_class = (_class2 = (_temp = _class3 = class Mixin extends BaseClass {
      async useCORS(...args) {
        const corsLambda = this.constructor.cors;

        if (corsLambda == null) {
          this.constructor.cors = (() => {
            const credentials = true;
            const allowMethods = 'GET, HEAD, PUT, POST, DELETE, OPTIONS, PATCH, COPY';
            const exposeHeaders = 'content-length, server';
            const maxAge = 1800;
            let origins = this.configs.corsOrigins;

            if (origins !== '*' && (origins != null ? origins.split : void 0)) {
              origins = origins.split(', ');
            }

            const origin = origins == null || origins === '*' ? void 0 : ctx => {
              return origins.find(_origin => {
                return _origin === ctx.get('Origin');
              });
            };
            return (0, _cors.default)({
              keepHeadersOnError: true,
              credentials,
              origin,
              maxAge,
              allowMethods,
              exposeHeaders
            });
          })();
        }

        await Promise.resolve(corsLambda(this.context, () => {
          return Promise.resolve();
        }));
        return args;
      }

    }, _class3.object = {}, _class3.cors = null, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "cors", [property], (_init2 = Object.getOwnPropertyDescriptor(_class2, "cors"), _init2 = _init2 ? _init2.value : undefined, {
      enumerable: true,
      configurable: true,
      writable: true,
      initializer: function () {
        return _init2;
      }
    }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "useCORS", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "useCORS"), _class2.prototype)), _class2)) || _class;
  });
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9Db3JzTWlkZGxld2FyZU1peGluLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsImluaXRpYWxpemVNaXhpbiIsIm1ldGEiLCJwcm9wZXJ0eSIsIm1ldGhvZCIsIk5TIiwiZGVmaW5lTWl4aW4iLCJfX2ZpbGVuYW1lIiwiQmFzZUNsYXNzIiwiTWl4aW4iLCJ1c2VDT1JTIiwiYXJncyIsImNvcnNMYW1iZGEiLCJjb25zdHJ1Y3RvciIsImNvcnMiLCJjcmVkZW50aWFscyIsImFsbG93TWV0aG9kcyIsImV4cG9zZUhlYWRlcnMiLCJtYXhBZ2UiLCJvcmlnaW5zIiwiY29uZmlncyIsImNvcnNPcmlnaW5zIiwic3BsaXQiLCJvcmlnaW4iLCJjdHgiLCJmaW5kIiwiX29yaWdpbiIsImdldCIsImtlZXBIZWFkZXJzT25FcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwiY29udGV4dCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBZUE7O0FBZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtlQUlnQkEsTUFBRCxJQUFZO0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsZUFESTtBQUNhQyxJQUFBQSxJQURiO0FBQ21CQyxJQUFBQSxRQURuQjtBQUM2QkMsSUFBQUE7QUFEN0IsTUFFRkosTUFBTSxDQUFDSyxFQUZYO0FBSUFMLEVBQUFBLE1BQU0sQ0FBQ00sV0FBUCxDQUFtQkMsVUFBbkIsRUFBZ0NDLFNBQUQsSUFBZTtBQUFBOztBQUM1QyxXQUFRUCxlQUFSLHdDQUFPLE1BQ0RRLEtBREMsU0FDYUQsU0FEYixDQUN1QjtBQUs1QixZQUFjRSxPQUFkLENBQXNCLEdBQUlDLElBQTFCLEVBQWdDO0FBQzlCLGNBQU1DLFVBQVUsR0FBRyxLQUFLQyxXQUFMLENBQWlCQyxJQUFwQzs7QUFDQSxZQUFJRixVQUFVLElBQUksSUFBbEIsRUFBd0I7QUFDdEIsZUFBS0MsV0FBTCxDQUFpQkMsSUFBakIsR0FBd0IsQ0FBQyxNQUFNO0FBQzdCLGtCQUFNQyxXQUFXLEdBQUcsSUFBcEI7QUFDQSxrQkFBTUMsWUFBWSxHQUFHLG9EQUFyQjtBQUNBLGtCQUFNQyxhQUFhLEdBQUcsd0JBQXRCO0FBQ0Esa0JBQU1DLE1BQU0sR0FBRyxJQUFmO0FBQ0EsZ0JBQUlDLE9BQU8sR0FBRyxLQUFLQyxPQUFMLENBQWFDLFdBQTNCOztBQUNBLGdCQUFJRixPQUFPLEtBQUssR0FBWixLQUFvQkEsT0FBTyxJQUFJLElBQVgsR0FBa0JBLE9BQU8sQ0FBQ0csS0FBMUIsR0FBa0MsS0FBSyxDQUEzRCxDQUFKLEVBQW1FO0FBQ2pFSCxjQUFBQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ0csS0FBUixDQUFjLElBQWQsQ0FBVjtBQUNEOztBQUNELGtCQUFNQyxNQUFNLEdBQUlKLE9BQU8sSUFBSSxJQUFaLElBQXFCQSxPQUFPLEtBQUssR0FBakMsR0FBdUMsS0FBSyxDQUE1QyxHQUFpREssR0FBRCxJQUFTO0FBQ3RFLHFCQUFPTCxPQUFPLENBQUNNLElBQVIsQ0FBY0MsT0FBRCxJQUFhO0FBQy9CLHVCQUFPQSxPQUFPLEtBQUtGLEdBQUcsQ0FBQ0csR0FBSixDQUFRLFFBQVIsQ0FBbkI7QUFDRCxlQUZNLENBQVA7QUFHRCxhQUpEO0FBS0EsbUJBQU8sbUJBQUs7QUFDVkMsY0FBQUEsa0JBQWtCLEVBQUUsSUFEVjtBQUVWYixjQUFBQSxXQUZVO0FBR1ZRLGNBQUFBLE1BSFU7QUFJVkwsY0FBQUEsTUFKVTtBQUtWRixjQUFBQSxZQUxVO0FBTVZDLGNBQUFBO0FBTlUsYUFBTCxDQUFQO0FBUUQsV0F0QnVCLEdBQXhCO0FBdUJEOztBQUNELGNBQU1ZLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmxCLFVBQVUsQ0FBQyxLQUFLbUIsT0FBTixFQUFlLE1BQU07QUFDbkQsaUJBQU9GLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0QsU0FGK0IsQ0FBMUIsQ0FBTjtBQUdBLGVBQU9uQixJQUFQO0FBQ0Q7O0FBcEMyQixLQUQ5QixVQUVlcUIsTUFGZixHQUV3QixFQUZ4QixVQUltQmxCLElBSm5CLEdBSTBCLElBSjFCLHVFQUVHWixJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBSUdDLFFBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5RkFNR0MsTUFOSDtBQXVDRCxHQXhDRDtBQXlDRCxDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuaW1wb3J0IGNvcnMgZnJvbSAnQGtvYS9jb3JzJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgaW5pdGlhbGl6ZU1peGluLCBtZXRhLCBwcm9wZXJ0eSwgbWV0aG9kLFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIE1vZHVsZS5kZWZpbmVNaXhpbihfX2ZpbGVuYW1lLCAoQmFzZUNsYXNzKSA9PiB7XG4gICAgcmV0dXJuIEBpbml0aWFsaXplTWl4aW5cbiAgICBjbGFzcyBNaXhpbiBleHRlbmRzIEJhc2VDbGFzcyB7XG4gICAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICAgIEBwcm9wZXJ0eSBzdGF0aWMgY29ycyA9IG51bGw7XG5cbiAgICAgIEBtZXRob2QgYXN5bmMgdXNlQ09SUyguLi4gYXJncykge1xuICAgICAgICBjb25zdCBjb3JzTGFtYmRhID0gdGhpcy5jb25zdHJ1Y3Rvci5jb3JzO1xuICAgICAgICBpZiAoY29yc0xhbWJkYSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5jb3JzID0gKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWV0aG9kcyA9ICdHRVQsIEhFQUQsIFBVVCwgUE9TVCwgREVMRVRFLCBPUFRJT05TLCBQQVRDSCwgQ09QWSc7XG4gICAgICAgICAgICBjb25zdCBleHBvc2VIZWFkZXJzID0gJ2NvbnRlbnQtbGVuZ3RoLCBzZXJ2ZXInO1xuICAgICAgICAgICAgY29uc3QgbWF4QWdlID0gMTgwMDtcbiAgICAgICAgICAgIGxldCBvcmlnaW5zID0gdGhpcy5jb25maWdzLmNvcnNPcmlnaW5zO1xuICAgICAgICAgICAgaWYgKG9yaWdpbnMgIT09ICcqJyAmJiAob3JpZ2lucyAhPSBudWxsID8gb3JpZ2lucy5zcGxpdCA6IHZvaWQgMCkpIHtcbiAgICAgICAgICAgICAgb3JpZ2lucyA9IG9yaWdpbnMuc3BsaXQoJywgJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSAob3JpZ2lucyA9PSBudWxsKSB8fCBvcmlnaW5zID09PSAnKicgPyB2b2lkIDAgOiAoY3R4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBvcmlnaW5zLmZpbmQoKF9vcmlnaW4pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX29yaWdpbiA9PT0gY3R4LmdldCgnT3JpZ2luJyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjb3JzKHtcbiAgICAgICAgICAgICAga2VlcEhlYWRlcnNPbkVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICBjcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgb3JpZ2luLFxuICAgICAgICAgICAgICBtYXhBZ2UsXG4gICAgICAgICAgICAgIGFsbG93TWV0aG9kcyxcbiAgICAgICAgICAgICAgZXhwb3NlSGVhZGVyc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLnJlc29sdmUoY29yc0xhbWJkYSh0aGlzLmNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==