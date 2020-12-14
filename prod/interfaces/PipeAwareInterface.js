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