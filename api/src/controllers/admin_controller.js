const PlaceModel = require('../models/place_model.js');
const ImageModel = require('../models/image_model');
const UserModel = require('../models/user_model');
const NotificationModel = require('../models/notification_model');
//========================PLace================================//
//get all user
exports.getAllPlaces = (req, res) => {
    PlaceModel.getAllPlaces((err, places) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: true, message:'Lấy dữ liệu thành công', data: places})
    });
}
// get image by placeID
exports.getImageByPlaceID = (req,res) =>{
    ImageModel.getAllImageByPlaceID(req.params.id, (err,imgs)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        var data = [];
        imgs.forEach(element => {
            data.push({
                id: Object.values(element)[0],
                image: process.env.DOMAIN +'/public/images/' + Object.values(element)[1]})
        });
        res.json({status: true, message:'Lấy dữ liệu thành công', data: data})
    })
}
// upload image to server
exports.uploadImagePlace= (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(404).json({status: false, message: "Upload hình ảnh thất bại"});
        }
        ImageModel.insertImagePlace(req.file.filename, req.params.id,(err,result)=>{
            if (err) {
                res.status(500).json({status: false, message: "Thất bại"})
                return;
            };
            res.json({ status: true, message: 'Upload thành công'})
        })

    } catch (error) {
        res.status(500).json({status: false, message:"Kết nối thất bại, vui lòng thử lại sau"})
        return;
    }
}
// Delete image
exports.deleteImage = (req, res)=> {
    ImageModel.deleteImage(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Xóa hình ảnh thành công'})
    })
}
// Insert Place
exports.insertPlace = (req, res) => {
    var placeReq = new PlaceModel(req.body);
    PlaceModel.insertPlace(placeReq.placeName,placeReq.description,
        placeReq.tips, placeReq.city, (err, data) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Thêm địa điểm thành công'})
    })

}
// Update info place
exports.updateInfoPlace = (req, res) => {
    var placeReq = new PlaceModel(req.body);
    PlaceModel.updateInfoPlace(req.params.id, placeReq.placeName,placeReq.description,
        placeReq.tips, placeReq.city, (err, data) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Cập nhật địa điểm thành công'})
    })

}
// Delete Place
exports.deletePlace = (req, res)=> {
    PlaceModel.deletePlace(req.params.id, (err, data) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Xóa địa điểm thành công'})
    })
}

//========================User================================//
// get all user
exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, users) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: true, message:'Lấy dữ liệu thành công', data: users})
    });
}

// disable user
exports.disableUser = (req, res) => {
    UserModel.disableUser(req.params.id, (err, user) => {
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Vô hiệu hóa thành công'})
    })

}
//========================Notification================================//
exports.addNotification = (req, res) =>{
    var title = req.body.title;
    var content = req.body.content;
    var time = req.body.time;
    NotificationModel.insertNotification(title,content,time, (err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Thêm mới thành công'})
    })
}

exports.updateNotification = (req, res) =>{
    var id = req.params.id;
    var title = req.body.title;
    var content = req.body.content;
    var time = req.body.time;
    NotificationModel.updateNotification(id,title,content,time, (err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Cập nhật thành công'})
    })
}
exports.deleteNotification = (req, res) =>{
    var id = req.params.id;
    NotificationModel.deleteNotification(id, (err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Xóa thành công'})
    })
}