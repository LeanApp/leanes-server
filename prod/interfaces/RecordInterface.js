"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.RecordInterface = void 0;

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
// import type { RecordStaticInterface } from './RecordStaticInterface';
const RecordInterface = _flowRuntime.default.type("RecordInterface", RecordInterface => {
  return _flowRuntime.default.object(_flowRuntime.default.property("parseRecordName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.tuple(_flowRuntime.default.string(), _flowRuntime.default.string())))), _flowRuntime.default.property("findRecordByName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.Class(_flowRuntime.default.existential())))), _flowRuntime.default.property("save", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("create", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("update", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("delete", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.union(_flowRuntime.default.void(), RecordInterface))))), _flowRuntime.default.property("destroy", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("attributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("object")))), _flowRuntime.default.property("clone", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("copy", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("decrement", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.param("step", _flowRuntime.default.nullable(_flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("increment", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.param("step", _flowRuntime.default.nullable(_flowRuntime.default.number())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("toggle", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("updateAttribute", _flowRuntime.default.function(_flowRuntime.default.param("name", _flowRuntime.default.string()), _flowRuntime.default.param("value", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("updateAttributes", _flowRuntime.default.function(_flowRuntime.default.param("aoAttributes", _flowRuntime.default.ref("object")), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("isNew", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.boolean())))), _flowRuntime.default.property("reload", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", RecordInterface)))), _flowRuntime.default.property("changedAttributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.object(_flowRuntime.default.indexer("key", _flowRuntime.default.string(), _flowRuntime.default.tuple(_flowRuntime.default.nullable(_flowRuntime.default.any()), _flowRuntime.default.nullable(_flowRuntime.default.any())))))))), _flowRuntime.default.property("resetAttribute", _flowRuntime.default.function(_flowRuntime.default.param("asAttribute", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))), _flowRuntime.default.property("rollbackAttributes", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.ref("Promise", _flowRuntime.default.void())))));
});

exports.RecordInterface = RecordInterface;