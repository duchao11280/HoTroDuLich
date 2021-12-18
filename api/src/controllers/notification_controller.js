const NotificationModel = require('../models/notification_model')
exports.getAllNotification = (req, res) =>{
    NotificationModel.getAllNotifications((err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: data})
    })
}