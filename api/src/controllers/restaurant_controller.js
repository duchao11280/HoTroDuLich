const TableModel = require('../models/table_model');
const PlaceModel = require('../models/place_model')
// lấy table theo từng chủ nhà hàng
exports.getAllTableByUserID = (req, res) => {
    TableModel.getAllTableByUserID(req.params.id, (err, table) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: table })
    })

}

exports.addNewTable = (req, res) => {
    const table = new TableModel(req.body);
    TableModel.addNewTable(table.tableName, table.slot,
        table.description, table.address, table.userID, table.placeID, (err, table) => {
            if (err) {
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Thêm thành công' })
        })
}

exports.updateTable = (req, res) => {
    const table = new TableModel(req.body);
    TableModel.updateTable(req.params.id, table.tableName, table.slot,
        table.description, table.address, table.placeID, (err, table) => {
            if (err) {
                res.status(500).json({ status: false, message: "Thất bại" })
                return;
            };
            res.json({ status: true, message: 'Cập nhật thành công' })
        })
}

exports.disableTable = (req, res) => {
    TableModel.disableTable(req.params.id, (err, table) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Vô hiệu hóa thành công' })
    })
}

exports.getAllPlace = (req, res) => {
    PlaceModel.getPlaceIDandName((err, place) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: place })
    })
}