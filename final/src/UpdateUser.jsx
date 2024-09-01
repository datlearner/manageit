/* eslint-disable no-unused-vars */
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export const UpdateUser = () => {
    const {id} = useParams()
    const [name, setName] = useState();
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3000/getUser/'+ id)
            .then(result => {console.log(result)
                setName(result.data.name)
                setEmail(result.data.email)
                setAge(result.data.age)
            })
            .catch(err => console.log(err))
    }, [id]) 

    const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/updateUser/' + id, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='grid place-items-center align-middle h-96 sm:w-20 '>

    <div className='border w-96 p-5 '>

        <form onSubmit={Update}>
            <h2 className='p-3 border rounded-xl text-center text-blue-500 font-semibold'>Update User +</h2>
            <div className=''>

                <label htmlFor='' className='py-4 '>Name</label>
                <input type='text' placeholder='Enter Name' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' value={name} onChange={(e) => setName(e.target.value)} />

            </div>
            <div className=''>

                <label htmlFor=''>Email</label>
                <input type='email' placeholder='Enter Email' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' value={email} onChange={(e) => setEmail(e.target.value)} />

            </div>

            <div className=''>

                <label htmlFor=''>Age</label>
                <input type='text' placeholder='Enter Age' className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' value={age} onChange={(e) => setAge(e.target.value)} />

            </div>

            <button className='bg-pink-500 rounded-md my-4 text-white p-1 w-32'>Update</button>

        </form>

    </div>
    
</div>
  )
} 
