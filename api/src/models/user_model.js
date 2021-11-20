var dbConn = require('../../config/db.config');

var User = function(user){
        this.userID = user.userID;
        this.userName = user.userName;
        this.password = user.password;
        this.fullName = user.fullName;
        this.email = user.email;
        this.phonenumber = user.phonenumber;
        this.role = user.role;
        this.isDisabled = user.isDisabled;
}
    // get all user
User.getAllUsers = (result) => {
    dbConn.query(`Select * From user Where isDisabled != 1 `, (err, res) => {
        if (res) {
            console.log("get all user success");
            result(null, res);
            
        } else {
            console.log('Error User', err);
            result(err, null);
        }
    });
}
/**
 * get user by id
 * Profile User
 * @param {} id
 * @param {*} result
 */
User.getUserByID = (id, result)=> {
    dbConn.query('Select userName,fullName,email,phonenumber,role' +
        ' From user' + 
        ' Where isDisabled != 1 and userID=?', id, (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}
/**
 * Update Profile
 * @param {*} id
 * @param {*} userReqData
 * @param {*} result
 */
User.updateUser = (id, userReqData, result) =>{
    dbConn.query(`Update user Set  fullName=?,email=?,  phonenumber=? where userID=${id}`,
        [userReqData.fullName, userReqData.email, userReqData.phonenumber], (err, res) => {
            if (err) {
                result(null, err);
            } else {
                result(null, res);
            }
        });
}

    // search user bằng username
User.getUserByUserName = (userName,result) => {
    dbConn.query('Select *' +
        ' From user' +
        ` Where userName="${userName}"`, (err, res) => {
            if (err) {
                result(null,err);
            } else {
                result(null,res);
            }
        });

}
/**
 * Đăng kí
 */
User.insertUser = (userName, password, fullName, email, phonenumber, role, result) => {
        dbConn.query('INSERT into user(userName,password,fullName,email,phonenumber,role,isDisabled)'
            + ' VALUES(?, ?, ?, ?, ?, ?,0) ', [userName, password, fullName,
            email, phonenumber, role], (err2, res2) => {
                result(err2,res2);
            });
}
/**
 * Change Password
 * @param {*} id
 * @param {*} userReqData
 * @param {*} result
 */
User.changePassword = (id, userReqData, result) =>{

    dbConn.query(`Update user Set password=? where userID=${id}`,
        [userReqData.newPassword], (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}
User.getPasswordUserByID = (id, result)=> {
    dbConn.query('Select password' +
        ' From user' + 
        ' Where userID=?', id, (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

User.disableUser = (id, result) =>{
    dbConn.query(`Update user Set isDisabled=1 where userID=${id}`,(err, res) => {
            if (err) {
                result(null, err);
            } else {
                result(null, res);
            }
        });
}
module.exports = User;