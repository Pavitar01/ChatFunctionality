const express = require('express');
const { CreateUserController } = require('../Controllers/UserController');

const UserRoutes=express.Router();


UserRoutes.post("/create-user",CreateUserController);



module.exports={UserRoutes}