const express = require('express');
const { showuser } = require('../controller/userController');



const router = express.Router()



// create router 
router.get('/api/v1/user', showuser)


// module export 
module.exports = {router}