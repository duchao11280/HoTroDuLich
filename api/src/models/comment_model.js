const dbConn = require("../../config/db.config")

var Comment = function(comment){
    this.id = comment.id,
    this.userID = comment.userID,
    this.content = comment.content,
    this.placeID = comment.placeID,
    this.time = comment.time
}

Comment.insertComment = (userID,content,placeID,time, result) =>{
    dbConn.query("INSERT INTO comment(userID,content,placeID, time) Values(?,?,?,?)",
        [userID,content,placeID,time],(err, res) =>{
            result(err, res)
    })
}

Comment.deleteComment = (id,result) =>{
    dbConn.query(`DELETE FROM comment WHERE id=${id}`,
        (err, res) =>{
            result(err, res)
    })
}
Comment.getAllCommentByPlaceID = (id,result) =>{
    dbConn.query(`SELECT id,fullName, content, time FROM comment, user 
        Where comment.userID = user.userID and placeID = ${id} and user.isDisabled !=1`,(err, res)=>{
        result(err, res)
    })
}
Comment.getCommentByIDandUserID = (id,userID,result) =>{
    dbConn.query(`SELECT * FROM comment
        Where userID = ? 
            and id = ? `,[userID,id],(err, res)=>{
        result(err, res)
    })
}
module.exports = Comment;