const express = require('express');
const router = express.Router();


const checkRole = require('../middleware/checkRole');
const verifyToken = require('../middleware/verifyToken');
const commentController = require('../controllers/comment_controller')
const checkDelete = require('../middleware/checkDeleteComment')
// Comment getAll comment by place id
router.get('/placeid=:id',[verifyToken.verifyToken,checkRole.isUser],commentController.getAllCommentByPlaceID)

// Insert Comment
router.post('/',[verifyToken.verifyToken,checkRole.isUser],commentController.insertComment)

// delete comment
router.delete('/:id',[verifyToken.verifyToken,checkRole.isUser,checkDelete.checkDelete ],commentController.deleteComment)

module.exports = router;