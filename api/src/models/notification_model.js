const dbConn = require("../../config/db.config")

var Notification = function(notification){
    this.notificationID = notification.notificationID,
    this.title = notification.title,
    this.content = notification.content,
    this.time = notification.time

}

Notification.insertNotification = (title,content,time, result) =>{
    dbConn.query("INSERT INTO notification(title,content,time) Values(?,?,?)",
        [title,content,time],(err, res) =>{
            result(err, res)
    })
}
Notification.updateNotification = (id,title,content,time, result) =>{
    dbConn.query(`UPDATE notification set title = ?, content = ?, time = ? WHERE notificationID=${id}`,
        [title,content,time],(err, res) =>{
            result(err, res)
    })
}
Notification.deleteNotification = (id,result) =>{
    dbConn.query(`DELETE FROM notification WHERE notificationID=${id}`,
        (err, res) =>{
            result(err, res)
    })
}
Notification.getAllNotifications = (result) =>{
    dbConn.query(`SELECT * FROM notification ORDER BY time desc`,(err, res)=>{
        result(err, res)
    })
}
module.exports = Notification;