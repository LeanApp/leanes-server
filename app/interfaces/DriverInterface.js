"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DriverInterface = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-mapper-addon.
//
// leanes-mapper-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-mapper-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-mapper-addon.  If not, see <https://www.gnu.org/licenses/>.
const DriverInterface = _flowRuntime.default.type("DriverInterface", DriverInterface => {
  const R = DriverInterface.typeParameter("R"),
        T = DriverInterface.typeParameter("T"),
        A = DriverInterface.typeParameter("A", undefined, _flowRuntime.default.array(_flowRuntime.default.nullable(T)));
  return _flowRuntime.default.object(_flowRuntime.default.property("_cleanType", _flowRuntime.default.string("adapter")), _flowRuntime.default.property("getName", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("setName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("push", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("aoRecord", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", T)))), _flowRuntime.default.property("remove", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("id", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("take", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("id", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(T))))), _flowRuntime.default.property("takeMany", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("ids", _flowRuntime.default.array(_flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number()))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", A)))), _flowRuntime.default.property("takeAll", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", A)))), _flowRuntime.default.property("override", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("id", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.param("aoRecord", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", T)))), _flowRuntime.default.property("includes", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.param("id", _flowRuntime.default.union(_flowRuntime.default.string(), _flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.boolean())))), _flowRuntime.default.property("length", _flowRuntime.default.function(_flowRuntime.default.param("delegate", R), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.number())))));
});

exports.DriverInterface = DriverInterface;