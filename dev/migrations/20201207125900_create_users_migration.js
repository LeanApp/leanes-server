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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZ3JhdGlvbnMvMjAyMDEyMDcxMjU5MDBfY3JlYXRlX3VzZXJzX21pZ3JhdGlvbi5qcyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJCYXNlTWlncmF0aW9uIiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJtZXRob2QiLCJOUyIsIkNyZWF0ZVVzZXJzTWlncmF0aW9uIiwiY2hhbmdlIiwibmFtZSIsImNyZWF0ZUNvbGxlY3Rpb24iLCJhZGRGaWVsZCIsImFkZFRpbWVzdGFtcHMiLCJhZGRJbmRleCIsInR5cGUiLCJ1bmlxdWUiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztlQUVnQkEsTUFBRCxJQUFZO0FBQUE7O0FBQ3pCLFFBQU07QUFDSkMsSUFBQUEsYUFESTtBQUVKQyxJQUFBQSxVQUZJO0FBRVFDLElBQUFBLE1BRlI7QUFFZ0JDLElBQUFBLE1BRmhCO0FBRXdCQyxJQUFBQSxJQUZ4QjtBQUU4QkMsSUFBQUE7QUFGOUIsTUFHRk4sTUFBTSxDQUFDTyxFQUhYO0FBRHlCLE1BUW5CQyxvQkFSbUIsV0FPeEJMLE1BQU0sQ0FBQ0gsTUFBRCxDQVBrQixFQU14QkUsVUFOd0Isc0RBTXpCLE1BRU1NLG9CQUZOLFNBRW1DUCxhQUZuQyxDQUVpRDtBQUUvQyxXQUFlUSxNQUFmLEdBQXdCO0FBQ3RCLFlBQU1DLElBQUksR0FBRyxPQUFiO0FBQ0EsV0FBS0MsZ0JBQUwsQ0FBc0JELElBQXRCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLElBQXBCLEVBQTBCLFFBQTFCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0EsV0FBS0csYUFBTCxDQUFtQkgsSUFBbkI7QUFFQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsT0FBcEIsRUFBNkIsUUFBN0I7QUFDQSxXQUFLRSxRQUFMLENBQWNGLElBQWQsRUFBb0IsZ0JBQXBCLEVBQXNDLFNBQXRDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFFBQWhDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLFNBQXBCLEVBQStCLFFBQS9CO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLEtBQXBCLEVBQTJCLFFBQTNCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLE1BQXBCLEVBQTRCLFFBQTVCO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLGVBQXBCLEVBQXFDLFFBQXJDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLFNBQXBCLEVBQStCLFNBQS9CO0FBQ0EsV0FBS0UsUUFBTCxDQUFjRixJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFNBQWhDO0FBRUEsV0FBS0ksUUFBTCxDQUFjSixJQUFkLEVBQW9CLENBQUMsSUFBRCxDQUFwQixFQUE0QjtBQUFDSyxRQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxRQUFBQSxNQUFNLEVBQUU7QUFBdkIsT0FBNUI7QUFDQSxXQUFLRixRQUFMLENBQWNKLElBQWQsRUFBb0IsQ0FBQyxLQUFELENBQXBCLEVBQTZCO0FBQUNLLFFBQUFBLElBQUksRUFBRSxNQUFQO0FBQWVDLFFBQUFBLE1BQU0sRUFBRTtBQUF2QixPQUE3QjtBQUNBLFdBQUtGLFFBQUwsQ0FBY0osSUFBZCxFQUFvQixDQUFDLE9BQUQsQ0FBcEIsRUFBK0I7QUFBQ0ssUUFBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZUMsUUFBQUEsTUFBTSxFQUFFO0FBQXZCLE9BQS9CO0FBQ0EsV0FBS0YsUUFBTCxDQUFjSixJQUFkLEVBQW9CLENBQUMsVUFBRCxDQUFwQixFQUFrQztBQUFDSyxRQUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlQyxRQUFBQSxNQUFNLEVBQUU7QUFBdkIsT0FBbEM7QUFDRDs7QUF4QjhDLEdBUnhCLFVBU1ZDLE1BVFUsR0FTRCxFQVRDLHVFQVN0QlosSUFUc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0RUFVdEJDLE1BVnNCO0FBa0MxQixDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBkZWZhdWx0IChNb2R1bGUpID0+IHtcbiAgY29uc3Qge1xuICAgIEJhc2VNaWdyYXRpb24sXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsIG1ldGhvZFxuICB9ID0gTW9kdWxlLk5TO1xuXG4gIEBpbml0aWFsaXplXG4gIEBwYXJ0T2YoTW9kdWxlKVxuICBjbGFzcyBDcmVhdGVVc2Vyc01pZ3JhdGlvbiBleHRlbmRzIEJhc2VNaWdyYXRpb24ge1xuICAgIEBtZXRhIHN0YXRpYyBvYmplY3QgPSB7fTtcbiAgICBAbWV0aG9kIHN0YXRpYyBjaGFuZ2UoKSB7XG4gICAgICBjb25zdCBuYW1lID0gJ3VzZXJzJ1xuICAgICAgdGhpcy5jcmVhdGVDb2xsZWN0aW9uKG5hbWUpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdpZCcsICdzdHJpbmcnKVxuICAgICAgdGhpcy5hZGRGaWVsZChuYW1lLCAndHlwZScsICdzdHJpbmcnKVxuICAgICAgdGhpcy5hZGRUaW1lc3RhbXBzKG5hbWUpXG5cbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2VtYWlsJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdlbWFpbF92ZXJpZmllZCcsICdib29sZWFuJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ25hbWUnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ25pY2tuYW1lJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdwaWN0dXJlJywgJ3N0cmluZycpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdzdWInLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ3NhbHQnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ3Bhc3N3b3JkX2hhc2gnLCAnc3RyaW5nJylcbiAgICAgIHRoaXMuYWRkRmllbGQobmFtZSwgJ2lzQWRtaW4nLCAnYm9vbGVhbicpXG4gICAgICB0aGlzLmFkZEZpZWxkKG5hbWUsICdpc0xvY2tlZCcsICdib29sZWFuJylcblxuICAgICAgdGhpcy5hZGRJbmRleChuYW1lLCBbJ2lkJ10sIHt0eXBlOiAnaGFzaCcsIHVuaXF1ZTogdHJ1ZX0pXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnc3ViJ10sIHt0eXBlOiAnaGFzaCcsIHVuaXF1ZTogdHJ1ZX0pXG4gICAgICB0aGlzLmFkZEluZGV4KG5hbWUsIFsnZW1haWwnXSwge3R5cGU6ICdoYXNoJywgdW5pcXVlOiB0cnVlfSlcbiAgICAgIHRoaXMuYWRkSW5kZXgobmFtZSwgWyduaWNrbmFtZSddLCB7dHlwZTogJ2hhc2gnLCB1bmlxdWU6IHRydWV9KVxuICAgIH1cbiAgfVxufVxuIl19