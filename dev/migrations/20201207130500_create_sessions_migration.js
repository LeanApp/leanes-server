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
  let CreateSessionsMigration = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class CreateSessionsMigration extends BaseMigration {
    static change() {
      const name = 'sessions';
      this.createCollection(name);
      this.addField(name, 'id', 'string');
      this.addField(name, 'type', 'string');
      this.addTimestamps(name);
      this.addField(name, 'uid', 'string');
      this.addField(name, 'expires', 'date');
      this.addIndex(name, ['id'], {
        type: 'hash',
        unique: true
      });
      this.addIndex(name, ['uid'], {
        type: 'hash'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDcxMzA1MDBfY3JlYXRlX3Nlc3Npb25zX21pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJCYXNlTWlncmF0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJtZXRob2QiLCJOUyIsIkNyZWF0ZVNlc3Npb25zTWlncmF0aW9uIiwiY2hhbmdlIiwibmFtZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJhZGRGaWVsZCIsImFkZFRpbWVzdGFtcHMiLCJhZGRJbmRleCIsInR5cGUiLCJ1bmlxdWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGFBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxNQUZoQjtBQUV3QkMsSUFBQUEsSUFGeEI7QUFFOEJDLElBQUFBO0FBRjlCLE1BR0ZOLE1BQU0sQ0FBQ08sRUFIWDtBQUR5QixNQVFuQkMsdUJBUm1CLFdBT3hCTCxNQUFNLENBQUNILE1BQUQsQ0FQa0IsRUFNeEJFLFVBTndCLHNEQU16QixNQUVNTSx1QkFGTixTQUVzQ1AsYUFGdEMsQ0FFb0Q7QUFFbEQsV0FBZVEsTUFBZixHQUF3QjtBQUN0QixZQUFNQyxJQUFJLEdBQUcsVUFBYjtBQUNBLFdBQUtDLGdCQUFMLENBQXNCRCxJQUF0QjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixJQUFwQixFQUEwQixRQUExQjtBQUNBLFdBQUtFLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQixNQUFwQixFQUE0QixRQUE1QjtBQUNBLFdBQUtHLGFBQUwsQ0FBbUJILElBQW5CO0FBRUEsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLEtBQXBCLEVBQTJCLFFBQTNCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLFNBQXBCLEVBQStCLE1BQS9CO0FBRUEsV0FBS0ksUUFBTCxDQUFjSixJQUFkLEVBQW9CLENBQUMsSUFBRCxDQUFwQixFQUE0QjtBQUFDSyxRQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxRQUFBQSxNQUFNLEVBQUU7QUFBdkIsT0FBNUI7QUFDQSxXQUFLRixRQUFMLENBQWNKLElBQWQsRUFBb0IsQ0FBQyxLQUFELENBQXBCLEVBQTZCO0FBQUNLLFFBQUFBLElBQUksRUFBRTtBQUFQLE9BQTdCO0FBQ0Q7O0FBZGlELEdBUjNCLFVBU1ZFLE1BVFUsR0FTRCxFQVRDLHVFQVN0QlosSUFUc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFVdEJDLE1BVnNCO0FBd0IxQixDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLXNlcnZlci5cbi8vXG4vLyBsZWFuZXMtc2VydmVyIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEFmZmVybyBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLXNlcnZlciBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtc2VydmVyLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQmFzZU1pZ3JhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgbWV0aG9kXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIENyZWF0ZVNlc3Npb25zTWlncmF0aW9uIGV4dGVuZHMgQmFzZU1pZ3JhdGlvbiB7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICAgIEBtZXRob2Qgc3RhdGljIGNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSAnc2Vzc2lvbnMnXG4gICAgICB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24obmFtZSlcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2lkJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICd0eXBlJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZFRpbWVzdGFtcHMobmFtZSlcblxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAndWlkJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdleHBpcmVzJywgJ2RhdGUnKVxuXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnaWQnXSwge3R5cGU6ICdoYXNoJywgdW5pcXVlOiB0cnVlfSlcbiAgICAgIHRoaXMuYWRkSW5kZXgobmFtZSwgWyd1aWQnXSwge3R5cGU6ICdoYXNoJ30pXG4gICAgfVxuICB9XG59XG4iXX0=