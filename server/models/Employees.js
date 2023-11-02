const mongoose = require('mongoose')

const EmployeesSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    bio: String, 
    dateofbirth: Number,
    employeeposition: String,
    phonenumber: Number,
})

const EmployeesModel = mongoose.model("Employee", EmployeesSchema)
module.exports = EmployeesModel