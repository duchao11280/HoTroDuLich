const TableModel = require('../models/table_model')
const BookTableModel = require('../models/booktable_model')
exports.searchTabletoBook = (req, res) => {
    console.log(req.body)
    TableModel.searchTabletoBook(req.body.placeID, req.body.slot, req.body.startTime,
        (err, listTable) => {
            if (err) {
                console.log(err)
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Lấy dữ liệu thành công', data: listTable, timeBook: req.body.startTime })
        })
}
exports.bookTable = (req, res) => {
    console.log(req.body.startTime)
    BookTableModel.insertBookTable(req.body.tableID, req.body.userID, req.body.startTime,
        req.body.phoneNumber, (err, table) => {
            if (err) {
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Đặt thành công' })
        })
}

exports.getTableBookedByUserID = (req, res) => {
    BookTableModel.getAllByUserID(req.params.id, (err, booktable) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: booktable })
    })
}