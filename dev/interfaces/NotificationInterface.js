"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.NotificationInterface = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of LeanES.
//
// LeanES is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// LeanES is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with LeanES.  If not, see <https://www.gnu.org/licenses/>.
const NotificationInterface = _flowRuntime.default.type("NotificationInterface", NotificationInterface => {
  const T = NotificationInterface.typeParameter("T", undefined, _flowRuntime.default.nullable(_flowRuntime.default.any()));
  return _flowRuntime.default.object(_flowRuntime.default.property("getName", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("setBody", _flowRuntime.default.function(_flowRuntime.default.param("aoBody", T), _flowRuntime.default.return(T))), _flowRuntime.default.property("getBody", _flowRuntime.default.function(_flowRuntime.default.return(T))), _flowRuntime.default.property("setType", _flowRuntime.default.function(_flowRuntime.default.param("asType", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("getType", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.string())))));
});

exports.NotificationInterface = NotificationInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvTm90aWZpY2F0aW9uSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTztBQUFBLGdFQUFvQyw4QkFBQywwQkFBRCxDQUFwQztBQUFBLFNBQTBDLDRCQUMvQyxtR0FBVyw2QkFBWCxHQUQrQyxFQUcvQyx1RUFBUSxxQ0FBUSxDQUFSLENBQVIsOEJBQW9CLENBQXBCLEdBSCtDLEVBSy9DLG1HQUFXLENBQVgsR0FMK0MsRUFPL0MsdUVBQVEscUNBQVEsNkJBQVIsQ0FBUiw4QkFBeUIsNkJBQXpCLEdBUCtDLEVBUy9DLG1HQUFXLDhCQUFDLDZCQUFELENBQVgsR0FUK0MsQ0FBMUM7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIExlYW5FUy5cbi8vXG4vLyBMZWFuRVMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBMZWFuRVMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggTGVhbkVTLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25JbnRlcmZhY2U8VCA9ID9hbnk+IHtcbiAgZ2V0TmFtZSgpOiBzdHJpbmc7XG5cbiAgc2V0Qm9keShhb0JvZHk6IFQpOiBUO1xuXG4gIGdldEJvZHkoKTogVDtcblxuICBzZXRUeXBlKGFzVHlwZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIGdldFR5cGUoKTogP3N0cmluZztcbn1cbiJdfQ==