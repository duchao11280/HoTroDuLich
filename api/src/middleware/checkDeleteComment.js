const CommentModel = require('../models/comment_model')
exports.checkDelete = (req, res, next) =>{
    var userID = req.body.userID;
    var id = req.params.id;
    CommentModel.getCommentByIDandUserID(id,userID,(err,data)=>{
        if (err) {
            res.status(500).send({ status: false, message: "Thất bại" });
            return;
        };
        if(data.length == 0 ){
            res.status(403).send({ status: false, message: "Bạn không có quyền xóa bình luận của người khác!" , data:data});
            return;
        }
        next()
    })
}