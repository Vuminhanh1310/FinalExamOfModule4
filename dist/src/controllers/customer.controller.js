"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const employee_schema_1 = __importDefault(require("../models/schemas/employee.schema"));
class customerController {
    static async showHomeCreateCustomer(req, res) {
        res.render('creteCustomer');
    }
    static async createEmployee(req, res) {
        const data = {
            employeeCode: req.body.code,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        };
        const newEmployee = new employee_schema_1.default(data);
        await newEmployee.save();
        res.redirect('/employee/list');
    }
    static async showList(req, res) {
        const customer = await employee_schema_1.default.find();
        res.render('listEmployee', { data: customer });
    }
    static async deleteCustomer(req, res) {
        let id = req.query.id;
        await employee_schema_1.default.deleteOne({
            _id: `${id}`
        });
        res.redirect('/employee/list');
    }
    static async showFormEditEmployee(req, res) {
        let id = req.query.id;
        const employeeSelect = await employee_schema_1.default.findOne({
            _id: id
        });
        res.render('editEmployee', { data: employeeSelect });
    }
    static async editEmployee(req, res) {
        let id = req.body.id;
        await employee_schema_1.default.updateOne({ _id: id }, {
            employeeCode: req.body.code,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        });
        res.redirect('/employee/list');
    }
    static async showDetailOfEmployee(req, res) {
        let id = req.query.id;
        let dataOfEmployee = await employee_schema_1.default.findById(id);
        res.render('detailEmployee', { data: dataOfEmployee });
    }
}
exports.customerController = customerController;
exports.default = new customerController();
//# sourceMappingURL=customer.controller.js.map