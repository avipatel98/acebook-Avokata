var mongoose = require("mongoose");

require("../mongodb_helper");
var Comment = require("../../models/comment");
// If spec changes for a post change the dictionary fields below
var new_comment = {author: "somerandomuser", message: "some comment", likes: 0}

describe("Comment model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.comments.drop(() => {
      done();
    });
  });

  it("has a comment", () => {
    var comment = new Comment(new_comment);
    expect(comment.message).toEqual("some comment");
  });
  it("can save a comment", (done) => {
    var comment = new Comment(new_comment);

    comment.save((err) => {
      expect(err).toBeNull();

      Comment.find((err, comments) => {
        expect(err).toBeNull();

        expect(comments[0]).toMatchObject(new_comment);
        done();
      });
    });
  });
});