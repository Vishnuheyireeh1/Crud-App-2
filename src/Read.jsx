import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Read = () => {
    const [data,setData] = useState([])
    const {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3000/users/' + id)
        .then(res => setData(res.data))
        .catch(res => console.log(res));
    },[])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-dark'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
            <strong>Name: {data.username}</strong>
        </div>
        <div className='mb-2'>
            <strong>Email id: {data.email}</strong>
        </div>
        <div className='mb-2'>
            <strong>Phone no.: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </div>
    </div>
  )
}

export default Read