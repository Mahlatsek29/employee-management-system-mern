import React from 'react'

function CreateEmployee() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-90 bg-whte rounded-p-3'>  
        <form>
            <h2> Add Employee</h2>
            <div className='mb-2'>
                <input type='text' placeholder='Enter Name' className='form-control'/>
            </div>
            <div className='mb-2'>
                <label htmlFor='Surname'></label>
                <input type='surname' placeholder='Enter Surname' className='form-control/'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='Email'></label>
                <input type='email' placeholder='Enter Email' className='form-control/'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='Bio'></label>
                <input type='text' placeholder='Enter Bio' className='form-control/'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='DateOfBirth'></label>
                <input type='text' placeholder='Enter Date of Birth' className='form-control/'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='EmployeePosition'></label>
                <input type='text' placeholder='Enter Employee Position' className='form-control/'></input>
            </div>
            <div className='mb-2'>
                <label htmlFor='PhoneNumber'></label>
                <input type='text' placeholder='Enter Phone Number' className='form-control/'></input>
            </div>
            <button className='btn btn-sucess'>Submit</button>
        </form>

        </div>
     
    </div>
  )
}

export default CreateEmployee
