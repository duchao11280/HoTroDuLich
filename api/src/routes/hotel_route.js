const express = require('express');
const router = express.Router();


const hotelController = require('../controllers/hotel_controller')
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//get all room by userID
router.get('/room/:id',[verifyToken.verifyToken,checkRole.isHotel],hotelController.getAllRoomByUserID );

// add room 
router.post('/room/addnew', [verifyToken.verifyToken,checkRole.isHotel],
    hotelController.addNewRoom)

// update room 
router.put('/room/updateroom/:id', [verifyToken.verifyToken,checkRole.isHotel],
    hotelController.updateRoom)  
    
// disalbe room
router.put('/room/disable/:id',[verifyToken.verifyToken,checkRole.isHotel],
hotelController.disableRoom)    

router.get('/places',[verifyToken.verifyToken,checkRole.isHotel],
hotelController.getAllPlace)

module.exports = router;