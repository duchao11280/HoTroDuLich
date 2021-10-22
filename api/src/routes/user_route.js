const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
//get all user
router.get('/',userController.getAllUsers);

//get user by ID
router.get('/:id',userController.getUserByID);

//update user info
router.put('/:id',userController.updateUser);

module.exports = router;