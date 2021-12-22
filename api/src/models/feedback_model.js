var dbConn = require('../../config/db.config');

var Feedback = function (feedback) {
    this.feedbackID = feedback.feedbackID,
        this.content = feedback.content,
        this.userID = feedback.userID,
        this.title = feedback.title
}

Feedback.getAllFeedback = (result) => {
    dbConn.query(`Select * From feedback `, (err, res) => {
        result(err, res);
    });
}

Feedback.sendFeedback = (content, userID, title, result) => {
    dbConn.query(`INSERT into feedback(content,userID,title)` +
        ` VALUES(?, ?, ?)`,
        [content, userID, title],
        (err, res) => {
            result(err, res);
        })
}

module.exports = Feedback;