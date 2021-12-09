const express = require('express');
const router = express.Router();

const placeController = require('../controllers/place_controller');

const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//get All Place
router.get('/',[verifyToken.verifyToken,checkRole.isUser], placeController.getAllPlaceAndImages);
// get place id and name
router.get('/idandname',[verifyToken.verifyToken,checkRole.isUser],placeController.getAllPlaceIDandName)

module.exports = router;