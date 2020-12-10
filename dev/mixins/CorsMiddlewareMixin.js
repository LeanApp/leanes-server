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
const {
  ORIGINS
} = process.env;

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
            const origins = ORIGINS !== '*' && (ORIGINS != null ? ORIGINS.split : void 0) ? ORIGINS.split(', ') : ORIGINS;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1peGlucy9Db3JzTWlkZGxld2FyZU1peGluLmpzIl0sIm5hbWVzIjpbIk9SSUdJTlMiLCJwcm9jZXNzIiwiZW52IiwiTW9kdWxlIiwiaW5pdGlhbGl6ZU1peGluIiwibWV0YSIsInByb3BlcnR5IiwibWV0aG9kIiwiTlMiLCJkZWZpbmVNaXhpbiIsIl9fZmlsZW5hbWUiLCJCYXNlQ2xhc3MiLCJNaXhpbiIsInVzZUNPUlMiLCJhcmdzIiwiY29yc0xhbWJkYSIsImNvbnN0cnVjdG9yIiwiY29ycyIsImNyZWRlbnRpYWxzIiwiYWxsb3dNZXRob2RzIiwiZXhwb3NlSGVhZGVycyIsIm1heEFnZSIsIm9yaWdpbnMiLCJzcGxpdCIsIm9yaWdpbiIsImN0eCIsImZpbmQiLCJfb3JpZ2luIiwiZ2V0Iiwia2VlcEhlYWRlcnNPbkVycm9yIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjb250ZXh0Iiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFlQTs7QUFmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsTUFBTTtBQUNKQSxFQUFBQTtBQURJLElBRUZDLE9BQU8sQ0FBQ0MsR0FGWjs7ZUFJZ0JDLE1BQUQsSUFBWTtBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFDYUMsSUFBQUEsSUFEYjtBQUNtQkMsSUFBQUEsUUFEbkI7QUFDNkJDLElBQUFBO0FBRDdCLE1BRUZKLE1BQU0sQ0FBQ0ssRUFGWDtBQUlBTCxFQUFBQSxNQUFNLENBQUNNLFdBQVAsQ0FBbUJDLFVBQW5CLEVBQWdDQyxTQUFELElBQWU7QUFBQTs7QUFDNUMsV0FBUVAsZUFBUix3Q0FBTyxNQUNEUSxLQURDLFNBQ2FELFNBRGIsQ0FDdUI7QUFLNUIsWUFBY0UsT0FBZCxDQUFzQixHQUFJQyxJQUExQixFQUFnQztBQUM5QixjQUFNQyxVQUFVLEdBQUcsS0FBS0MsV0FBTCxDQUFpQkMsSUFBcEM7O0FBQ0EsWUFBSUYsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3RCLGVBQUtDLFdBQUwsQ0FBaUJDLElBQWpCLEdBQXdCLENBQUMsTUFBTTtBQUM3QixrQkFBTUMsV0FBVyxHQUFHLElBQXBCO0FBQ0Esa0JBQU1DLFlBQVksR0FBRyxvREFBckI7QUFDQSxrQkFBTUMsYUFBYSxHQUFHLHdCQUF0QjtBQUNBLGtCQUFNQyxNQUFNLEdBQUcsSUFBZjtBQUNBLGtCQUFNQyxPQUFPLEdBQUd0QixPQUFPLEtBQUssR0FBWixLQUFvQkEsT0FBTyxJQUFJLElBQVgsR0FBa0JBLE9BQU8sQ0FBQ3VCLEtBQTFCLEdBQWtDLEtBQUssQ0FBM0QsSUFDWnZCLE9BQU8sQ0FBQ3VCLEtBQVIsQ0FBYyxJQUFkLENBRFksR0FFWnZCLE9BRko7QUFHQSxrQkFBTXdCLE1BQU0sR0FBSUYsT0FBTyxJQUFJLElBQVosSUFBcUJBLE9BQU8sS0FBSyxHQUFqQyxHQUF1QyxLQUFLLENBQTVDLEdBQWlERyxHQUFELElBQVM7QUFDdEUscUJBQU9ILE9BQU8sQ0FBQ0ksSUFBUixDQUFjQyxPQUFELElBQWE7QUFDL0IsdUJBQU9BLE9BQU8sS0FBS0YsR0FBRyxDQUFDRyxHQUFKLENBQVEsUUFBUixDQUFuQjtBQUNELGVBRk0sQ0FBUDtBQUdELGFBSkQ7QUFLQSxtQkFBTyxtQkFBSztBQUNWQyxjQUFBQSxrQkFBa0IsRUFBRSxJQURWO0FBRVZYLGNBQUFBLFdBRlU7QUFHVk0sY0FBQUEsTUFIVTtBQUlWSCxjQUFBQSxNQUpVO0FBS1ZGLGNBQUFBLFlBTFU7QUFNVkMsY0FBQUE7QUFOVSxhQUFMLENBQVA7QUFRRCxXQXJCdUIsR0FBeEI7QUFzQkQ7O0FBQ0QsY0FBTVUsT0FBTyxDQUFDQyxPQUFSLENBQWdCaEIsVUFBVSxDQUFDLEtBQUtpQixPQUFOLEVBQWUsTUFBTTtBQUNuRCxpQkFBT0YsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDRCxTQUYrQixDQUExQixDQUFOO0FBR0EsZUFBT2pCLElBQVA7QUFDRDs7QUFuQzJCLEtBRDlCLFVBRWVtQixNQUZmLEdBRXdCLEVBRnhCLFVBSW1CaEIsSUFKbkIsR0FJMEIsSUFKMUIsdUVBRUdaLElBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFJR0MsUUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlGQU1HQyxNQU5IO0FBc0NELEdBdkNEO0FBd0NELEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIGxlYW5lcy1zZXJ2ZXIuICBJZiBub3QsIHNlZSA8aHR0cHM6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuXG5pbXBvcnQgY29ycyBmcm9tICdAa29hL2NvcnMnO1xuXG5jb25zdCB7XG4gIE9SSUdJTlMsXG59ID0gcHJvY2Vzcy5lbnY7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIGluaXRpYWxpemVNaXhpbiwgbWV0YSwgcHJvcGVydHksIG1ldGhvZCxcbiAgfSA9IE1vZHVsZS5OUztcblxuICBNb2R1bGUuZGVmaW5lTWl4aW4oX19maWxlbmFtZSwgKEJhc2VDbGFzcykgPT4ge1xuICAgIHJldHVybiBAaW5pdGlhbGl6ZU1peGluXG4gICAgY2xhc3MgTWl4aW4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICAgICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgICBAcHJvcGVydHkgc3RhdGljIGNvcnMgPSBudWxsO1xuXG4gICAgICBAbWV0aG9kIGFzeW5jIHVzZUNPUlMoLi4uIGFyZ3MpIHtcbiAgICAgICAgY29uc3QgY29yc0xhbWJkYSA9IHRoaXMuY29uc3RydWN0b3IuY29ycztcbiAgICAgICAgaWYgKGNvcnNMYW1iZGEgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3IuY29ycyA9ICgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBhbGxvd01ldGhvZHMgPSAnR0VULCBIRUFELCBQVVQsIFBPU1QsIERFTEVURSwgT1BUSU9OUywgUEFUQ0gsIENPUFknO1xuICAgICAgICAgICAgY29uc3QgZXhwb3NlSGVhZGVycyA9ICdjb250ZW50LWxlbmd0aCwgc2VydmVyJztcbiAgICAgICAgICAgIGNvbnN0IG1heEFnZSA9IDE4MDA7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5zID0gT1JJR0lOUyAhPT0gJyonICYmIChPUklHSU5TICE9IG51bGwgPyBPUklHSU5TLnNwbGl0IDogdm9pZCAwKVxuICAgICAgICAgICAgICA/IE9SSUdJTlMuc3BsaXQoJywgJylcbiAgICAgICAgICAgICAgOiBPUklHSU5TO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gKG9yaWdpbnMgPT0gbnVsbCkgfHwgb3JpZ2lucyA9PT0gJyonID8gdm9pZCAwIDogKGN0eCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gb3JpZ2lucy5maW5kKChfb3JpZ2luKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9vcmlnaW4gPT09IGN0eC5nZXQoJ09yaWdpbicpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gY29ycyh7XG4gICAgICAgICAgICAgIGtlZXBIZWFkZXJzT25FcnJvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgY3JlZGVudGlhbHMsXG4gICAgICAgICAgICAgIG9yaWdpbixcbiAgICAgICAgICAgICAgbWF4QWdlLFxuICAgICAgICAgICAgICBhbGxvd01ldGhvZHMsXG4gICAgICAgICAgICAgIGV4cG9zZUhlYWRlcnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGNvcnNMYW1iZGEodGhpcy5jb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG4iXX0=