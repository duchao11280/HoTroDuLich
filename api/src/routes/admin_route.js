const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin_controller');
const uploadImage = require('../midleware/uploadImage');

//insert place
router.post('/place', adminController.insertPlace)
/**
 * update info place with place id
 * @param id
 */
router.put('/place/update/:id', adminController.updateInfoPlace)

/**
 * Disalbe place
 * param id
 */
router.put('/place/delete/:id', adminController.deletePlace)

// get All Place
router.get('/places', adminController.getAllPlaces);  

// get image by place id
router.get("/place/images/:id",adminController.getImageByPlaceID);

//upload image places
router.post('/place/image/upload/:id',uploadImage.single("file"),adminController.uploadImagePlace)

/**
 * Disalbe image
 * param id
 */
router.put('/place/image/delete/:id', adminController.deleteImage)
//get all user
router.get('/users',adminController.getAllUsers);

// disable User
router.put('/disableuser/:id', adminController.disableUser);


module.exports = router;