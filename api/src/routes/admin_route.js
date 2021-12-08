const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');
const uploadImage = require('../middleware/uploadImage');
const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');
//insert place
router.post('/place', [verifyToken.verifyToken,checkRole.isAdmin],adminController.insertPlace)
/**
 * update info place with place id
 * @param id
 */
router.put('/place/update/:id',[verifyToken.verifyToken,checkRole.isAdmin], adminController.updateInfoPlace)

/**
 * Disalbe place
 * param id
 */
router.put('/place/delete/:id',[verifyToken.verifyToken,checkRole.isAdmin], adminController.deletePlace)

// get All Place
router.get('/places',[verifyToken.verifyToken,checkRole.isAdmin], adminController.getAllPlaces);  

// get image by place id
router.get("/place/images/:id",[verifyToken.verifyToken,checkRole.isAdmin],adminController.getImageByPlaceID);

//upload image places
router.post('/place/image/upload/:id',[verifyToken.verifyToken,checkRole.isAdmin],uploadImage.single("file"),adminController.uploadImagePlace)

/**
 * Disalbe image
 * param id
 */
router.put('/place/image/delete/:id',[verifyToken.verifyToken,checkRole.isAdmin], adminController.deleteImage)
//get all user
router.get('/users',[verifyToken.verifyToken,checkRole.isAdmin],adminController.getAllUsers);

// disable User
router.put('/disableuser/:id',[verifyToken.verifyToken,checkRole.isAdmin], adminController.disableUser);


module.exports = router;