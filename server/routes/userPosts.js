const express = require("express");
const Posts = require("../models/posts");
const auth = require("../middleware/auth");
//const { rawListeners } = require('../models/posts');

const router = express.Router();

// get posts
router.get("/posts", auth, (req, res) => {
  // check posts
  Posts.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingPosts: posts,
    });
  });
});

//get posts

router.get("/post/:id", auth, (req, res) => {
  let postId = req.params.id;

  // Find post
  Posts.findById(postId, (err, post) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err,
      });
    }
    return res.status(200).json({
      success: true,
      post,
    });
  });
});

module.exports = router;
