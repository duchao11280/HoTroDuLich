const dbConn = require("../../config/db.config")

var Table = function (table) {
    this.tableID = table.tableID,
        this.tableName = table.tableName,
        this.slot = table.slot,
        this.price = table.price,
        this.description = table.description,
        this.address = table.address,
        this.isBook = table.isBook,
        this.userID = table.userID,
        this.placeID = table.placeID,
        this.isDisabled = table.isDisabled
}

Table.getAllTableByUserID = (id, result) => {
    dbConn.query(`Select * From table Where isDisabled != 1 and userID =${id}`, (err, res) => {
        result(err, res);
    });
}

Table.addNewTable = (tableName, slot, price, description, address, userID, placeID, result) => {
    dbConn.query(`INSERT into table(tableName, slot, price, description,` +
        `address, isBook, userID, placeID, isDisabled) ` +
        `VALUES(?, ?, ?, ?, ?, 0, ?, ?, 0)`,
        [tableName, slot, price, description, address, userID, placeID],
        (err, res) => {
            result(err, res);
        })
}
Table.updateTable = (tableID, tableName, slot, price, description, address, placeID, result) => {
    dbConn.query(`UPDATE table SET tableName = ?, slot = ?, price = ?,` +
        ` description= ?,address=?, placeID = ? Where tableID = ?`,
        [tableName, slot, price, description, address, placeID, tableID],
        (err, res) => {
            result(err, res)
        })
}

Table.disableTable = (id, result) => {
    dbConn.query(`UPDATE table SET isDisabled=1 Where tableID = ${id}`,
        (err, res) => {
            result(err, res)
        })
}

module.exports = Table; 
