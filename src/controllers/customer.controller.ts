import { Request, Response} from 'express';

import Employee from "../models/schemas/employee.schema";

export class customerController {

    static async showHomeCreateCustomer(req: Request, res: Response) {
        res.render('creteCustomer');
    }
    
    static async createEmployee(req: Request, res: Response) {
        const data = {
            employeeCode: req.body.code,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        }
        const newEmployee = new Employee(data)
        await newEmployee.save();
        // console.log(newEmployee);
        res.redirect('/employee/list')
    }
    static async showList(req: Request, res: Response) { 
        const customer = await Employee.find()
        // console.log(customer);
        
          res.render('listEmployee', {data: customer});
    }
    static async deleteCustomer(req: Request, res: Response) { 
        let id = req.query.id
        // console.log(id);
        await Employee.deleteOne({
            _id: `${id}`
        });
        res.redirect('/employee/list');
    }
    static async showFormEditEmployee(req: Request, res: Response) {
        let id = req.query.id
        // console.log(id);
        const employeeSelect = await Employee.findOne({
            _id: id
        });
        // console.log(employeeSelect);
          res.render('editEmployee', {data: employeeSelect});
    }
    static async editEmployee(req: Request, res: Response) {
        let id = req.body.id
        await Employee.updateOne({_id: id}, {
            employeeCode: req.body.code,
            name: req.body.name,
            age: req.body.age,
            salary: req.body.salary,
            branch: req.body.branch
        })
        res.redirect('/employee/list')
    }

    static async showDetailOfEmployee(req: Request, res: Response) {
        let id = req.query.id
        let dataOfEmployee = await Employee.findById(id);
        res.render('detailEmployee',{data: dataOfEmployee})
    }

}

export default new customerController();