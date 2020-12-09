"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDcxMzA1MDBfY3JlYXRlX3Nlc3Npb25zX21pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJCYXNlTWlncmF0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJtZXRob2QiLCJOUyIsIkNyZWF0ZVNlc3Npb25zTWlncmF0aW9uIiwiY2hhbmdlIiwibmFtZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJhZGRGaWVsZCIsImFkZFRpbWVzdGFtcHMiLCJhZGRJbmRleCIsInR5cGUiLCJ1bmlxdWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsYUFESTtBQUVKQyxJQUFBQSxVQUZJO0FBRVFDLElBQUFBLE1BRlI7QUFFZ0JDLElBQUFBLE1BRmhCO0FBRXdCQyxJQUFBQSxJQUZ4QjtBQUU4QkMsSUFBQUE7QUFGOUIsTUFHRk4sTUFBTSxDQUFDTyxFQUhYO0FBRHlCLE1BUW5CQyx1QkFSbUIsV0FPeEJMLE1BQU0sQ0FBQ0gsTUFBRCxDQVBrQixFQU14QkUsVUFOd0Isc0RBTXpCLE1BRU1NLHVCQUZOLFNBRXNDUCxhQUZ0QyxDQUVvRDtBQUVsRCxXQUFlUSxNQUFmLEdBQXdCO0FBQ3RCLFlBQU1DLElBQUksR0FBRyxVQUFiO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLElBQXBCLEVBQTBCLFFBQTFCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0EsV0FBS0csYUFBTCxDQUFtQkgsSUFBbkI7QUFFQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsS0FBcEIsRUFBMkIsUUFBM0I7QUFDQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsU0FBcEIsRUFBK0IsTUFBL0I7QUFFQSxXQUFLSSxRQUFMLENBQWNKLElBQWQsRUFBb0IsQ0FBQyxJQUFELENBQXBCLEVBQTRCO0FBQUNLLFFBQUFBLElBQUksRUFBRSxNQUFQO0FBQWVDLFFBQUFBLE1BQU0sRUFBRTtBQUF2QixPQUE1QjtBQUNBLFdBQUtGLFFBQUwsQ0FBY0osSUFBZCxFQUFvQixDQUFDLEtBQUQsQ0FBcEIsRUFBNkI7QUFBQ0ssUUFBQUEsSUFBSSxFQUFFO0FBQVAsT0FBN0I7QUFDRDs7QUFkaUQsR0FSM0IsVUFTVkUsTUFUVSxHQVNELEVBVEMsdUVBU3RCWixJQVRzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVV0QkMsTUFWc0I7QUF3QjFCLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGRlZmF1bHQgKE1vZHVsZSkgPT4ge1xuICBjb25zdCB7XG4gICAgQmFzZU1pZ3JhdGlvbixcbiAgICBpbml0aWFsaXplLCBwYXJ0T2YsIG5hbWVCeSwgbWV0YSwgbWV0aG9kXG4gIH0gPSBNb2R1bGUuTlM7XG5cbiAgQGluaXRpYWxpemVcbiAgQHBhcnRPZihNb2R1bGUpXG4gIGNsYXNzIENyZWF0ZVNlc3Npb25zTWlncmF0aW9uIGV4dGVuZHMgQmFzZU1pZ3JhdGlvbiB7XG4gICAgQG1ldGEgc3RhdGljIG9iamVjdCA9IHt9O1xuICAgIEBtZXRob2Qgc3RhdGljIGNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSAnc2Vzc2lvbnMnXG4gICAgICB0aGlzLmNyZWF0ZUNvbGxlY3Rpb24obmFtZSlcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2lkJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICd0eXBlJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZFRpbWVzdGFtcHMobmFtZSlcblxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAndWlkJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdleHBpcmVzJywgJ2RhdGUnKVxuXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnaWQnXSwge3R5cGU6ICdoYXNoJywgdW5pcXVlOiB0cnVlfSlcbiAgICAgIHRoaXMuYWRkSW5kZXgobmFtZSwgWyd1aWQnXSwge3R5cGU6ICdoYXNoJ30pXG4gICAgfVxuICB9XG59XG4iXX0=