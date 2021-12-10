const RoomModel = require('../models/room_model');
const PlaceModel = require('../models/place_model')
const BookRoomModel = require('../models/bookroom_model')
// lấy room theo từng chủ khách sạn
exports.getAllRoomByUserID = (req,res) => {
    RoomModel.getAllRoomByUserID(req.params.id,(err,room)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: true, message:'Lấy dữ liệu thành công', data: room})
    })

}

exports.addNewRoom = (req,res) =>{
    const room = new RoomModel(req.body);
    RoomModel.addNewRoom(room.roomName, room.slot, room.price,
        room.description,room.address, room.userID, room.placeID, (err, room) => {
            if (err) {
                res.status(500).json({status: false, message: "Thất bại"})
                return;
            };
            res.json({status: true, message:'Thêm thành công'})
    })
}

exports.updateRoom = (req, res) =>{
    const room = new RoomModel(req.body);
    RoomModel.updateRoom(req.params.id, room.roomName, room.slot, room.price,
        room.description, room.address, room.placeID, (err, room) => {
            if (err) {
                res.status(500).json({status: false, message: "Thất bại"})
                return;
            };
            res.json({status: true, message:'Cập nhật thành công'})
    })
}

exports.disableRoom = (req, res) =>{
    RoomModel.disableRoom(req.params.id, (err, room) =>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: true, message:'Vô hiệu hóa thành công'})
    })
}

exports.getAllPlace = (req, res) =>{
    PlaceModel.getPlaceIDandName((err,place)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({status: true, message:'Lấy dữ liệu thành công', data: place})
    })
}

exports.getRoomsHaveBooked = (req, res) =>{

        BookRoomModel.getAllBookedByOwnerID(req.params.id, (err,bookroom)=>{
            if (err) {
                res.status(500).json({status: false, message: "Thất bại"})
                return;
            };
            res.json({status: true, message:'Lấy dữ liệu thành công',data:bookroom })
        })
}