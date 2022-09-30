
import mongoose, {Schema} from "mongoose";

const employeeSchema = new mongoose.Schema({
     employeeCode: String,
     name: String,
     age: String,
     salary: Number,
     branch: String
})

const Employee  = mongoose.model("Employees", employeeSchema )

export default Employee ;