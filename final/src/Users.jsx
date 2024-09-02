/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";


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
    <div className='content lg:w-full'>


        <div className='main'>
            <Link to={'/create'} className='px-3 rounded-md bg-red-500 text-white'>Add +</Link>
            <table className='tablee w-full p-2 rounded-xl'>
                <thead className='rounded-xl'>
                    <tr className='bg-blue-500 text-white'>
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
                                <td className='p-2'>{user.email}</td>
                                <td>{user.age}</td>
                                
                                <td className='flex justify-center m-3'>
                                <Link to={`/update/${user._id}`} className='p-2 bg-yellow-300 rounded-lg mx-2'><MdModeEditOutline /></Link>
                                <button onClick={(e) => handleDelete(user._id)} className='p-2 bg-gray-300 rounded-lg mx-2' ><RiDeleteBinLine /></button>
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