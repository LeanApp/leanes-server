"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

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
const infoResult = _flowRuntime.default.type("infoResult", _flowRuntime.default.object(_flowRuntime.default.property("name", _flowRuntime.default.string()), _flowRuntime.default.property("description", _flowRuntime.default.string()), _flowRuntime.default.property("license", _flowRuntime.default.string()), _flowRuntime.default.property("version", _flowRuntime.default.string()), _flowRuntime.default.property("keywords", _flowRuntime.default.array(_flowRuntime.default.string()))));

var _default = Module => {
  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _init, _init2, _class3, _temp;

  const {
    Resource,
    CorsMiddlewareMixin,
    ConfigurableMixin,
    initialize,
    partOf,
    nameBy,
    meta,
    action,
    chains,
    mixin
  } = Module.NS;
  let ItselfResource = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("ItselfResource", _flowRuntime.default.extends(Resource), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("cors", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))), _flowRuntime.default.method("info", _flowRuntime.default.return(_flowRuntime.default.ref("Promise", infoResult))))), _dec2 = chains(['info', 'cors'], function () {
    this.initialHook('useCORS', {
      only: ['cors']
    });
  }), _dec3 = partOf(Module), _dec4 = mixin(CorsMiddlewareMixin), _dec5 = mixin(ConfigurableMixin), _dec(_class = initialize(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = (_class2 = (_temp = _class3 = class ItselfResource extends Resource {
    async cors() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.void(), _flowRuntime.default.ref("Promise", _flowRuntime.default.void())));
    }

    async info() {
      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.union(infoResult, _flowRuntime.default.ref("Promise", infoResult)));

      const {
        name,
        description,
        license,
        version,
        keywords
      } = this.configs;
      return _returnType2.assert({
        name,
        description,
        license,
        version,
        keywords
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "cors", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "cors"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "info", [action], Object.getOwnPropertyDescriptor(_class2.prototype, "info"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9JdHNlbGZSZXNvdXJjZS5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJSZXNvdXJjZSIsIkNvcnNNaWRkbGV3YXJlTWl4aW4iLCJDb25maWd1cmFibGVNaXhpbiIsImluaXRpYWxpemUiLCJwYXJ0T2YiLCJuYW1lQnkiLCJtZXRhIiwiYWN0aW9uIiwiY2hhaW5zIiwibWl4aW4iLCJOUyIsIkl0c2VsZlJlc291cmNlIiwiaW5pdGlhbEhvb2siLCJvbmx5IiwiY29ycyIsImluZm8iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsaWNlbnNlIiwidmVyc2lvbiIsImtleXdvcmRzIiwiY29uZmlncyIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsMkRBQWtCLDRCQUNoQixzQ0FBTSw2QkFBTixDQURnQixFQUVoQiw2Q0FBYSw2QkFBYixDQUZnQixFQUdoQix5Q0FBUyw2QkFBVCxDQUhnQixFQUloQix5Q0FBUyw2QkFBVCxDQUpnQixFQUtoQiwwQ0FBVSx5REFBVixDQUxnQixDQUFsQjs7ZUFRZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLFFBREk7QUFFSkMsSUFBQUEsbUJBRkk7QUFFaUJDLElBQUFBLGlCQUZqQjtBQUdKQyxJQUFBQSxVQUhJO0FBR1FDLElBQUFBLE1BSFI7QUFHZ0JDLElBQUFBLE1BSGhCO0FBR3dCQyxJQUFBQSxJQUh4QjtBQUc4QkMsSUFBQUEsTUFIOUI7QUFHc0NDLElBQUFBLE1BSHRDO0FBRzhDQyxJQUFBQTtBQUg5QyxNQUlGVixNQUFNLENBQUNXLEVBSlg7QUFEeUIsTUFrQm5CQyxjQWxCbUIseUNBT3pCLDBFQVc2QlgsUUFYN0IsR0FZRSw2RUFaRixFQWFFLHlFQWJGLEVBZUUsZ0VBQW9CLG9DQUFVLDJCQUFWLENBQXBCLEVBZkYsRUFpQkUsZ0VBQW9CLG9DQUFVLFVBQVYsQ0FBcEIsRUFqQkYsQ0FQeUIsV0FReEJRLE1BQU0sQ0FBQyxDQUNOLE1BRE0sRUFDRSxNQURGLENBQUQsRUFFSixZQUFZO0FBQ2IsU0FBS0ksV0FBTCxDQUFpQixTQUFqQixFQUE0QjtBQUMxQkMsTUFBQUEsSUFBSSxFQUFFLENBQUMsTUFBRDtBQURvQixLQUE1QjtBQUdELEdBTk0sQ0FSa0IsVUFleEJULE1BQU0sQ0FBQ0wsTUFBRCxDQWZrQixVQWdCeEJVLEtBQUssQ0FBQ1IsbUJBQUQsQ0FoQm1CLFVBaUJ4QlEsS0FBSyxDQUFDUCxpQkFBRCxDQWpCbUIsZ0JBT3hCQyxVQVB3QixvR0FPekIsTUFXTVEsY0FYTixTQVc2QlgsUUFYN0IsQ0FXc0M7QUFJcEMsVUFBY2MsSUFBZCxHQUFtQztBQUFBLGlGQUFMLDJCQUFLLEVBQWIsb0NBQVEsMkJBQVIsQ0FBYTtBQUFFOztBQUVyQyxVQUFjQyxJQUFkLEdBQTBDO0FBQUEsa0ZBQVosVUFBWSxFQUFwQixvQ0FBUSxVQUFSLENBQW9COztBQUN4QyxZQUFNO0FBQ0pDLFFBQUFBLElBREk7QUFFSkMsUUFBQUEsV0FGSTtBQUdKQyxRQUFBQSxPQUhJO0FBSUpDLFFBQUFBLE9BSkk7QUFLSkMsUUFBQUE7QUFMSSxVQU1GLEtBQUtDLE9BTlQ7QUFPQSxpQ0FBTztBQUNMTCxRQUFBQSxJQURLO0FBRUxDLFFBQUFBLFdBRks7QUFHTEMsUUFBQUEsT0FISztBQUlMQyxRQUFBQSxPQUpLO0FBS0xDLFFBQUFBO0FBTEssT0FBUDtBQU9EOztBQXJCbUMsR0FsQmIsVUFtQlJFLFVBbkJRLEdBbUJLQSxVQW5CTCxVQW9CVkMsTUFwQlUsR0FvQkQsRUFwQkMsMkVBbUJ0QmxCLE1BbkJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQW9CdEJDLElBcEJzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9GQXNCdEJDLE1BdEJzQix1SkF3QnRCQSxNQXhCc0I7QUF5QzFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxudHlwZSBpbmZvUmVzdWx0ID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gIGxpY2Vuc2U6IHN0cmluZyxcbiAgdmVyc2lvbjogc3RyaW5nLFxuICBrZXl3b3Jkczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgUmVzb3VyY2UsXG4gICAgQ29yc01pZGRsZXdhcmVNaXhpbiwgQ29uZmlndXJhYmxlTWl4aW4sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIGFjdGlvbiwgY2hhaW5zLCBtaXhpbixcbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAY2hhaW5zKFtcbiAgICAnaW5mbycsICdjb3JzJ1xuICBdLCBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbml0aWFsSG9vaygndXNlQ09SUycsIHtcbiAgICAgIG9ubHk6IFsnY29ycyddXG4gICAgfSk7XG4gIH0pXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBAbWl4aW4oQ29yc01pZGRsZXdhcmVNaXhpbilcbiAgQG1peGluKENvbmZpZ3VyYWJsZU1peGluKVxuICBjbGFzcyBJdHNlbGZSZXNvdXJjZSBleHRlbmRzIFJlc291cmNlIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAYWN0aW9uIGFzeW5jIGNvcnMoKTogUHJvbWlzZTx2b2lkPnt9XG5cbiAgICBAYWN0aW9uIGFzeW5jIGluZm8oKTogUHJvbWlzZTxpbmZvUmVzdWx0PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBsaWNlbnNlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBrZXl3b3JkcyxcbiAgICAgIH0gPSB0aGlzLmNvbmZpZ3NcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBsaWNlbnNlLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBrZXl3b3JkcyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==