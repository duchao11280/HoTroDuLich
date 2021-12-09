const express = require('express');
const router = express.Router();


const restaurantController = require('../controllers/restaurant_controller')
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//get all table by userID
router.get('/table/:id', [verifyToken.verifyToken, checkRole.isRestaurant], restaurantController.getAllTableByUserID);

// add table
router.post('/table/addnew', [verifyToken.verifyToken, checkRole.isRestaurant],
    restaurantController.addNewTable)

// update table
router.put('/table/updatetable/:id', [verifyToken.verifyToken, checkRole.isRestaurant],
    restaurantController.updateTable)

// disalbe table
router.put('/table/disable/:id', [verifyToken.verifyToken, checkRole.isRestaurant],
    restaurantController.disableTable)

router.get('/places', [verifyToken.verifyToken, checkRole.isRestaurant],
    restaurantController.getAllPlace)

module.exports = router;