const CommentModel = require('../models/comment_model')

exports.getAllCommentByPlaceID = (req, res) =>{
    var placeID = req.params.id;

    CommentModel.getAllCommentByPlaceID(placeID,(err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: data})
    })
}
exports.deleteComment = (req, res) =>{
    var id =req.params.id;
    CommentModel.deleteComment(id, (err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Xóa thành công'})
    })
}
// insert
exports.insertComment = (req, res) =>{
    var userID = req.body.userID;
    var content = req.body.content;
    var placeID = req.body.placeID;
    var now = new Date();
    var month = now.getMonth() +1;
    var time = (now.getFullYear() + "-" +month + "-" + now.getDate()+
       " " + now.getHours() + ":" + now.getMinutes());
    CommentModel.insertComment(userID, content, placeID,time,(err, data)=>{
        if (err) {
            res.status(500).json({status: false, message: "Thất bại"})
            return;
        };
        res.json({ status: true, message: 'Thêm thành công'})
    })
}