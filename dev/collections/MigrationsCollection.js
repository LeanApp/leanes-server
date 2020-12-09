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
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Collection,
    MongoCollectionMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let MigrationsCollection = (_dec = partOf(Module), _dec2 = mixin(MongoCollectionMixin), initialize(_class = _dec(_class = _dec2(_class = (_class2 = (_temp = _class3 = class MigrationsCollection extends Collection {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL01pZ3JhdGlvbnNDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIkNvbGxlY3Rpb24iLCJNb25nb0NvbGxlY3Rpb25NaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJOUyIsIk1pZ3JhdGlvbnNDb2xsZWN0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxVQURJO0FBRUpDLElBQUFBLG9CQUZJO0FBR0pDLElBQUFBLFVBSEk7QUFHUUMsSUFBQUEsTUFIUjtBQUdnQkMsSUFBQUEsSUFIaEI7QUFHc0JDLElBQUFBLE1BSHRCO0FBRzhCQyxJQUFBQTtBQUg5QixNQUlGUCxNQUFNLENBQUNRLEVBSlg7QUFEeUIsTUFVbkJDLG9CQVZtQixXQVF4QkwsTUFBTSxDQUFDSixNQUFELENBUmtCLFVBU3hCTyxLQUFLLENBQUNMLG9CQUFELENBVG1CLEVBT3hCQyxVQVB3QixxRUFPekIsTUFHTU0sb0JBSE4sU0FHbUNSLFVBSG5DLENBRzhDLEVBVnJCLFVBV1BTLFVBWE8sR0FXTUEsVUFYTixVQVlWQyxNQVpVLEdBWUQsRUFaQywyRUFXdEJMLE1BWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBWXRCRCxJQVpzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQ29sbGVjdGlvbixcbiAgICBNb25nb0NvbGxlY3Rpb25NaXhpbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG1ldGEsIG5hbWVCeSwgbWl4aW5cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgQG1peGluKE1vbmdvQ29sbGVjdGlvbk1peGluKVxuICBjbGFzcyBNaWdyYXRpb25zQ29sbGVjdGlvbiBleHRlbmRzIENvbGxlY3Rpb24ge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG4gIH1cbn1cbiJdfQ==