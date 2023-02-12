const mongoose = require("mongoose");

// Set schema for posts
const postSchema = new mongoose.Schema({
  student_id: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("posts", postSchema);
