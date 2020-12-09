"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ApplicationInterface = void 0;

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
// import type { ResourceInterface } from './ResourceInterface';
// import type { ContextInterface } from './ContextInterface';
const ApplicationInterface = _flowRuntime.default.type("ApplicationInterface", _flowRuntime.default.object(_flowRuntime.default.property("isLightweight", _flowRuntime.default.boolean()), _flowRuntime.default.property("name", _flowRuntime.default.string()), _flowRuntime.default.property("start", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("finish", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("run", _flowRuntime.default.function(_fn => {
  const T = _fn.typeParameter("T", undefined, _flowRuntime.default.any()),
        R = _fn.typeParameter("R", undefined, _flowRuntime.default.any());

  return [_flowRuntime.default.param("scriptName", _flowRuntime.default.string()), _flowRuntime.default.param("data", T), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", R))];
}))));

exports.ApplicationInterface = ApplicationInterface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvQXBwbGljYXRpb25JbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTywrRUFBK0IsNEJBQ3BDLCtDQUFlLDhCQUFmLENBRG9DLEVBRXBDLHNDQUFNLDZCQUFOLENBRm9DLEVBSXBDLGlHQUFTLDJCQUFULEdBSm9DLEVBS3BDLGtHQUFVLG9DQUFRLDJCQUFSLENBQVYsR0FMb0MsRUFPcEM7QUFBQSw4Q0FDTSwwQkFETjtBQUFBLDhDQUNlLDBCQURmOztBQUFBLFVBRUUseUNBQVksNkJBQVosQ0FGRixFQUVzQixtQ0FBTSxDQUFOLENBRnRCLDhCQUVnQyxvQ0FBUSxDQUFSLENBRmhDO0FBQUEsR0FQb0MsQ0FBL0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgcGFydCBvZiBMZWFuRVMuXG4vL1xuLy8gTGVhbkVTIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gTGVhbkVTIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4vLyBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuLy8gTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuLy8gR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4vL1xuLy8gWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4vLyBhbG9uZyB3aXRoIExlYW5FUy4gIElmIG5vdCwgc2VlIDxodHRwczovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG5cbi8vIGltcG9ydCB0eXBlIHsgUmVzb3VyY2VJbnRlcmZhY2UgfSBmcm9tICcuL1Jlc291cmNlSW50ZXJmYWNlJztcbi8vIGltcG9ydCB0eXBlIHsgQ29udGV4dEludGVyZmFjZSB9IGZyb20gJy4vQ29udGV4dEludGVyZmFjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGljYXRpb25JbnRlcmZhY2Uge1xuICBpc0xpZ2h0d2VpZ2h0OiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgc3RhcnQoKTogdm9pZDtcbiAgZmluaXNoKCk6IFByb21pc2U8dm9pZD47XG5cbiAgcnVuPFxuICAgIFQgPSBhbnksIFIgPSBhbnlcbiAgPihzY3JpcHROYW1lOiBzdHJpbmcsIGRhdGE6IFQpOiBQcm9taXNlPFI+O1xufVxuIl19