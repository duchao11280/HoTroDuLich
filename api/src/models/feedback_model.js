var dbConn = require('../../config/db.config');

var Feedback = function (feedback) {
    this.feedbackID = feedback.feedbackID,
        this.content = feedback.content,
        this.userID = feedback.userID,
        this.title = feedback.title,
        this.userName = feedback.userName
}

Feedback.getAllFeedback = (result) => {
    dbConn.query(`Select * From feedback `, (err, res) => {
        result(err, res);
    });
}

Feedback.sendFeedback = (content, userID, title, userName, result) => {
    dbConn.query(`INSERT into feedback(content,userID,title,userName)` +
        ` VALUES(?, ?, ?,?)`,
        [content, userID, title, userName],
        (err, res) => {
            result(err, res);
        })
}

module.exports = Feedback;