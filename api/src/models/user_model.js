var dbConn = require('../../config/db.config');

var User = (user) => {
        this.userID = user.userID;
        this.userName = user.userName;
        this.password = user.password;
        this.fullName = user.fullName;
        this.email = user.email;
        this.phonenumber = user.phonenumber;
        this.role = user.role;
}
    // get all user
User.getAllUsers = (result) => {
    dbConn.query('Select * From user', (err, res) => {
        if (err) {
            console.log('Error User', err);
            result(null, err);
        } else {
            console.log("get all user success");
            result(null, res);
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
        ' Where userID=?', id, (err, res) => {
            if (err) {
                result(null, err);
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
        dbConn.query('INSERT into user(userName,password,fullName,email,phonenumber,role)'
            + ' VALUES(?, ?, ?, ?, ?, ?) ', [userName, password, fullName,
            email, phonenumber, role], (err, res) => {
                if (err) {
                    result(null, err);
                } else {
                    result(null, res);
                }
            });
}

module.exports = User;