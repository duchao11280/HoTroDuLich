const dbConn = require("../../config/db.config")

var BookRoom = function (bookroom) {
    this.roomID = bookroom.roomID,
        this.userID = bookroom.userID,
        this.startTime = bookroom.startTime,
        this.phoneNumber = bookroom.phoneNumber
}
BookRoom.insertBookRoom = (roomID, userID, startTime, phoneNumber, result) => {
    dbConn.query(` INSERT into bookroom(roomID,userID,startTime,phoneNumber)
     VALUES(?,?,?,?)`, [roomID, userID, startTime, phoneNumber], (err, res) => {
        result(err, res)
    })
}
// người dùng 
BookRoom.getAllByUserID = (id, result) => {
    dbConn.query(` SELECT DISTINCT bookroom.id, room.roomID, room.roomName,
            room.price, room.slot, room.description, room.address,place.placeName,bookroom.startTime
        from bookroom, room, place 
        WHERE room.roomID =bookroom.roomID and bookroom.userID = ${id}
            and place.placeID = room.placeID`,
        (err, res) => {
            result(err, res)
        })
}

// lấy danh sách phòng đã được đặt theo chủ phòng
BookRoom.getAllBookedByOwnerID = (id, result) => {
    dbConn.query(` SELECT DISTINCT bookroom.id, room.roomID, room.roomName,bookroom.startTime,
        room.price, room.slot, room.description, room.address,place.placeName, user.fullName, bookroom.phoneNumber, bookroom.startTime
    from bookroom, room, place, user 
    WHERE room.roomID =bookroom.roomID and room.userID = ${id}
        and place.placeID = room.placeID and user.userID = bookroom.userID`,
        (err, res) => {
            result(err, res)
        })
}
module.exports = BookRoom;