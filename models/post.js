const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  message: String,
<<<<<<< HEAD
  likes: Number,
  likedBy: Array,
  isLiked: Boolean,
  isMultiple: Boolean,
  commentsPlural: Boolean,
  comments: Array,
  requestStatus: String,
  requestButtonEnabled: Boolean,
=======
  likes: { type: Number, default: 0 }
>>>>>>> main
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
