import express from "express";
import { Router, Request, Response } from 'express';
const employeeRouter = express.Router();
import multer from 'multer';
import Customer from "../models/schemas/employee.schema";

import { customerController } from '../controllers/customer.controller'


const upload = multer();

employeeRouter.get('/create', (req, res, next) => {
    customerController.showHomeCreateCustomer(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.post('/create', upload.none(), (req, res, next) => {
    customerController.createEmployee(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.get('/list', async (req, res, next) => {
    customerController.showList(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.get('/delete', async (req, res, next) => {
    customerController.deleteCustomer(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.get('/edit', async (req, res, next) => {
    customerController.showFormEditEmployee(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.post('/edit', upload.none(), async (req, res, next) => {
    customerController.editEmployee(req, res).catch(err => {
        next(err);
    });
});
employeeRouter.get('/detail', async (req, res, next) => {
    customerController.showDetailOfEmployee(req, res).catch(err => {
        next(err);
    })
})

export default employeeRouter;