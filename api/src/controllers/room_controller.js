const RoomModel = require('../models/room_model')
const BookRoomModel = require('../models/bookroom_model')
exports.searchRoomtoBook = (req, res) => {
    RoomModel.searchRoomtoBook(req.body.placeID, req.body.price,
        req.body.slot, req.body.startTime, (err, listRoom) => {
            if (err) {
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Lấy dữ liệu thành công', data: listRoom, timeBook: req.body.startTime })
        })
}
exports.bookRoom = (req, res) => {
    BookRoomModel.insertBookRoom(req.body.roomID, req.body.userID,
        req.body.startTime, req.body.phoneNumber, (err, room) => {
            if (err) {
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Đặt thành công' })
        })
}

exports.getRoomBookedByUserID = (req, res) => {
    BookRoomModel.getAllByUserID(req.params.id, (err, bookroom) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: bookroom })
    })
}