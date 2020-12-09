"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.PipeAwareInterface = void 0;

var _PipeFittingInterface2 = require("./PipeFittingInterface");

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
const PipeFittingInterface = _flowRuntime.default.tdz(() => _PipeFittingInterface2.PipeFittingInterface);

const PipeAwareInterface = _flowRuntime.default.type("PipeAwareInterface", _flowRuntime.default.object(_flowRuntime.default.property("acceptInputPipe", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.param("aoPipe", _flowRuntime.default.ref(PipeFittingInterface)), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("acceptOutputPipe", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.param("aoPipe", _flowRuntime.default.ref(PipeFittingInterface)), _flowRuntime.default.return(_flowRuntime.default.void())))));

exports.PipeAwareInterface = PipeAwareInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvUGlwZUF3YXJlSW50ZXJmYWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFlQTs7OztBQWZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlPLDJFQUE2Qiw0QkFDbEMsK0VBQWdCLHFDQUFRLDZCQUFSLENBQWhCLEVBQWdDLHFDQUFRLDhDQUFSLENBQWhDLDhCQUErRCwyQkFBL0QsR0FEa0MsRUFFbEMsZ0ZBQWlCLHFDQUFRLDZCQUFSLENBQWpCLEVBQWlDLHFDQUFRLDhDQUFSLENBQWpDLDhCQUFnRSwyQkFBaEUsR0FGa0MsQ0FBN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBMZWFuRVMuXG4vL1xuLy8gTGVhbkVTIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gTGVhbkVTIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIExlYW5FUy4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbmltcG9ydCB0eXBlIHsgUGlwZUZpdHRpbmdJbnRlcmZhY2UgfSBmcm9tICcuL1BpcGVGaXR0aW5nSW50ZXJmYWNlJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFBpcGVBd2FyZUludGVyZmFjZSB7XG4gIGFjY2VwdElucHV0UGlwZShhc05hbWU6IHN0cmluZywgYW9QaXBlOiBQaXBlRml0dGluZ0ludGVyZmFjZSk6IHZvaWQ7XG4gIGFjY2VwdE91dHB1dFBpcGUoYXNOYW1lOiBzdHJpbmcsIGFvUGlwZTogUGlwZUZpdHRpbmdJbnRlcmZhY2UpOiB2b2lkO1xufVxuIl19