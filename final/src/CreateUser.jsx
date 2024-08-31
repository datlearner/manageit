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
    <div className=''>

        <div className=''>

            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className=''>

                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)}></input>

                </div>
                <div className=''>

                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)}></input>

                </div>

                <div className=''>

                    <label htmlFor=''>Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)}></input>

                </div>

                <button>Submit</button>

            </form>

        </div>
        
    </div>
  )
}
