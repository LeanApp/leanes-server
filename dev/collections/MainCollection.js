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
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Collection,
    MongoCollectionMixin,
    QueryableMongoCollectionMixin,
    QueryableCollectionMixin,
    GenerateUuidIdMixin,
    initialize,
    partOf,
    meta,
    nameBy,
    mixin
  } = Module.NS;
  let MainCollection = (_dec = partOf(Module), _dec2 = mixin(QueryableMongoCollectionMixin), _dec3 = mixin(MongoCollectionMixin), _dec4 = mixin(QueryableCollectionMixin), _dec5 = mixin(GenerateUuidIdMixin), initialize(_class = _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_temp = _class3 = class MainCollection extends Collection {}, _class3.__filename = __filename, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "__filename", [nameBy], (_init = Object.getOwnPropertyDescriptor(_class2, "__filename"), _init = _init ? _init.value : undefined, {
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
  }), _class2)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb25zL01haW5Db2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIkNvbGxlY3Rpb24iLCJNb25nb0NvbGxlY3Rpb25NaXhpbiIsIlF1ZXJ5YWJsZU1vbmdvQ29sbGVjdGlvbk1peGluIiwiUXVlcnlhYmxlQ29sbGVjdGlvbk1peGluIiwiR2VuZXJhdGVVdWlkSWRNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJtZXRhIiwibmFtZUJ5IiwibWl4aW4iLCJOUyIsIk1haW5Db2xsZWN0aW9uIiwiX19maWxlbmFtZSIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRWdCQSxNQUFELElBQVk7QUFBQTs7QUFDekIsUUFBTTtBQUNKQyxJQUFBQSxVQURJO0FBRUpDLElBQUFBLG9CQUZJO0FBR0pDLElBQUFBLDZCQUhJO0FBSUpDLElBQUFBLHdCQUpJO0FBS0pDLElBQUFBLG1CQUxJO0FBTUpDLElBQUFBLFVBTkk7QUFNUUMsSUFBQUEsTUFOUjtBQU1nQkMsSUFBQUEsSUFOaEI7QUFNc0JDLElBQUFBLE1BTnRCO0FBTThCQyxJQUFBQTtBQU45QixNQU9GVixNQUFNLENBQUNXLEVBUFg7QUFEeUIsTUFnQm5CQyxjQWhCbUIsV0FXeEJMLE1BQU0sQ0FBQ1AsTUFBRCxDQVhrQixVQVl4QlUsS0FBSyxDQUFDUCw2QkFBRCxDQVptQixVQWF4Qk8sS0FBSyxDQUFDUixvQkFBRCxDQWJtQixVQWN4QlEsS0FBSyxDQUFDTix3QkFBRCxDQWRtQixVQWV4Qk0sS0FBSyxDQUFDTCxtQkFBRCxDQWZtQixFQVV4QkMsVUFWd0Isa0hBVXpCLE1BTU1NLGNBTk4sU0FNNkJYLFVBTjdCLENBTXdDLEVBaEJmLFVBaUJQWSxVQWpCTyxHQWlCTUEsVUFqQk4sVUFrQlZDLE1BbEJVLEdBa0JELEVBbEJDLDJFQWlCdEJMLE1BakJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQWtCdEJELElBbEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0IxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4vLyBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4vLyBmaWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cHM6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbi8vXG4vLyBTb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgYmFzaXMsXG4vLyBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yXG4vLyB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHJpZ2h0cyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIENvbGxlY3Rpb24sXG4gICAgTW9uZ29Db2xsZWN0aW9uTWl4aW4sXG4gICAgUXVlcnlhYmxlTW9uZ29Db2xsZWN0aW9uTWl4aW4sXG4gICAgUXVlcnlhYmxlQ29sbGVjdGlvbk1peGluLFxuICAgIEdlbmVyYXRlVXVpZElkTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBuYW1lQnksIG1peGluXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIEBtaXhpbihRdWVyeWFibGVNb25nb0NvbGxlY3Rpb25NaXhpbilcbiAgQG1peGluKE1vbmdvQ29sbGVjdGlvbk1peGluKVxuICBAbWl4aW4oUXVlcnlhYmxlQ29sbGVjdGlvbk1peGluKVxuICBAbWl4aW4oR2VuZXJhdGVVdWlkSWRNaXhpbilcbiAgY2xhc3MgTWFpbkNvbGxlY3Rpb24gZXh0ZW5kcyBDb2xsZWN0aW9uIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICB9XG59XG4iXX0=