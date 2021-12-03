const dbConn = require("../../config/db.config")

var Place = function (place) {
    this.placeID = place.placeID,
        this.placeName = place.placeName,
        this.description = place.description,
        this.tips = place.tips,
        this.city = place.city,
        this.isDeleted = place.isDeleted
}
// lấy tất cả các địa điểm chưa bị vô hiệu hóa
Place.getAllPlaces = (result) => {
    dbConn.query('Select * From place Where isDeleted != 1', (err, res) => {
        if (res) {
            console.log("get all places success");

            result(null, res);
        } else {
            result(err, null);
        }
    })
}
// thêm vào một địa điểm mới
Place.insertPlace = (placeName, description, tips, city, result) => {
    dbConn.query('Insert into place(placeName, description, tips, city, isDeleted) VALUES(?,?,?,?,0) ',
        [placeName, description, tips, city], (err, res) => {
            result(err, res);
        })
}
// cập nhât các thông tin địa điểm
Place.updateInfoPlace = (id, placeName, description, tips, city, result) => {
    dbConn.query(`Update place Set  placeName=?, description=?,  tips=?, city=? where placeID=${id}`,
        [placeName, description, tips, city], (err, res) => {
            result(err, res);
        }
    );
}
// bật biến cờ để xem xet là đã xóa
Place.deletePlace = (id, result) => {
    dbConn.query(`Update place Set  isDeleted=1 where placeID=${id}`,
        (err, res) => {
            result(err, res);
        }
    );
}
module.exports = Place;