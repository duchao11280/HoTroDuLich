const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');
const verifySignUp = require('../middleware/verifySignUp');
const verifyChangePassword = require("../middleware/verifyChangePassword")
const feedbackController = require('../controllers/feedback_controller')
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//get user by ID
router.get('/:id', [verifyToken.verifyToken, checkRole.isUser], userController.getUserByID);

//update user info
router.put('/:id', [verifyToken.verifyToken, checkRole.isUser], userController.updateUser);

// signup
router.post('/signup', verifySignUp.verifyUserName, userController.signUp);

// change password
router.put("/changepassword/:id", [verifyToken.verifyToken, checkRole.isUser], verifyChangePassword.verifyPassword, userController.changePassword);

///Login
router.post("/login", userController.login)

router.post('/sendfeedback/:id',
    [verifyToken.verifyToken, checkRole.isUser],
    feedbackController.addNewFeedback)




module.exports = router;