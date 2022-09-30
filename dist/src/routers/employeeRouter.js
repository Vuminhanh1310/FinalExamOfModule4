"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = void 0;
const express_1 = require("express");
const employee_controller_1 = __importDefault(require("../controllers/employee.controller"));
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
exports.employeeRouter = (0, express_1.Router)();
exports.employeeRouter.get('/', employee_controller_1.default.getAllEmployee);
//# sourceMappingURL=employeeRouter.js.map