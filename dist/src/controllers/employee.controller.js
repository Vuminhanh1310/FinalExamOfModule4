"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_schema_1 = __importDefault(require("../models/schemas/employee.schema"));
class EmployeeController {
    async getAllEmployee(req, res) {
        try {
            const employeeList = await employee_schema_1.default.find();
            res.render('list', { DataEmployeeList: employeeList });
        }
        catch (error) {
            res.render(error);
        }
    }
}
exports.default = new EmployeeController();
//# sourceMappingURL=employee.controller.js.map