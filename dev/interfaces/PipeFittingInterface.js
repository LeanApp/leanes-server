"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PipeFittingInterface = void 0;

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
// import type { PipeMessageInterface } from './PipeMessageInterface'
const PipeFittingInterface = _flowRuntime.default.type("PipeFittingInterface", PipeFittingInterface => {
  return _flowRuntime.default.object(_flowRuntime.default.property("connect", _flowRuntime.default.function(_flowRuntime.default.param("aoOutput", PipeFittingInterface), _flowRuntime.default.return(_flowRuntime.default.boolean()))), _flowRuntime.default.property("disconnect", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.nullable(PipeFittingInterface)))), _flowRuntime.default.property("write", _flowRuntime.default.function(_flowRuntime.default.param("aoMessage", _flowRuntime.default.ref("PipeMessageInterface")), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.boolean())))));
});

exports.PipeFittingInterface = PipeFittingInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvUGlwZUZpdHRpbmdJbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRU87QUFBQSxTQUErQiw0QkFDcEMsdUVBQVEsdUNBQVUsb0JBQVYsQ0FBUiw4QkFBeUMsOEJBQXpDLEdBRG9DLEVBRXBDLHNHQUFjLDhCQUFDLG9CQUFELENBQWQsR0FGb0MsRUFHcEMscUVBQU0sd0NBQVcsZ0RBQVgsQ0FBTiw4QkFBd0Msb0NBQVEsOEJBQVIsQ0FBeEMsR0FIb0MsQ0FBL0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIExlYW5FUy5cbi8vXG4vLyBMZWFuRVMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBMZWFuRVMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggTGVhbkVTLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuLy8gaW1wb3J0IHR5cGUgeyBQaXBlTWVzc2FnZUludGVyZmFjZSB9IGZyb20gJy4vUGlwZU1lc3NhZ2VJbnRlcmZhY2UnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGlwZUZpdHRpbmdJbnRlcmZhY2Uge1xuICBjb25uZWN0KGFvT3V0cHV0OiBQaXBlRml0dGluZ0ludGVyZmFjZSk6IGJvb2xlYW47XG4gIGRpc2Nvbm5lY3QoKTogP1BpcGVGaXR0aW5nSW50ZXJmYWNlO1xuICB3cml0ZShhb01lc3NhZ2U6IFBpcGVNZXNzYWdlSW50ZXJmYWNlKTogUHJvbWlzZTxib29sZWFuPjtcbn1cbiJdfQ==