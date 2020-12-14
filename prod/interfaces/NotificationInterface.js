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