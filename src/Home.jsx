import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(res => console.log(res));
    },[])
    const navigate = useNavigate();
    const handleDelete = (id) => {
        const confirm = window.confirm("Confir To Delete the User");
        if(confirm){
            axios.delete('http://localhost:3000/users/' + id)
            .then(res=>{
                navigate ('/')
            })
            .catch(err=>console.log(err));
        }
    }
  return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-dark vh-100'>
            <h1 className='text-light'>List of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                    </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data,index)=>(
                            <tr key={data.id}>
                                <td>{index + 1}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <Link to={`/read/${data.id}`} className='btn btn-sm btn-success me-2'>Read</Link>
                                    <Link to={`/update/${data.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={e => handleDelete(data.id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
  )
}

export default Home