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