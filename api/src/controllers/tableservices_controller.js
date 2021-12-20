const TableModel = require('../models/table_model')
const BookTableModel = require('../models/booktable_model')
exports.searchTabletoBook = (req, res) => {
    TableModel.searchTabletoBook(req.body.placeID, req.body.startTime,
        req.body.slot, (err, listTable) => {
            if (err) {
                console.log(err)
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Lấy dữ liệu thành công', data: listTable })
        })
}
exports.bookTable = (req, res) => {
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