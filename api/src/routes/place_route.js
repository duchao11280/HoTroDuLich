const express = require('express');
const router = express.Router();

const placeController = require('../controllers/place_controller');




//get user by ID
router.get('/', placeController.getAllPlaceAndImages);



module.exports = router;