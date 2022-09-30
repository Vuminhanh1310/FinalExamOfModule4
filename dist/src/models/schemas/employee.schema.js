"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const employeeSchema = new mongoose_1.default.Schema({
    employeeCode: String,
    name: String,
    age: String,
    salary: Number,
    branch: String
});
const Employee = mongoose_1.default.model("Employees", employeeSchema);
exports.default = Employee;
//# sourceMappingURL=employee.schema.js.map