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
router.put('/place/:id', adminController.updateInfoPlace)

// get All Place
router.get('/places', adminController.getAllPlaces);  

// get image by place id
router.get("/place/images/:id",adminController.getImageByPlaceID);

//upload image places
router.post('/place/image/upload/:id',uploadImage.single("file"),adminController.uploadImagePlace)


//get all user
router.get('/users',adminController.getAllUsers);

// disable User
router.put('/disableuser/:id', adminController.disableUser);


module.exports = router;