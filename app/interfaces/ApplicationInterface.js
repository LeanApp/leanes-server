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