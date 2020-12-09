"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PipeMessageInterface = void 0;

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
const PipeMessageInterface = _flowRuntime.default.type("PipeMessageInterface", _flowRuntime.default.object(_flowRuntime.default.property("getType", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("setType", _flowRuntime.default.function(_flowRuntime.default.param("asType", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("getPriority", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.number()))), _flowRuntime.default.property("setPriority", _flowRuntime.default.function(_flowRuntime.default.param("anPriority", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("getHeader", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("setHeader", _flowRuntime.default.function(_flowRuntime.default.param("aoHeader", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("getBody", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any())))), _flowRuntime.default.property("setBody", _flowRuntime.default.function(_flowRuntime.default.param("aoBody", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.void())))));

exports.PipeMessageInterface = PipeMessageInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvUGlwZU1lc3NhZ2VJbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLCtFQUErQiw0QkFDcEMsbUdBQVcsNkJBQVgsR0FEb0MsRUFFcEMsdUVBQVEscUNBQVEsNkJBQVIsQ0FBUiw4QkFBeUIsMkJBQXpCLEdBRm9DLEVBR3BDLHVHQUFlLDZCQUFmLEdBSG9DLEVBSXBDLDJFQUFZLHlDQUFZLDZCQUFaLENBQVosOEJBQWlDLDJCQUFqQyxHQUpvQyxFQUtwQyxxR0FBYSxrQ0FBYixHQUxvQyxFQU1wQyx5RUFBVSx1Q0FBVSxrQ0FBVixDQUFWLDhCQUE2QiwyQkFBN0IsR0FOb0MsRUFPcEMsbUdBQVcsOEJBQUMsMEJBQUQsQ0FBWCxHQVBvQyxFQVFwQyx1RUFBUSxxQ0FBUSw4QkFBQywwQkFBRCxDQUFSLENBQVIsOEJBQXVCLDJCQUF2QixHQVJvQyxDQUEvQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIExlYW5FUy5cbi8vXG4vLyBMZWFuRVMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuLy8gaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4vLyB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuLy8gKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbi8vXG4vLyBMZWFuRVMgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbi8vIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4vLyBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4vLyBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbi8vXG4vLyBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2Vcbi8vIGFsb25nIHdpdGggTGVhbkVTLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGludGVyZmFjZSBQaXBlTWVzc2FnZUludGVyZmFjZSB7XG4gIGdldFR5cGUoKTogc3RyaW5nO1xuICBzZXRUeXBlKGFzVHlwZTogc3RyaW5nKTogdm9pZDtcbiAgZ2V0UHJpb3JpdHkoKTogbnVtYmVyO1xuICBzZXRQcmlvcml0eShhblByaW9yaXR5OiBudW1iZXIpOiB2b2lkO1xuICBnZXRIZWFkZXIoKTogb2JqZWN0O1xuICBzZXRIZWFkZXIoYW9IZWFkZXI6IG9iamVjdCk6IHZvaWQ7XG4gIGdldEJvZHkoKTogP2FueTtcbiAgc2V0Qm9keShhb0JvZHk6ID9hbnkpOiB2b2lkO1xufVxuIl19