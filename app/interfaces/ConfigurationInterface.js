"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ConfigurationInterface = void 0;

var _flowRuntime = _interopRequireDefault(require("flow-runtime"));

// This file is part of leanes-configurable-addon.
//
// leanes-configurable-addon is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// leanes-configurable-addon is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with leanes-configurable-addon.  If not, see <https://www.gnu.org/licenses/>.
const ConfigurationInterface = _flowRuntime.default.type("ConfigurationInterface", _flowRuntime.default.object(_flowRuntime.default.property("_configI", _flowRuntime.default.string("ConfigurationInterface")), _flowRuntime.default.property("root", _flowRuntime.default.string()), _flowRuntime.default.property("environment", _flowRuntime.default.string()), _flowRuntime.default.property("name", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("description", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("license", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("version", _flowRuntime.default.nullable(_flowRuntime.default.string())), _flowRuntime.default.property("keywords", _flowRuntime.default.nullable(_flowRuntime.default.array(_flowRuntime.default.string()))), _flowRuntime.default.property("manifestPath", _flowRuntime.default.string()), _flowRuntime.default.property("configPath", _flowRuntime.default.string())));

exports.ConfigurationInterface = ConfigurationInterface;