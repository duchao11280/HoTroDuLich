const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
const verifySignUp = require('../midleware/verifySignUp');
const verifyChangePassword = require("../midleware/verifyChangePassword")



//get user by ID
router.get('/:id', userController.getUserByID);

//update user info
router.put('/:id', userController.updateUser);

// signup
router.post('/signup', verifySignUp.verifyUserName, userController.signUp);

// change password
router.put("/changePassword/:id", verifyChangePassword.verifyPassword, userController.changePassword);

///Login
router.post("/login", userController.login)




module.exports = router;