const express = require("express");
const Posts = require("../models/posts");
const AdminAuth = require("../middleware/adminAuth");
//const { rawListeners } = require('../models/posts');

const router = express.Router();

//save posts

router.post("/post/save", AdminAuth, (req, res) => {
  let newPost = new Posts(req.body);

  // Create new post
  newPost.save((err) => {
    if (err) {
      console.log("faild");
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Posts saved successfully",
    });
  });
});

//get posts

router.get("/posts", AdminAuth, (req, res) => {
  //Find Posts
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

router.get("/post/:id", AdminAuth, (req, res) => {
  let postId = req.params.id;

  // Find a post
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

//update posts

router.put("/post/update/:id", AdminAuth, (req, res) => {
  // Find post and update
  Posts.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, post) => {
      if (err) {
        return res.status(400).jason({ error: err });
      }
      return res.status(200).json({
        success: "Updated Succesfully",
      });
    }
  );
});

//delete post

router.delete("/post/delete/:id", AdminAuth, (req, res) => {
  // Find post to delete
  Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
    if (err)
      return res.status(400).json({
        message: "Delete unsuccesful",
        err,
      });

    return res.json({
      message: "Delete succesful",
      deletePost,
    });
  });
});

module.exports = router;
