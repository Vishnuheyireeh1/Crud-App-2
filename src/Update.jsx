import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



const Update = () => {

    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/users/' + id)
        .then(res => setValues(res.data))
        .catch(res => console.log(res));
    },[])

    const [values,setValues] = useState({
        name:'',
        email:'',
        phone:''
    })
    const navigate =useNavigate();
    const handleUpload = (event) =>{
        event.preventDefault();
        axios.put('http://localhost:3000/users/' +id,values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(res => console.log(res));
    }
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-dark'>
    <div className='center w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpload}>
            <div className='mb-2'>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control' placeholder='Enter Name' value={values.username}
                 onChange={e => setValues({...values,username: e.target.value})} />
                
            </div>
            <div className='mb-2'>
                <label htmlFor="name">Email:</label>
                <input type="text" name='email' className='form-control' placeholder='Enter Email' value={values.email}
                onChange={e => setValues({...values,email: e.target.value})}/>
            </div>
            <div className='mb-2'>
                <label htmlFor="name">Phone:</label>
                <input type="text" name='phone' className='form-control' placeholder='Enter ph.no:' value={values.phone}
                onChange={e => setValues({...values,phone: e.target.value})}/>
            </div>
            <button className='btn btn-success'>Update</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
    </div>
    </div>
  )
}

export default Update