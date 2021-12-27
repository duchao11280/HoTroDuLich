const dbConn = require("../../config/db.config")

var BookTable = function (booktable) {
    this.tableID = booktable.tableID,
        this.userID = booktable.userID,
        this.startTime = booktable.startTime,
        this.phoneNumber = booktable.phoneNumber
}
BookTable.insertBookTable = (tableID, userID, startTime, phoneNumber, result) => {
    dbConn.query(` INSERT into booktable(tableID,userID,startTime,phoneNumber)
     VALUES(?,?,?,?)`, [tableID, userID, startTime, phoneNumber], (err, res) => {
        result(err, res)
    })
}
// người dùng 
BookTable.getAllByUserID = (id, result) => {
    dbConn.query(` SELECT DISTINCT booktable.id, tableservices.tableID, tableservices.tableName,booktable.startTime
            , tableservices.slot, tableservices.description, tableservices.address,place.placeName
        from booktable, tableservices, place 
        WHERE tableservices.tableID =booktable.tableID and booktable.userID = ${id}
            and place.placeID = tableservices.placeID`,
        (err, res) => {
            result(err, res)
        })
}

// lấy danh sách phòng đã được đặt theo chủ phòng
BookTable.getAllBookedByOwnerID = (id, result) => {
    dbConn.query(` SELECT DISTINCT booktable.id, tableservices.tableID, tableservices.tableName,
        tableservices.slot, tableservices.description, tableservices.address,place.placeName, user.fullName, booktable.phoneNumber, booktable.startTime
    from booktable, tableservices, place, user 
    WHERE tableservices.tableID =booktable.tableID and tableservices.userID = ${id}
        and place.placeID = tableservices.placeID and user.userID = booktable.userID`,
        (err, res) => {
            result(err, res)
        })
}
module.exports = BookTable;