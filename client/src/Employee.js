import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



function Employee() {
  const [employees, setEmployees] = useState([
    {
      Name: "Kenosi",
      Surname: "Seth",
      Email: "keno@gmail.com",
      Bio: "Lover of life",
      DateOfBirth: "1999",
      EmployeePosition: "Intern",
      PhoneNumber: "0123456789",
    },
  ]);

  useEffect(()=> {
    axios.get('http://localhost:3001')
    .then(result => setEmployees(result.data))
    .catch(err => console.log(err))
  },[])

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-90 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Bio</th>
              <th>Date of Birth</th>
              <th>Employee Position</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr>
                  <td>{employee.Name}</td>
                  <td>{employee.Surname}</td>
                  <td>{employee.Email}</td>
                  <td>{employee.Bio}</td>
                  <td>{employee.DateOfBirth}</td>
                  <td>{employee.EmployeePosition}</td>
                  <td>{employee.PhoneNumber}</td>
                  <td>
                  <Link to="/update" className="btn btn-success">Update</Link>
                    <button>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employee;
