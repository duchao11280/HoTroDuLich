const dbConn = require("../../config/db.config")

var Room = function (room) {
    this.roomID = room.roomID,
        this.roomName = room.roomName,
        this.slot = room.slot,
        this.price = room.price,
        this.description = room.description,
        this.address = room.address,
        this.isBook = room.isBook,
        this.userID = room.userID,
        this.placeID = room.placeID,
        this.isDisabled = room.isDisabled
}

Room.getAllRoomByUserID = (id, result) => {
    dbConn.query(`Select * From room Where isDisabled != 1 and userID =${id}`, (err, res) => {
        result(err, res);
    });
}

Room.addNewRoom = (roomName, slot, price, description, address, userID, placeID, result) => {
    dbConn.query(`INSERT into room(roomName, slot, price, description,` +
        `address, isBook, userID, placeID, isDisabled) ` +
        `VALUES(?, ?, ?, ?, ?, 0, ?, ?, 0)`,
        [roomName, slot, price, description, address, userID, placeID],
        (err, res) => {
            result(err, res);
        })
}
Room.updateRoom = (roomID, roomName, slot, price, description, address, placeID, result) => {
    dbConn.query(`UPDATE room SET roomName = ?, slot = ?, price = ?,` +
        ` description= ?,address=?, placeID = ? Where roomID = ?`,
        [roomName, slot, price, description, address, placeID, roomID],
        (err, res) => {
            result(err, res)
        })
}

Room.disableRoom = (id, result) => {
    dbConn.query(`UPDATE room SET isDisabled=1 Where roomID = ${id}`,
        (err, res) => {
            result(err, res)
        })
}

module.exports = Room; 
