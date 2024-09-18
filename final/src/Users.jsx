 
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import { useState } from 'react' // Import the useState hook
import { Link } from 'react-router-dom' // Import Link component from react-router-dom for navigation
import axios from 'axios'
import './style.css'
import { RiDeleteBinLine } from "react-icons/ri";
import { MdModeEditOutline } from "react-icons/md";

export const Users = () => {
    const [users, setUsers] = useState([]) // State to store the list of users

    useEffect(() => {
        axios.get('http://localhost:3000')
            .then(result => setUsers(result.data)) // Update the users state with the fetched data
            .catch(err => console.log(err))
    }, []) // Empty dependency array ensures this effect runs only once when the component mounts

    // Function to handle user deletion
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+ id) // Send DELETE request to remove the user with the specified id
        .then(res => {
            console.log(res) // Log the response to the console
            window.location.reload() // Reload the page to update the users list
        })
        .catch(err => console.log(err)) // Log any errors to the console
    }

    // Render the component
    return (
        <div className='content lg:w-full'> {/* Main container with responsive width class */}
            <div className='main'>
                <Link to={'/create'} className='px-3 rounded-md bg-red-500 text-white'>Add +</Link> {/* Link to the create user page */}
                <table className='tablee w-full p-2 rounded-xl'> {/* Table to display the list of users */}
                    <thead className='rounded-xl'> {/* Table header */}
                        <tr className='bg-blue-500 text-white'>
                            <th className='p-3'>Name</th>
                            <th className='p-3'>Email</th>
                            <th className='p-3'>Age</th>
                            <th className='p-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody> {/* Table body to display each user */}
                        {
                            users.map((user) => { // Map over the users array to create a row for each user
                                return (
                                    <tr key={user._id}> {/* Each row represents a user */}
                                        <td>{user.name}</td>
                                        <td className='p-2'>{user.email}</td>
                                        <td>{user.age}</td>
                                        <td className='flex justify-center m-3'>
                                            <Link to={`/update/${user._id}`} className='p-2 bg-yellow-300 rounded-lg mx-2'><MdModeEditOutline /></Link> {/* Link to the update user page */}
                                            <button onClick={() => handleDelete(user._id)} className='p-2 bg-gray-300 rounded-lg mx-2' ><RiDeleteBinLine /></button> {/* Button to delete the user */}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
