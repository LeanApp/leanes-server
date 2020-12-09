"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _NotificationInterface2 = require("../interfaces/NotificationInterface");

var _ApplicationInterface2 = require("../interfaces/ApplicationInterface");

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
const ApplicationInterface = _flowRuntime.default.tdz(() => _ApplicationInterface2.ApplicationInterface);

const NotificationInterface = _flowRuntime.default.tdz(() => _NotificationInterface2.NotificationInterface);

var _default = Module => {
  var _dec, _dec2, _class, _class2, _init, _init2, _class3, _temp;

  const {
    APPLICATION_MEDIATOR,
    SHELL,
    LOGGER_MODULE,
    HTTP_MEDIATOR,
    Command,
    initialize,
    partOf,
    meta,
    method,
    nameBy
  } = Module.NS;
  let PrepareViewCommand = (_dec = _flowRuntime.default.annotate(_flowRuntime.default.class("PrepareViewCommand", _flowRuntime.default.extends(Command), _flowRuntime.default.staticProperty("__filename", _flowRuntime.default.any()), _flowRuntime.default.staticProperty("object", _flowRuntime.default.any()), _flowRuntime.default.method("execute", _fn => {
    const T = _fn.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

    return [_flowRuntime.default.param("note", _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T))), _flowRuntime.default.return(_flowRuntime.default.void())];
  }))), _dec2 = partOf(Module), _dec(_class = initialize(_class = _dec2(_class = (_class2 = (_temp = _class3 = class PrepareViewCommand extends Command {
    execute(note) {
      const T = _flowRuntime.default.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));

      let _noteType = _flowRuntime.default.ref(NotificationInterface, _flowRuntime.default.flowInto(T));

      const _returnType = _flowRuntime.default.return(_flowRuntime.default.void());

      _flowRuntime.default.param("note", _noteType).assert(note);

      const app = _flowRuntime.default.ref(ApplicationInterface).assert(note.getBody());

      this.facade.addMediator(LOGGER_MODULE, 'LoggerModuleMediator');
      this.facade.addMediator(SHELL, 'ShellJunctionMediator');
      this.facade.addMediator(APPLICATION_MEDIATOR, 'ApplicationMediator', app);
      this.facade.activateMediator(APPLICATION_MEDIATOR);
      this.facade.activateMediator(LOGGER_MODULE);
      this.facade.activateMediator(SHELL);

      if (!app.isLightweight) {
        this.facade.addMediator(HTTP_MEDIATOR, 'ServerMediator');
        this.facade.activateMediator(HTTP_MEDIATOR);
      }
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
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2.prototype, "execute", [method], Object.getOwnPropertyDescriptor(_class2.prototype, "execute"), _class2.prototype)), _class2)) || _class) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzL1ByZXBhcmVWaWV3Q29tbWFuZC5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJBUFBMSUNBVElPTl9NRURJQVRPUiIsIlNIRUxMIiwiTE9HR0VSX01PRFVMRSIsIkhUVFBfTUVESUFUT1IiLCJDb21tYW5kIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm1ldGEiLCJtZXRob2QiLCJuYW1lQnkiLCJOUyIsIlByZXBhcmVWaWV3Q29tbWFuZCIsImV4ZWN1dGUiLCJub3RlIiwiZ2V0Qm9keSIsImZhY2FkZSIsImFkZE1lZGlhdG9yIiwiYXBwIiwiYWN0aXZhdGVNZWRpYXRvciIsImlzTGlnaHR3ZWlnaHQiLCJfX2ZpbGVuYW1lIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFVQTs7QUFDQTs7OztBQVhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7ZUFLZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLG9CQURJO0FBQ2tCQyxJQUFBQSxLQURsQjtBQUN5QkMsSUFBQUEsYUFEekI7QUFDd0NDLElBQUFBLGFBRHhDO0FBRUpDLElBQUFBLE9BRkk7QUFHSkMsSUFBQUEsVUFISTtBQUdRQyxJQUFBQSxNQUhSO0FBR2dCQyxJQUFBQSxJQUhoQjtBQUdzQkMsSUFBQUEsTUFIdEI7QUFHOEJDLElBQUFBO0FBSDlCLE1BSUZWLE1BQU0sQ0FBQ1csRUFKWDtBQUR5QixNQVNuQkMsa0JBVG1CLHlDQU96Qiw4RUFFaUNQLE9BRmpDLEdBR0UsNkVBSEYsRUFJRSx5RUFKRixFQU1FO0FBQUEsZ0RBQW9CLDhCQUFDLDBCQUFELENBQXBCOztBQUFBLCtDQUE4QixnREFBd0IsZ0NBQXhCLENBQTlCLCtCQUF5RCwyQkFBekQ7QUFBQSxJQU5GLENBUHlCLFdBUXhCRSxNQUFNLENBQUNQLE1BQUQsQ0FSa0IsZ0JBT3hCTSxVQVB3Qix1REFPekIsTUFFTU0sa0JBRk4sU0FFaUNQLE9BRmpDLENBRXlDO0FBSS9CUSxJQUFBQSxPQUFSLENBQTBCQyxJQUExQixFQUFnRTtBQUFBLG1FQUE1Qyw4QkFBQywwQkFBRCxDQUE0Qzs7QUFBQSxzQkFBbEMsZ0RBQXdCLGdDQUF4QixDQUFrQzs7QUFBQSxzREFBTCwyQkFBSzs7QUFBQTs7QUFDOUQsa0JBQVMsOENBQVQsUUFBa0NBLElBQUksQ0FBQ0MsT0FBTCxFQUFsQzs7QUFFQSxXQUFLQyxNQUFMLENBQVlDLFdBQVosQ0FBd0JkLGFBQXhCLEVBQXVDLHNCQUF2QztBQUNBLFdBQUthLE1BQUwsQ0FBWUMsV0FBWixDQUF3QmYsS0FBeEIsRUFBK0IsdUJBQS9CO0FBQ0EsV0FBS2MsTUFBTCxDQUFZQyxXQUFaLENBQXdCaEIsb0JBQXhCLEVBQThDLHFCQUE5QyxFQUFxRWlCLEdBQXJFO0FBRUEsV0FBS0YsTUFBTCxDQUFZRyxnQkFBWixDQUE2QmxCLG9CQUE3QjtBQUNBLFdBQUtlLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJoQixhQUE3QjtBQUNBLFdBQUthLE1BQUwsQ0FBWUcsZ0JBQVosQ0FBNkJqQixLQUE3Qjs7QUFFQSxVQUFJLENBQUNnQixHQUFHLENBQUNFLGFBQVQsRUFBd0I7QUFDdEIsYUFBS0osTUFBTCxDQUFZQyxXQUFaLENBQXdCYixhQUF4QixFQUF1QyxnQkFBdkM7QUFDQSxhQUFLWSxNQUFMLENBQVlHLGdCQUFaLENBQTZCZixhQUE3QjtBQUNEO0FBQ0Y7O0FBbkJzQyxHQVRoQixVQVVQaUIsVUFWTyxHQVVNQSxVQVZOLFVBV1ZDLE1BWFUsR0FXRCxFQVhDLDJFQVV0QlosTUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFXdEJGLElBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUZBYXRCQyxNQWJzQjtBQThCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5pbXBvcnQgdHlwZSB7IE5vdGlmaWNhdGlvbkludGVyZmFjZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlJztcbmltcG9ydCB0eXBlIHsgQXBwbGljYXRpb25JbnRlcmZhY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0FwcGxpY2F0aW9uSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQVBQTElDQVRJT05fTUVESUFUT1IsIFNIRUxMLCBMT0dHRVJfTU9EVUxFLCBIVFRQX01FRElBVE9SLFxuICAgIENvbW1hbmQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBtZXRhLCBtZXRob2QsIG5hbWVCeVxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBQcmVwYXJlVmlld0NvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcbiAgICBAbmFtZUJ5IHN0YXRpYyAgX19maWxlbmFtZSA9IF9fZmlsZW5hbWU7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuXG4gICAgQG1ldGhvZCBleGVjdXRlPFQgPSA/YW55Pihub3RlOiBOb3RpZmljYXRpb25JbnRlcmZhY2U8VD4pOiB2b2lkIHtcbiAgICAgIGNvbnN0IGFwcDogQXBwbGljYXRpb25JbnRlcmZhY2UgPSBub3RlLmdldEJvZHkoKTtcblxuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoTE9HR0VSX01PRFVMRSwgJ0xvZ2dlck1vZHVsZU1lZGlhdG9yJyk7XG4gICAgICB0aGlzLmZhY2FkZS5hZGRNZWRpYXRvcihTSEVMTCwgJ1NoZWxsSnVuY3Rpb25NZWRpYXRvcicpO1xuICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoQVBQTElDQVRJT05fTUVESUFUT1IsICdBcHBsaWNhdGlvbk1lZGlhdG9yJywgYXBwKTtcblxuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihBUFBMSUNBVElPTl9NRURJQVRPUik7XG4gICAgICB0aGlzLmZhY2FkZS5hY3RpdmF0ZU1lZGlhdG9yKExPR0dFUl9NT0RVTEUpO1xuICAgICAgdGhpcy5mYWNhZGUuYWN0aXZhdGVNZWRpYXRvcihTSEVMTCk7XG5cbiAgICAgIGlmICghYXBwLmlzTGlnaHR3ZWlnaHQpIHtcbiAgICAgICAgdGhpcy5mYWNhZGUuYWRkTWVkaWF0b3IoSFRUUF9NRURJQVRPUiwgJ1NlcnZlck1lZGlhdG9yJyk7XG4gICAgICAgIHRoaXMuZmFjYWRlLmFjdGl2YXRlTWVkaWF0b3IoSFRUUF9NRURJQVRPUik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=