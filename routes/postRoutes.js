const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

router.route("/").get(postController.getAllPosts).post(postController.createNewPost);
router.route("/:id").get(postController.getPostById);


module.exports = router;