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