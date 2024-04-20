const Post = require('../models/Post');

exports.getAllPosts = async (req, res, next) => {
    try {
        let [posts,_] = await Post.findAll();
        res.status(200).json(posts);
    }
    catch (err) {
        console.log(err);
        next(err);
    }
}

exports.createNewPost = async (req, res, next) => {
    try {
        let { title, body } = req.body;
        let post = new Post(title, body);
        post = await post.save();
        console.log(post);
        res.status(201).json({ message: "Created successfully" });
    }
    catch (err) {
        next(err);
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        let id = req.params.id;
        let [post, _] = await Post.findById(id);
        res.status(200).json({ post :post[0]});
    }
    catch (err) {
        next(err);
    }
}