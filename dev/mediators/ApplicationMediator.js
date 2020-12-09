"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
  var _dec, _dec2, _dec3, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Mediator,
    ApplicationMediatorMixin,
    MigratifyApplicationMediatorMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    method,
    property,
    mixin
  } = Module.NS;
  let ApplicationMediator = (_dec = partOf(Module), _dec2 = mixin(MigratifyApplicationMediatorMixin), _dec3 = mixin(ApplicationMediatorMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = (_class2 = (_temp = _class3 = class ApplicationMediator extends Mediator {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhdG9ycy9BcHBsaWNhdGlvbk1lZGlhdG9yLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIk1lZGlhdG9yIiwiQXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiTWlncmF0aWZ5QXBwbGljYXRpb25NZWRpYXRvck1peGluIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJuYW1lQnkiLCJtZXRob2QiLCJwcm9wZXJ0eSIsIm1peGluIiwiTlMiLCJBcHBsaWNhdGlvbk1lZGlhdG9yIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxRQURJO0FBRUpDLElBQUFBLHdCQUZJO0FBR0pDLElBQUFBLGlDQUhJO0FBSUpDLElBQUFBLFVBSkk7QUFJUUMsSUFBQUEsTUFKUjtBQUlnQkMsSUFBQUEsSUFKaEI7QUFJc0JDLElBQUFBLE1BSnRCO0FBSThCQyxJQUFBQSxNQUo5QjtBQUlzQ0MsSUFBQUEsUUFKdEM7QUFJZ0RDLElBQUFBO0FBSmhELE1BS0ZWLE1BQU0sQ0FBQ1csRUFMWDtBQUR5QixNQVluQkMsbUJBWm1CLFdBU3hCUCxNQUFNLENBQUNMLE1BQUQsQ0FUa0IsVUFVeEJVLEtBQUssQ0FBQ1AsaUNBQUQsQ0FWbUIsVUFXeEJPLEtBQUssQ0FBQ1Isd0JBQUQsQ0FYbUIsRUFReEJFLFVBUndCLG9GQVF6QixNQUlNUSxtQkFKTixTQUlrQ1gsUUFKbEMsQ0FJMkMsRUFabEIsVUFhUFksVUFiTyxHQWFNQSxVQWJOLFVBY1ZDLE1BZFUsR0FjRCxFQWRDLDJFQWF0QlAsTUFic0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFjdEJELElBZHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgTWVkaWF0b3IsXG4gICAgQXBwbGljYXRpb25NZWRpYXRvck1peGluLFxuICAgIE1pZ3JhdGlmeUFwcGxpY2F0aW9uTWVkaWF0b3JNaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWV0aG9kLCBwcm9wZXJ0eSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1pZ3JhdGlmeUFwcGxpY2F0aW9uTWVkaWF0b3JNaXhpbilcbiAgQG1peGluKEFwcGxpY2F0aW9uTWVkaWF0b3JNaXhpbilcbiAgY2xhc3MgQXBwbGljYXRpb25NZWRpYXRvciBleHRlbmRzIE1lZGlhdG9yIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICB9XG59XG4iXX0=