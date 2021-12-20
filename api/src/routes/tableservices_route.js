const express = require('express');
const router = express.Router();

const tableController = require('../controllers/tableservices_controller');

const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');


//search table by  slot , time and place id
router.post('/searchtable', [verifyToken.verifyToken, checkRole.isUser],
    tableController.searchTabletoBook);
// book table
router.post('/booktable', [verifyToken.verifyToken, checkRole.isUser],
    tableController.bookTable)

// lấy danh sách phòng đã đặt
router.get('/booktable/:id', [verifyToken.verifyToken, checkRole.isUser],
    tableController.getTableBookedByUserID)
module.exports = router;