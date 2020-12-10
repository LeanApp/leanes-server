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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvQ29uZmlndXJhdGlvbkludGVyZmFjZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sbUZBQWlDLDRCQUN0QywwQ0FBVSxxREFBVixDQURzQyxFQUd0QyxzQ0FBTSw2QkFBTixDQUhzQyxFQUt0Qyw2Q0FBYSw2QkFBYixDQUxzQyxFQU90QyxzQ0FBTSw4QkFBQyw2QkFBRCxDQUFOLENBUHNDLEVBU3RDLDZDQUFhLDhCQUFDLDZCQUFELENBQWIsQ0FUc0MsRUFXdEMseUNBQVMsOEJBQUMsNkJBQUQsQ0FBVCxDQVhzQyxFQWF0Qyx5Q0FBUyw4QkFBQyw2QkFBRCxDQUFULENBYnNDLEVBZXRDLDBDQUFVLDhCQUFDLHlEQUFELENBQVYsQ0Fmc0MsRUFpQnRDLDhDQUFjLDZCQUFkLENBakJzQyxFQW1CdEMsNENBQVksNkJBQVosQ0FuQnNDLENBQWpDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBmaWxlIGlzIHBhcnQgb2YgbGVhbmVzLWNvbmZpZ3VyYWJsZS1hZGRvbi5cbi8vXG4vLyBsZWFuZXMtY29uZmlndXJhYmxlLWFkZG9uIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbi8vIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuLy8gdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3Jcbi8vIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4vL1xuLy8gbGVhbmVzLWNvbmZpZ3VyYWJsZS1hZGRvbiBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuLy8gYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2Zcbi8vIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbi8vIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuLy9cbi8vIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuLy8gYWxvbmcgd2l0aCBsZWFuZXMtY29uZmlndXJhYmxlLWFkZG9uLiAgSWYgbm90LCBzZWUgPGh0dHBzOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uSW50ZXJmYWNlIHtcbiAgX2NvbmZpZ0k6ICdDb25maWd1cmF0aW9uSW50ZXJmYWNlJztcblxuICByb290OiBzdHJpbmc7XG5cbiAgZW52aXJvbm1lbnQ6IHN0cmluZztcblxuICBuYW1lOiA/c3RyaW5nO1xuXG4gIGRlc2NyaXB0aW9uOiA/c3RyaW5nO1xuXG4gIGxpY2Vuc2U6ID9zdHJpbmc7XG5cbiAgdmVyc2lvbjogP3N0cmluZztcblxuICBrZXl3b3JkczogP3N0cmluZ1tdO1xuXG4gIG1hbmlmZXN0UGF0aDogc3RyaW5nO1xuXG4gIGNvbmZpZ1BhdGg6IHN0cmluZztcbn1cbiJdfQ==