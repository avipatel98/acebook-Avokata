const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts");

router.get("/", PostsController.Index);
router.post("/", PostsController.Create);
router.get("/new", PostsController.New);
<<<<<<< HEAD
router.get("/:id", PostsController.PostByID);
router.patch("/:id/like", PostsController.Like);
router.get("/:id/comment", PostsController.Comment);
router.post("/:id", PostsController.PostComment);
=======
>>>>>>> main

module.exports = router;
