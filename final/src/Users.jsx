/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err))
    }, [])
    
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+ id)
        .then(res => {console.log(res)
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='bg-blue-500'>


        <div>
            <Link to={'/create'}>Add +</Link>
            <table className='border p-5'>
                <thead>
                    <tr className='border'>
                        <th className='p-3'>Name</th>
                        <th className='p-3'>Email</th>
                        <th className='p-3'>Age</th>
                        <th className='p-3'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            
                            return <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                
                                <td>
                                <Link to={`/update/${user._id}`}>Update</Link>
                                <button onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>


      
    </div>
  )
}