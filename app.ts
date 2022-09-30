import express from "express";

import bodyParser from "body-parser";

import mongoose from "mongoose";
import employeeRouter from "./src/router/employee.router";



const PORT = 8080;

const app = express();

app.set("view engine", "ejs");

app.set('views', './src/views');

const DB_URL = 'mongodb://localhost:27017/dbtest';

mongoose.connect(DB_URL)

    .then(() => console.log('DB Connected!'))

    .catch(error => console.log('DB connection error:', error.message));

app.use(bodyParser.json());

app.use('/employee',employeeRouter)


app.listen(PORT, () => {

    console.log('app running on http://localhost:' + PORT)

    console.log('access immediately http://localhost:' + PORT + '/employee/list')

})