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

  it("has a commen", () => {
    var comment = new Comment(new_comment);
    expect(comment.message).toEqual("some comment");
  });
});