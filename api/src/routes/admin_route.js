const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');
const notificationController = require('../controllers/notification_controller')
const uploadImage = require('../middleware/uploadImage');
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');
const feedbackController = require('../controllers/feedback_controller')

//======================Place=====================//
//insert place
router.post('/place', [verifyToken.verifyToken, checkRole.isAdmin], adminController.insertPlace)
/**
 * update info place with place id
 * @param id
 */
router.put('/place/update/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.updateInfoPlace)

/**
 * Disalbe place
 * param id
 */
router.put('/place/delete/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.deletePlace)

// get All Place
router.get('/places', [verifyToken.verifyToken, checkRole.isAdmin], adminController.getAllPlaces);

// get image by place id
router.get("/place/images/:id", [verifyToken.verifyToken, checkRole.isAdmin], adminController.getImageByPlaceID);

//upload image places
router.post('/place/image/upload/:id', [verifyToken.verifyToken, checkRole.isAdmin], uploadImage.single("file"), adminController.uploadImagePlace)

/**
 * Disalbe image
 * param id
 */
router.put('/place/image/delete/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.deleteImage)

//======================User=====================//

//get all user
router.get('/users', [verifyToken.verifyToken, checkRole.isAdmin], adminController.getAllUsers);

// disable User
router.put('/disableuser/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.disableUser);

//======================Notification=====================//
router.post('/notification/addnew', [verifyToken.verifyToken, checkRole.isAdmin], adminController.addNotification)

router.put('/notification/update/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.updateNotification)

router.delete('/notification/delete/:id', [verifyToken.verifyToken, checkRole.isAdmin], adminController.deleteNotification)

router.get('/notification', [verifyToken.verifyToken, checkRole.isAdmin], notificationController.getAllNotification)

router.get('/feedback',
    [verifyToken.verifyToken, checkRole.isAdmin],
    feedbackController.adminGetAllFeedback)

module.exports = router;