"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const multer_1 = __importDefault(require("multer"));
const customer_controller_1 = require("../controllers/customer.controller");
const upload = (0, multer_1.default)();
router.get('/create', (req, res, next) => {
    customer_controller_1.customerController.showHomeCreateCustomer(req, res).catch(err => {
        next(err);
    });
});
router.post('/create', upload.none(), (req, res, next) => {
    customer_controller_1.customerController.createCustomer(req, res).catch(err => {
        next(err);
    });
});
router.get('/list', async (req, res, next) => {
    customer_controller_1.customerController.showList(req, res).catch(err => {
        next(err);
    });
});
router.get('/delete', async (req, res, next) => {
    customer_controller_1.customerController.deleteCustomer(req, res).catch(err => {
        next(err);
    });
});
router.get('/edit', async (req, res, next) => {
    customer_controller_1.customerController.showFormEditCustomer(req, res).catch(err => {
        next(err);
    });
});
router.post('/edit', upload.none(), async (req, res, next) => {
    customer_controller_1.customerController.editCustomer(req, res).catch(err => {
        next(err);
    });
});
exports.default = router;
//# sourceMappingURL=customer.router.js.map