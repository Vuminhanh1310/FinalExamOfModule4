import mongoose from "mongoose";
declare const Employee: mongoose.Model<{
    employeeCode?: string;
    name?: string;
    age?: string;
    salary?: number;
    branch?: string;
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    employeeCode?: string;
    name?: string;
    age?: string;
    salary?: number;
    branch?: string;
}>>;
export default Employee;
