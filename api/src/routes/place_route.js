const express = require('express');
const router = express.Router();

const placeController = require('../controllers/place_controller');

const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//get user by ID
router.get('/',[verifyToken.verifyToken,checkRole.isUser], placeController.getAllPlaceAndImages);



module.exports = router;