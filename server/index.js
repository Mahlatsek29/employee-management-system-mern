const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeesModel = require('./models/Employees')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post('/createEmployee', (req, res) => {
    EmployeesModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})