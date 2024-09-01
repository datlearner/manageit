/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [age, setAge] = useState()

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/createUser', {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='grid place-items-center align-middle h-96 sm:w-20 '>

        <div className='border w-96 p-5 '>

            <form onSubmit={Submit}>
                <h2 className='p-3 border rounded-xl text-center text-blue-500 font-semibold'>Add User</h2>
                <div className=''>

                    <label htmlFor='' className='py-4 '>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' onChange={(e) => setName(e.target.value)}></input>

                </div>
                <div className=''>

                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' onChange={(e) => setEmail(e.target.value)}></input>

                </div>

                <div className=''>

                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' onChange={(e) => setAge(e.target.value)}></input>

                </div>

                <button className='bg-green-500 rounded-md my-4 text-white p-1 w-32'>Submit</button>

            </form>

        </div>
        
    </div>
  )
}
