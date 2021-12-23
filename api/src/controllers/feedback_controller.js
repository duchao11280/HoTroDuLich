const FeedbackModel = require('../models/feedback_model');

// lấy feedback từ user
exports.adminGetAllFeedback = (req, res) => {
    FeedbackModel.getAllFeedback((err, feedback) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        feedback.reverse();
        res.json({ status: true, message: 'Lấy dữ liệu thành công', data: feedback })
    })

}

exports.addNewFeedback = (req, res) => {
    const userID = req.params.id;
    const feedback = new FeedbackModel(req.body);
    FeedbackModel.sendFeedback(feedback.content, userID, feedback.title, feedback.userName, (err, feedback) => {
        if (err) {
            res.status(500).json({ status: false, message: "Thất bại" })
            return;
        };
        res.json({ status: true, message: 'Gửi thành công' })
    })
}

