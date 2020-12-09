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
  var _dec, _class, _class2, _init, _init2, _class3, _temp;

  const {
    SwaggerEndpoint,
    initialize,
    partOf,
    nameBy,
    meta,
    Utils: {
      joi
    }
  } = Module.NS;
  let ItselfInfoEndpoint = (_dec = partOf(Module), initialize(_class = _dec(_class = (_class2 = (_temp = _class3 = class ItselfInfoEndpoint extends SwaggerEndpoint {
    constructor() {
      super(...arguments);
      this.response(joi.object({
        info: joi.object({
          name: joi.string(),
          description: joi.string(),
          license: joi.string(),
          version: joi.string(),
          keywords: joi.array().items(joi.string())
        })
      }), 'Information').summary('Service info').description('Info about this service');
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
  }), _class2)), _class2)) || _class) || _class);
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZHBvaW50cy9JdHNlbGZJbmZvRW5kcG9pbnQuanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiU3dhZ2dlckVuZHBvaW50IiwiaW5pdGlhbGl6ZSIsInBhcnRPZiIsIm5hbWVCeSIsIm1ldGEiLCJVdGlscyIsImpvaSIsIk5TIiwiSXRzZWxmSW5mb0VuZHBvaW50IiwiY29uc3RydWN0b3IiLCJhcmd1bWVudHMiLCJyZXNwb25zZSIsIm9iamVjdCIsImluZm8iLCJuYW1lIiwic3RyaW5nIiwiZGVzY3JpcHRpb24iLCJsaWNlbnNlIiwidmVyc2lvbiIsImtleXdvcmRzIiwiYXJyYXkiLCJpdGVtcyIsInN1bW1hcnkiLCJfX2ZpbGVuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7ZUFFZ0JBLE1BQUQsSUFBWTtBQUFBOztBQUN6QixRQUFNO0FBQ0pDLElBQUFBLGVBREk7QUFFSkMsSUFBQUEsVUFGSTtBQUVRQyxJQUFBQSxNQUZSO0FBRWdCQyxJQUFBQSxNQUZoQjtBQUV3QkMsSUFBQUEsSUFGeEI7QUFHSkMsSUFBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBO0FBQUY7QUFISCxNQUlGUCxNQUFNLENBQUNRLEVBSlg7QUFEeUIsTUFTbkJDLGtCQVRtQixXQVF4Qk4sTUFBTSxDQUFDSCxNQUFELENBUmtCLEVBT3hCRSxVQVB3QixzREFPekIsTUFFTU8sa0JBRk4sU0FFaUNSLGVBRmpDLENBRWlEO0FBSS9DUyxJQUFBQSxXQUFXLEdBQUc7QUFDWixZQUFNLEdBQUdDLFNBQVQ7QUFDQSxXQUFLQyxRQUFMLENBQWNMLEdBQUcsQ0FBQ00sTUFBSixDQUFXO0FBQ3JCQyxRQUFBQSxJQUFJLEVBQUVQLEdBQUcsQ0FBQ00sTUFBSixDQUFXO0FBQ2ZFLFVBQUFBLElBQUksRUFBRVIsR0FBRyxDQUFDUyxNQUFKLEVBRFM7QUFFZkMsVUFBQUEsV0FBVyxFQUFFVixHQUFHLENBQUNTLE1BQUosRUFGRTtBQUdmRSxVQUFBQSxPQUFPLEVBQUVYLEdBQUcsQ0FBQ1MsTUFBSixFQUhNO0FBSWZHLFVBQUFBLE9BQU8sRUFBRVosR0FBRyxDQUFDUyxNQUFKLEVBSk07QUFLZkksVUFBQUEsUUFBUSxFQUFFYixHQUFHLENBQUNjLEtBQUosR0FBWUMsS0FBWixDQUFrQmYsR0FBRyxDQUFDUyxNQUFKLEVBQWxCO0FBTEssU0FBWDtBQURlLE9BQVgsQ0FBZCxFQVFNLGFBUk4sRUFTR08sT0FUSCxDQVNXLGNBVFgsRUFVR04sV0FWSCxDQVVlLHlCQVZmO0FBV0Q7O0FBakI4QyxHQVR4QixVQVVSTyxVQVZRLEdBVUtBLFVBVkwsVUFXVlgsTUFYVSxHQVdELEVBWEMsMkVBVXRCVCxNQVZzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRFQVd0QkMsSUFYc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTRCMUIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGxlYW5lcy1zZXJ2ZXIuXG4vL1xuLy8gVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuLy8gTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuLy8gZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHBzOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uXG4vL1xuLy8gU29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIGJhc2lzLFxuLy8gV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvclxuLy8gdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyByaWdodHMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuXG5leHBvcnQgZGVmYXVsdCAoTW9kdWxlKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBTd2FnZ2VyRW5kcG9pbnQsXG4gICAgaW5pdGlhbGl6ZSwgcGFydE9mLCBuYW1lQnksIG1ldGEsXG4gICAgVXRpbHM6IHsgam9pIH1cbiAgfSA9IE1vZHVsZS5OUztcblxuICBAaW5pdGlhbGl6ZVxuICBAcGFydE9mKE1vZHVsZSlcbiAgY2xhc3MgSXRzZWxmSW5mb0VuZHBvaW50IGV4dGVuZHMgU3dhZ2dlckVuZHBvaW50IHtcbiAgICBAbmFtZUJ5IHN0YXRpYyBfX2ZpbGVuYW1lID0gX19maWxlbmFtZTtcbiAgICBAbWV0YSBzdGF0aWMgb2JqZWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICB0aGlzLnJlc3BvbnNlKGpvaS5vYmplY3Qoe1xuICAgICAgICAgIGluZm86IGpvaS5vYmplY3Qoe1xuICAgICAgICAgICAgbmFtZTogam9pLnN0cmluZygpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIGxpY2Vuc2U6IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIHZlcnNpb246IGpvaS5zdHJpbmcoKSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBqb2kuYXJyYXkoKS5pdGVtcyhqb2kuc3RyaW5nKCkpLFxuICAgICAgICAgIH0pXG4gICAgICAgIH0pLCAnSW5mb3JtYXRpb24nKVxuICAgICAgICAuc3VtbWFyeSgnU2VydmljZSBpbmZvJylcbiAgICAgICAgLmRlc2NyaXB0aW9uKCdJbmZvIGFib3V0IHRoaXMgc2VydmljZScpXG4gICAgfVxuICB9XG59XG4iXX0=