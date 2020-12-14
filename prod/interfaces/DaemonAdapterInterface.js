"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.serverAdapterInterface = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-server.
//
// leanes-server is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-server is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with leanes-server.  If not, see <https://www.gnu.org/licenses/>.
const serverAdapterInterface = _flowRuntime.default.type("serverAdapterInterface", _flowRuntime.default.object(_flowRuntime.default.property("_cleanType", _flowRuntime.default.string("adapter")), _flowRuntime.default.property("getName", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.string()))), _flowRuntime.default.property("setName", _flowRuntime.default.function(_flowRuntime.default.param("asName", _flowRuntime.default.string()), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("set", _flowRuntime.default.function(_flowRuntime.default.param("data", _flowRuntime.default.nullable(_flowRuntime.default.any())), _flowRuntime.default.return(_flowRuntime.default.void()))), _flowRuntime.default.property("get", _flowRuntime.default.function(_flowRuntime.default.return(_flowRuntime.default.nullable(_flowRuntime.default.any()))))));

exports.serverAdapterInterface = serverAdapterInterface;