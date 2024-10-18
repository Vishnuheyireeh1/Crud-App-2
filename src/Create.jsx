import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Create = () => {
    const [values,setValues] = useState({
        name:'',
        email:'',
        phone:''
    })
    const navigate = useNavigate();
    const handleSubmit =(event) =>{
        event.preventDefault();
        axios.post('http://localhost:3000/users',values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(res => console.log(res));
    }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
        <div className='center w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
            <h1>Add a User</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter Name' 
                    onChange={e => setValues({...values,username: e.target.value})}/>
                    
                </div>
                <div className='mb-2'>
                    <label htmlFor="name">Email:</label>
                    <input type="text" name='email' className='form-control' placeholder='Enter Email' 
                    onChange={e => setValues({...values,email: e.target.value})}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="name">Phone:</label>
                    <input type="text" name='phone' className='form-control' placeholder='Enter ph.no:' 
                    onChange={e => setValues({...values,phone: e.target.value})}/>
                </div>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Create