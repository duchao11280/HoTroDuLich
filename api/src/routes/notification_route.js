const express = require('express');
const router = express.Router();


const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');
const notificationController = require('../controllers/notification_controller')
// Notification
router.get('/',[verifyToken.verifyToken,checkRole.isUser],notificationController.getAllNotification)


module.exports = router;