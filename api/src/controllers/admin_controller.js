const PlaceModel = require('../models/place_model.js');
const ImageModel = require('../models/image_model');
const UserModel = require('../models/user_model');
//get all user
exports.getAllPlaces = (req, res) => {
    PlaceModel.getAllPlaces((err, places) => {
        if (err) {
            res.json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: 'true', message:'Lấy dữ liệu thành công', data: places})
    });
}
// get image by placeID
exports.getImageByPlaceID = (req,res) =>{
    ImageModel.getAllImageByPlaceID(req.params.id, (err,imgs)=>{
        if (err) {
            res.json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: 'true', message:'Lấy dữ liệu thành công', data: imgs})
    })
}
// get all user
exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, users) => {
        if (err) {
            res.json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: 'true', message:'Lấy dữ liệu thành công', data: users})
    });
}
// disable user
// update profile user
exports.disableUser = (req, res) => {
    UserModel.disableUser(req.params.id, (err, user) => {
        if (err) {
            res.json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Vô hiệu hóa thành công',})
    })

}