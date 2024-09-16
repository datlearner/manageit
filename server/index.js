const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const UserModel = require('../server/models/Users')

const app = express(); // Create an express application

app.use(cors()); // Enable CORS for all routes

app.use(express.json()); // Parse incoming JSON requests

mongoose.connect('mongodb://localhost:27017/crud') // Connect to the MongoDB database

// Define a route to fetch all users
app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users)) // Send the found users as JSON
    .catch(err => res.json(err)) // Handle any errors by sending them as JSON
})

// Define a route to fetch a specific user by ID
app.get('/getUser/:id', (req,res) => {
    const id = req.params.id; // Extract the user ID from the URL parameters
    UserModel.findById({_id:id})
    .then(users => res.json(users)) 
    .catch(err => res.json(err))
})

// Define a route to update a user by ID
app.put('/updateUser/:id',  (req,res) => {
    const id = req.params.id; 
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        email: req.body.email,
        age: req.body.age}) 
        .then(users => res.json(users)) 
        .catch(err => res.json(err)) 
})

// Define a route to create a new user
app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

// Define a route to delete a user by ID
app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log('server is running')
})
