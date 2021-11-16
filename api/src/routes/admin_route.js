const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');
// get All Place
router.get('/places', adminController.getAllPlaces);  

//get all user
router.get('/users',adminController.getAllUsers);

// disable User
router.put('/disableuser/:id', adminController.disableUser);


module.exports = router;