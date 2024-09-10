/* eslint-disable no-unused-vars */ 
// Disables the ESLint rule that warns about unused variables

import React, { useState } from 'react'; 

import axios from 'axios'; 

import { useNavigate } from 'react-router-dom'; 
// Imports the useNavigate hook from react-router-dom for programmatic navigation

export const CreateUser = () => { 
    // Defines a functional component named CreateUser

    const [name, setName] = useState(); 
    // Initializes a state variable 'name' and its setter 'setName' using useState

    const [email, setEmail] = useState(); 
    // Initializes a state variable 'email' and its setter 'setEmail'

    const [age, setAge] = useState(); 
    // Initializes a state variable 'age' and its setter 'setAge'

    const navigate = useNavigate(); 
    // Initializes the 'navigate' function to allow navigation between routes

    const Submit = (e) => { 
        // Defines the Submit function which handles the form submission
        e.preventDefault(); 
        // Prevents the default form submission behavior (i.e., page reload)

        axios.post('http://localhost:3000/createUser', { name, email, age }) 
        // Sends a POST request to the server with the user's name, email, and age

        .then(result => { 
            // If the request is successful, do the following
            console.log(result); 
            // Logs the result of the request in the console

            navigate('/'); 
            // Navigates the user back to the home page
        })

        .catch(err => console.log(err)); 

    };

    return (
        <div className='grid place-items-center align-middle h-96 sm:w-20 '>
            {/* Centers the form container on the screen using grid layout */}

            <div className='border w-96 p-5 '>
                {/* Creates a bordered container for the form with padding */}

                <form onSubmit={Submit}>
                    {/* The form element, on submission it calls the Submit function */}

                    <h2 className='p-3 border rounded-xl text-center text-blue-500 font-semibold'>
                        Add User
                    </h2>
                    {/* Displays the form heading */}

                    <div className=''>
                        <label htmlFor='' className='py-4 '>Name</label>
                        {/* Label for the name input field */}

                        <input type='text' placeholder='Enter Name' 
                        className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' 
                        onChange={(e) => setName(e.target.value)}>
                        </input>
                        {/* Input field for name. Updates the 'name' state on change */}
                    </div>

                    <div className=''>
                        <label htmlFor=''>Email</label>
                        {/* Label for the email input field */}

                        <input type='email' placeholder='Enter Email' 
                        className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' 
                        onChange={(e) => setEmail(e.target.value)}>
                        </input>
                        {/* Input field for email. Updates the 'email' state on change */}
                    </div>

                    <div className=''>
                        <label htmlFor=''>Age</label>
                        {/* Label for the age input field */}

                        <input type='text' placeholder='Enter Age' 
                        className='form-control w-full bg-slate-200 rounded p-1 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 my-2' 
                        onChange={(e) => setAge(e.target.value)}>
                        </input>
                        {/* Input field for age. Updates the 'age' state on change */}
                    </div>

                    <button className='bg-green-500 rounded-md my-4 text-white p-1 w-32'>
                        Submit
                    </button>
                    {/* Submit button for the form */}
                </form>
            </div>
        </div>
    );
};
