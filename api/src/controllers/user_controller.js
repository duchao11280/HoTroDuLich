const UserModel = require('../models/user_model');
var bcrypt = require("bcryptjs");


// get user info by ID
exports.getUserByID = (req, res) => {
    UserModel.getUserByID(req.params.id, (err, user) => {
        if (err) {{console.log("err"); return;}};
        if(user.length==0){
            res.json({ status: false, message:"Không tồn tại user"});
        }else
            res.json({ status: true,message:"Lấy thành công", data: user[0] });
    });
}

// update profile user
exports.updateUser = (req, res) => {
    const userReqData = new UserModel(req.body);
    UserModel.updateUser(req.params.id, userReqData, (err, user) => {
        if (err) {
            res.send(err);
        }
        res.json({ status: true, message: 'User updated successfully'})
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
            res.json({ status: true, message: 'Đăng kí thành công'})
        })

}

/**
 * Change Password
 * params id
 * params oldPass, newPass, confirmPass
 */
exports.changePassword = (req, res) => {
    const userReqData = new UserModel(req.body);
    userReqData.newPassword = bcrypt.hashSync(req.body.newPassword, 14);
    UserModel.changePassword(req.params.id, userReqData, (err, user) => {
        if (err) {
            res.json({status:false, message: "Đổi mật khẩu thất bại"});
            return;
        }

        res.json({ status: true, message: 'Đổi mật khẩu thành công',})
    })

}