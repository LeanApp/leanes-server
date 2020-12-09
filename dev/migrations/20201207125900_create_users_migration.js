"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
  var _dec, _class, _class2, _init, _class3, _temp;

  const {
    BaseMigration,
    initialize,
    partOf,
    nameBy,
    meta,
    method
  } = Module.NS;
  let CreateUsersMigration = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class CreateUsersMigration extends BaseMigration {
    static change() {
      const name = 'users';
      this.createCollection(name);
      this.addField(name, 'id', 'string');
      this.addField(name, 'type', 'string');
      this.addTimestamps(name);
      this.addField(name, 'email', 'string');
      this.addField(name, 'email_verified', 'boolean');
      this.addField(name, 'name', 'string');
      this.addField(name, 'nickname', 'string');
      this.addField(name, 'picture', 'string');
      this.addField(name, 'sub', 'string');
      this.addField(name, 'salt', 'string');
      this.addField(name, 'password_hash', 'string');
      this.addField(name, 'isAdmin', 'boolean');
      this.addField(name, 'isLocked', 'boolean');
      this.addIndex(name, ['id'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['sub'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['email'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['nickname'], {
        type: 'hash',
        unique: true
      });
    }

  }, _class3.object = {}, _temp), ((0, _applyDecoratedDescriptor2.default)(_class2, "object", [meta], (_init = Object.getOwnPropertyDescriptor(_class2, "object"), _init = _init ? _init.value : undefined, {
    enumerable: true,
    configurable: true,
    writable: true,
    initializer: function () {
      return _init;
    }
  }), _class2), (0, _applyDecoratedDescriptor2.default)(_class2, "change", [method], Object.getOwnPropertyDescriptor(_class2, "change"), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDcxMjU5MDBfY3JlYXRlX3VzZXJzX21pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJCYXNlTWlncmF0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJtZXRob2QiLCJOUyIsIkNyZWF0ZVVzZXJzTWlncmF0aW9uIiwiY2hhbmdlIiwibmFtZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJhZGRGaWVsZCIsImFkZFRpbWVzdGFtcHMiLCJhZGRJbmRleCIsInR5cGUiLCJ1bmlxdWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGFBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxNQUZoQjtBQUV3QkMsSUFBQUEsSUFGeEI7QUFFOEJDLElBQUFBO0FBRjlCLE1BR0ZOLE1BQU0sQ0FBQ08sRUFIWDtBQUR5QixNQVFuQkMsb0JBUm1CLFdBT3hCTCxNQUFNLENBQUNILE1BQUQsQ0FQa0IsRUFNeEJFLFVBTndCLHNEQU16QixNQUVNTSxvQkFGTixTQUVtQ1AsYUFGbkMsQ0FFaUQ7QUFFL0MsV0FBZVEsTUFBZixHQUF3QjtBQUN0QixZQUFNQyxJQUFJLEdBQUcsT0FBYjtBQUNBLFdBQUtDLGdCQUFMLENBQXNCRCxJQUF0QjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixJQUFwQixFQUEwQixRQUExQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixNQUFwQixFQUE0QixRQUE1QjtBQUNBLFdBQUtHLGFBQUwsQ0FBbUJILElBQW5CO0FBRUEsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE9BQXBCLEVBQTZCLFFBQTdCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLGdCQUFwQixFQUFzQyxTQUF0QztBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixNQUFwQixFQUE0QixRQUE1QjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixVQUFwQixFQUFnQyxRQUFoQztBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixTQUFwQixFQUErQixRQUEvQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixLQUFwQixFQUEyQixRQUEzQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixNQUFwQixFQUE0QixRQUE1QjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixlQUFwQixFQUFxQyxRQUFyQztBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixTQUFwQixFQUErQixTQUEvQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixVQUFwQixFQUFnQyxTQUFoQztBQUVBLFdBQUtJLFFBQUwsQ0FBY0osSUFBZCxFQUFvQixDQUFDLElBQUQsQ0FBcEIsRUFBNEI7QUFBQ0ssUUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsUUFBQUEsTUFBTSxFQUFFO0FBQXZCLE9BQTVCO0FBQ0EsV0FBS0YsUUFBTCxDQUFjSixJQUFkLEVBQW9CLENBQUMsS0FBRCxDQUFwQixFQUE2QjtBQUFDSyxRQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxRQUFBQSxNQUFNLEVBQUU7QUFBdkIsT0FBN0I7QUFDQSxXQUFLRixRQUFMLENBQWNKLElBQWQsRUFBb0IsQ0FBQyxPQUFELENBQXBCLEVBQStCO0FBQUNLLFFBQUFBLElBQUksRUFBRSxNQUFQO0FBQWVDLFFBQUFBLE1BQU0sRUFBRTtBQUF2QixPQUEvQjtBQUNBLFdBQUtGLFFBQUwsQ0FBY0osSUFBZCxFQUFvQixDQUFDLFVBQUQsQ0FBcEIsRUFBa0M7QUFBQ0ssUUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsUUFBQUEsTUFBTSxFQUFFO0FBQXZCLE9BQWxDO0FBQ0Q7O0FBeEI4QyxHQVJ4QixVQVNWQyxNQVRVLEdBU0QsRUFUQyx1RUFTdEJaLElBVHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBVXRCQyxNQVZzQjtBQWtDMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4vLyBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbi8vIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4vLyAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuLy9cbi8vIGxlYW5lcy1zZXJ2ZXIgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggbGVhbmVzLXNlcnZlci4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEJhc2VNaWdyYXRpb24sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIG1ldGhvZFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBDcmVhdGVVc2Vyc01pZ3JhdGlvbiBleHRlbmRzIEJhc2VNaWdyYXRpb24ge1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgICBAbWV0aG9kIHN0YXRpYyBjaGFuZ2UoKSB7XG4gICAgICBjb25zdCBuYW1lID0gJ3VzZXJzJ1xuICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9uKG5hbWUpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdpZCcsICdzdHJpbmcnKVxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAndHlwZScsICdzdHJpbmcnKVxuICAgICAgdGhpcy5hZGRUaW1lc3RhbXBzKG5hbWUpXG5cbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2VtYWlsJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdlbWFpbF92ZXJpZmllZCcsICdib29sZWFuJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ25hbWUnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ25pY2tuYW1lJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdwaWN0dXJlJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdzdWInLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ3NhbHQnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ3Bhc3N3b3JkX2hhc2gnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2lzQWRtaW4nLCAnYm9vbGVhbicpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdpc0xvY2tlZCcsICdib29sZWFuJylcblxuICAgICAgdGhpcy5hZGRJbmRleChuYW1lLCBbJ2lkJ10sIHt0eXBlOiAnaGFzaCcsIHVuaXF1ZTogdHJ1ZX0pXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnc3ViJ10sIHt0eXBlOiAnaGFzaCcsIHVuaXF1ZTogdHJ1ZX0pXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnZW1haWwnXSwge3R5cGU6ICdoYXNoJywgdW5pcXVlOiB0cnVlfSlcbiAgICAgIHRoaXMuYWRkSW5kZXgobmFtZSwgWyduaWNrbmFtZSddLCB7dHlwZTogJ2hhc2gnLCB1bmlxdWU6IHRydWV9KVxuICAgIH1cbiAgfVxufVxuIl19