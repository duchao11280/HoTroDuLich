const UserModel = require('../models/user_model');

// Kiểm tra xem username đã tồn tại
exports.verifyUserName = (req, res, next) => {
    UserModel.getUserByUserName(req.body.userName, (err, user) => {
        if (err) {
            res.status(500).send({ status: false, message: "Thất bại" });
            return;
        };
        if (user.length != 0) {
            res.send({ status: false, message: "Username đã tồn tại" });
            return;
        } else {
            next()
        }

    })
}

