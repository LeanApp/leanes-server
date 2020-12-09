"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

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
const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    STARTUP,
    STARTUP_COMPLETE,
    Command,
    PrepareControllerCommand,
    PrepareModelCommand,
    PrepareViewCommand,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let StartupCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("StartupCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("initializeSubCommands", _flowRuntime.default.return(_flowRuntime.default.void())), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class StartupCommand extends Command {
    initializeSubCommands() {
      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      this.addSubCommand(PrepareControllerCommand);
      this.addSubCommand(PrepareModelCommand);
      this.addSubCommand(PrepareViewCommand);
    }

    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType2 = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      super.execute(note);
      this.facade.removeCommand(STARTUP);
      this.send(STARTUP_COMPLETE);
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "initializeSubCommands", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "initializeSubCommands"), _class2.prototype), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1N0YXJ0dXBDb21tYW5kLmpzIl0sIm5hbWVzIjpbIk1vZHVsZSIsIlNUQVJUVVAiLCJTVEFSVFVQX0NPTVBMRVRFIiwiQ29tbWFuZCIsIlByZXBhcmVDb250cm9sbGVyQ29tbWFuZCIsIlByZXBhcmVNb2RlbENvbW1hbmQiLCJQcmVwYXJlVmlld0NvbW1hbmQiLCJpbml0aWFsaXplIiwicGFydE9mIiwibWV0YSIsIm1ldGhvZCIsIm5hbWVCeSIsIk5TIiwiU3RhcnR1cENvbW1hbmQiLCJpbml0aWFsaXplU3ViQ29tbWFuZHMiLCJhZGRTdWJDb21tYW5kIiwiZXhlY3V0ZSIsIm5vdGUiLCJmYWNhZGUiLCJyZW1vdmVDb21tYW5kIiwic2VuZCIsIl9fZmlsZW5hbWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVVBOzs7O0FBVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7ZUFJZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLE9BREk7QUFDS0MsSUFBQUEsZ0JBREw7QUFFSkMsSUFBQUEsT0FGSTtBQUdKQyxJQUFBQSx3QkFISTtBQUlKQyxJQUFBQSxtQkFKSTtBQUtKQyxJQUFBQSxrQkFMSTtBQU1KQyxJQUFBQSxVQU5JO0FBTVFDLElBQUFBLE1BTlI7QUFNZ0JDLElBQUFBLElBTmhCO0FBTXNCQyxJQUFBQSxNQU50QjtBQU04QkMsSUFBQUE7QUFOOUIsTUFPRlgsTUFBTSxDQUFDWSxFQVBYO0FBRHlCLE1BWW5CQyxjQVptQix5Q0FVekIsMEVBRTZCVixPQUY3QixHQUdFLDZFQUhGLEVBSUUseUVBSkYsRUFNRSxpRkFBK0IsMkJBQS9CLEVBTkYsRUFZRTtBQUFBLGdEQUFvQiw4QkFBQywwQkFBRCxDQUFwQjs7QUFBQSwrQ0FBOEIsZ0RBQXdCLGdDQUF4QixDQUE5QiwrQkFBeUQsMkJBQXpEO0FBQUEsSUFaRixDQVZ5QixXQVd4QkssTUFBTSxDQUFDUixNQUFELENBWGtCLGdCQVV4Qk8sVUFWd0IsdURBVXpCLE1BRU1NLGNBRk4sU0FFNkJWLE9BRjdCLENBRXFDO0FBSTNCVyxJQUFBQSxxQkFBUixHQUFzQztBQUFBLHNEQUFMLDJCQUFLOztBQUNwQyxXQUFLQyxhQUFMLENBQW1CWCx3QkFBbkI7QUFDQSxXQUFLVyxhQUFMLENBQW1CVixtQkFBbkI7QUFDQSxXQUFLVSxhQUFMLENBQW1CVCxrQkFBbkI7QUFDRDs7QUFFT1UsSUFBQUEsT0FBUixDQUEwQkMsSUFBMUIsRUFBZ0U7QUFBQSxtRUFBNUMsOEJBQUMsMEJBQUQsQ0FBNEM7O0FBQUEsc0JBQWxDLGdEQUF3QixnQ0FBeEIsQ0FBa0M7O0FBQUEsdURBQUwsMkJBQUs7O0FBQUE7O0FBQzlELFlBQU1ELE9BQU4sQ0FBY0MsSUFBZDtBQUNBLFdBQUtDLE1BQUwsQ0FBWUMsYUFBWixDQUEwQmxCLE9BQTFCO0FBQ0EsV0FBS21CLElBQUwsQ0FBVWxCLGdCQUFWO0FBQ0Q7O0FBZGtDLEdBWlosVUFhUG1CLFVBYk8sR0FhTUEsVUFiTixVQWNWQyxNQWRVLEdBY0QsRUFkQywyRUFhdEJYLE1BYnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBY3RCRixJQWRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFHQWdCdEJDLE1BaEJzQiwyS0FzQnRCQSxNQXRCc0I7QUE0QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBsZWFuZXMtc2VydmVyLlxuLy9cbi8vIFRoaXMgU291cmNlIENvZGUgRm9ybSBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBvZiB0aGUgTW96aWxsYSBQdWJsaWNcbi8vIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbi8vIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwczovL21vemlsbGEub3JnL01QTC8yLjAvLlxuLy9cbi8vIFNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBiYXNpcyxcbi8vIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3Jcbi8vIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcmlnaHRzIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuaW1wb3J0IHR5cGUgeyBOb3RpZmljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL05vdGlmaWNhdGlvbkludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIFNUQVJUVVAsIFNUQVJUVVBfQ09NUExFVEUsXG4gICAgQ29tbWFuZCxcbiAgICBQcmVwYXJlQ29udHJvbGxlckNvbW1hbmQsXG4gICAgUHJlcGFyZU1vZGVsQ29tbWFuZCxcbiAgICBQcmVwYXJlVmlld0NvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBTdGFydHVwQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIEBuYW1lQnkgc3RhdGljICBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBAbWV0aG9kIGluaXRpYWxpemVTdWJDb21tYW5kcygpOiB2b2lkIHtcbiAgICAgIHRoaXMuYWRkU3ViQ29tbWFuZChQcmVwYXJlQ29udHJvbGxlckNvbW1hbmQpO1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVNb2RlbENvbW1hbmQpO1xuICAgICAgdGhpcy5hZGRTdWJDb21tYW5kKFByZXBhcmVWaWV3Q29tbWFuZCk7XG4gICAgfVxuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIHN1cGVyLmV4ZWN1dGUobm90ZSk7XG4gICAgICB0aGlzLmZhY2FkZS5yZW1vdmVDb21tYW5kKFNUQVJUVVApO1xuICAgICAgdGhpcy5zZW5kKFNUQVJUVVBfQ09NUExFVEUpO1xuICAgIH1cbiAgfVxufVxuIl19