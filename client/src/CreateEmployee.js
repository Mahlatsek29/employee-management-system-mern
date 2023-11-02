import React, {useState} from 'react';
import axios from 'axios'

function CreateEmployee() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()
    const [email, setEmail] = useState()
    const [bio, setBio] = useState()
    const [dateofbirth, setDateofbirth] = useState()
    const [employeeposition, setEmployeeposition] = useState()
    const [phonenumber, setPhonenumber] = useState()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createEmployee", {name, surname, email, bio, dateofbirth, employeeposition, phonenumber})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-90 bg-whte rounded-p-3'>  
        <form onSubmit={Submit}>
            <h2> Add Employee</h2>
            <div className='mb-2'>
                <input type='text' placeholder='Enter Name' className='form-control'
                onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='Surname'></label>
                <input type='surname' placeholder='Enter Surname' className='form-control/'
                  onChange={(e) => setSurname(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='Email'></label>
                <input type='email' placeholder='Enter Email' className='form-control/'
                  onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='Bio'></label>
                <input type='text' placeholder='Enter Bio' className='form-control/'
                 onChange={(e) => setBio(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='DateOfBirth'></label>
                <input type='text' placeholder='Enter Date of Birth' className='form-control/'
                 onChange={(e) => setDateofbirth(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='EmployeePosition'></label>
                <input type='text' placeholder='Enter Employee Position' className='form-control/'
                 onChange={(e) => setEmployeeposition(e.target.value)}/>
            </div>
            <div className='mb-2'>
                <label htmlFor='PhoneNumber'></label>
                <input type='text' placeholder='Enter Phone Number' className='form-control/'
                 onChange={(e) => setPhonenumber(e.target.value)}/>
            </div>
            <button className='btn btn-sucess'>Submit</button>
        </form>

        </div>
     
    </div>
  )
}

export default CreateEmployee
