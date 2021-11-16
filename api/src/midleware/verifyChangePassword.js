const UserModel = require('../models/user_model');
var bcrypt = require("bcryptjs");
// Kiểm tra xem username đã tồn tại
exports.verifyPassword = (req, res, next) => {
    var id = req.params.id;
    var oldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    var confirmPassword = req.body.confirmPassword;
    if(oldPassword == newPassword){
        res.send({status: false, message: "Mật khẩu mới phải khác mật khẩu cũ"})
        return;
    }
    if(newPassword != confirmPassword){
        res.send({status:false, message: "Mật khẩu không khớp"})
        return;
    }
    
    
    UserModel.getPasswordUserByID(id,(err,user)=>{
        if(err){return;}
        
        if(bcrypt.compareSync(oldPassword, user[0].password)){
            next()
        }else{
            res.send({ status: false, message:"Vui lòng nhập đúng mật khẩu" });
            return;
        }
    })
    
}