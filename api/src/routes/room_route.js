const express = require('express');
const router = express.Router();

const roomController = require('../controllers/room_controller');

const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//search room by price, slot , time and place id
router.post('/searchroom',[verifyToken.verifyToken,checkRole.isUser],
    roomController.searchRoomtoBook);
// book room
router.post('/bookroom',[verifyToken.verifyToken,checkRole.isUser],
    roomController.bookRoom)

// lấy danh sách phòng đã đặt
router.get('/bookroom/:id',[verifyToken.verifyToken,checkRole.isUser],
roomController.getRoomBookedByUserID )    
module.exports = router;