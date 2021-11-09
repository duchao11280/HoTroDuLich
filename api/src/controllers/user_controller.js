const UserModel = require('../models/user_model');
var bcrypt = require("bcryptjs");
exports.getAllUsers = (req, res) => {
    UserModel.getAllUsers((err, users) => {
        if (err) throw err;
        res.send(users);
    });
}

// get user info by ID
exports.getUserByID = (req, res) => {
    UserModel.getUserByID(req.params.id, (err, user) => {
        if (err) throw err;
        res.json({ status: true, data: user[0] });
    });
}

// update profile user
exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    UserModel.updateUser(req.params.id, userReqData, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ status: true, message: 'User updated successfully', data: user.insertID })
    })

}

// Sign up
exports.signUp = (req, res) => {
    const userReqData = new UserModel(req.body);
    userReqData.password = bcrypt.hashSync(req.body.password, 14);

    UserModel.insertUser(userReqData.userName, userReqData.password, userReqData.fullName,
        userReqData.email, userReqData.phonenumber, userReqData.role, (err, user) => {
            if (err) {
                res.json({ status: false, message: `Error is: ${err}` })
            }
            res.json({ status: true, message: 'Đăng kí thành công', data: user.insertID })
        })

}