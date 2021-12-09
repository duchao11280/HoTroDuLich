const dbConn = require("../../config/db.config")

var BookRoom = function (bookroom) {
    this.roomID = bookroom.roomID,
        this.userID = bookroom.userID,
        this.startTime = bookroom.startTime,
        this.phoneNumber = bookroom.phoneNumber
}
BookRoom.insertBookRoom = (roomID,userID,startTime,phoneNumber,result) =>{
    dbConn.query(` INSERT into bookroom(roomID,userID,startTime,phoneNumber)
     VALUES(?,?,?,?)`,[roomID,userID,startTime,phoneNumber],(err, res)=>{
         result(err, res)
     })
}

BookRoom.getAllByUserID = (id, result) =>{
    dbConn.query(` SELECT DISTINCT bookroom.id, room.roomID, room.roomName,
            room.price, room.slot, room.description, room.address,place.placeName
        from bookroom, room, place 
        WHERE room.roomID =bookroom.roomID and bookroom.userID = ${id}
            and place.placeID = room.placeID`,
        (err,res)=>{
        result(err, res)
    })
}
module.exports = BookRoom;