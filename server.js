const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {router} = require('./routers/userRoute')

// init express 
const app = express();


// invairenment variable 
const PORT = process.env.PORT || 4000;

// Manege Json data and from data 
app.use(express.json())
app.use(express.urlencoded( {extended : false } ) );

// startic folder
app.use(express.static('public'));


// Router 
app.use('/', router)

// App listen 
app.listen(PORT , () => {
    console.log(` Your server is running on port ${PORT}`.bgGreen.black);
})