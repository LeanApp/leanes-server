"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.CursorInterface = void 0;

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
// import type { CollectionInterface } from './CollectionInterface';
const CursorInterface = _flowRuntime.default.type("CursorInterface", CursorInterface => {
  const Collection = CursorInterface.typeParameter("Collection"),
        Delegate = CursorInterface.typeParameter("Delegate"),
        Iterable = CursorInterface.typeParameter("Iterable", undefined, _flowRuntime.default.array(_flowRuntime.default.nullable(_flowRuntime.default.ref("object"))));
  return _flowRuntime.default.object(_flowRuntime.default.property("isClosed", _flowRuntime.default.boolean()), _flowRuntime.default.property("setCollection", _flowRuntime.default.function(_flowRuntime.default.param("aoCollection", Collection), _flowRuntime.default.return(CursorInterface))), _flowRuntime.default.property("setIterable", _flowRuntime.default.function(_flowRuntime.default.param("alArray", Iterable), _flowRuntime.default.return(CursorInterface))), _flowRuntime.default.property("toArray", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.array(_flowRuntime.default.nullable(Delegate)))))), _flowRuntime.default.property("next", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(Delegate))))), _flowRuntime.default.property("hasNext", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.boolean())))), _flowRuntime.default.property("close", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("count", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.number())))), _flowRuntime.default.property("forEach", _flowRuntime.default.function(_flowRuntime.default.param("lambda", _flowRuntime.default.function(_flowRuntime.default.param("_arg0", Delegate), _flowRuntime.default.param("_arg1", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.ref("Promise", _flowRuntime.default.void()))))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("map", _flowRuntime.default.function(_fn => {
    const R = _fn.typeParameter("R");

    return [_flowRuntime.default.param("lambda", _flowRuntime.default.function(_flowRuntime.default.param("_arg0", Delegate), _flowRuntime.default.param("_arg1", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.union(R, _flowRuntime.default.ref("Promise", R))))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.array(R)))];
  })), _flowRuntime.default.property("filter", _flowRuntime.default.function(_flowRuntime.default.param("lambda", _flowRuntime.default.function(_flowRuntime.default.param("_arg0", Delegate), _flowRuntime.default.param("_arg1", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.boolean(), _flowRuntime.default.ref("Promise", _flowRuntime.default.boolean()))))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.array(_flowRuntime.default.nullable(Delegate)))))), _flowRuntime.default.property("find", _flowRuntime.default.function(_flowRuntime.default.param("lambda", _flowRuntime.default.function(_flowRuntime.default.param("_arg0", Delegate), _flowRuntime.default.param("_arg1", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.union(_flowRuntime.default.boolean(), _flowRuntime.default.ref("Promise", _flowRuntime.default.boolean()))))), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(Delegate))))), _flowRuntime.default.property("compact", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.array(_flowRuntime.default.nullable(Delegate)))))), _flowRuntime.default.property("reduce", _flowRuntime.default.function(_fn2 => {
    const I = _fn2.typeParameter("I");

    return [_flowRuntime.default.param("lambda", _flowRuntime.default.function(_flowRuntime.default.param("_arg0", I), _flowRuntime.default.param("_arg1", Delegate), _flowRuntime.default.param("_arg2", _flowRuntime.default.number()), _flowRuntime.default.return(_flowRuntime.default.union(I, _flowRuntime.default.ref("Promise", I))))), _flowRuntime.default.param("initialValue", I), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", I))];
  })), _flowRuntime.default.property("first", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.nullable(Delegate))))));
});

exports.CursorInterface = CursorInterface;