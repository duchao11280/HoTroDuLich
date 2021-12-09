const dbConn = require("../../config/db.config")

var Table = function (table) {
    this.tableID = table.tableID,
        this.tableName = table.tableName,
        this.slot = table.slot,
        this.description = table.description,
        this.address = table.address,
        this.isBook = table.isBook,
        this.userID = table.userID,
        this.placeID = table.placeID,
        this.isDisabled = table.isDisabled
}

Table.getAllTableByUserID = (id, result) => {
    dbConn.query(`Select * From tableservices Where isDisabled != 1 and userID =${id}`, (err, res) => {
        result(err, res);
    });
}

Table.addNewTable = (tableName, slot, description, address, userID, placeID, result) => {
    dbConn.query(`INSERT into tableservices(tableName, slot, description,` +
        `address, isBook, userID, placeID, isDisabled) ` +
        `VALUES(?, ?, ?, ?, 0, ?, ?, 0)`,
        [tableName, slot, description, address, userID, placeID],
        (err, res) => {
            result(err, res);
        })
}
Table.updateTable = (tableID, tableName, slot, description, address, placeID, result) => {
    dbConn.query(`UPDATE tableservices SET tableName = ?, slot = ?,` +
        ` description= ?,address=?, placeID = ? Where tableID = ?`,
        [tableName, slot, description, address, placeID, tableID],
        (err, res) => {
            result(err, res)
        })
}

Table.disableTable = (id, result) => {
    dbConn.query(`UPDATE tableservices SET isDisabled=1 Where tableID = ${id}`,
        (err, res) => {
            result(err, res)
        })
}

module.exports = Table; 
