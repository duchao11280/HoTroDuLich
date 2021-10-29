const UserModel = require('../models/user_model');

// Kiểm tra xem username đã tồn tại
exports.verifyUserName = (req, res, next) => {
    UserModel.getUserByUserName(req.body.userName, (err, user) => {
        if (err) {
            res.send(404).send({ status: false });
            return;
        };
        if (user.length != 0) {
            res.send({ status: true, message: "Username đã tồn tại" });
        } else {
            next()
        }

    })
}

