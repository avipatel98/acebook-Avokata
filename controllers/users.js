const User = require("../models/user");

const UsersController = {
  New: (req, res) => {
    res.render("users/new", {});
  },

  Create: (req, res) => {
    const user = new User(req.body);
<<<<<<< HEAD
    user.friends = [];

    // const allUsersArray = await User.find({});

    // console.log(allUsersArray);

    User.findOne({ email: user.email }).then((userByEmail) => {
      if (!userByEmail) {
        User.findOne({ username: user.username }).then((userByUsername) => {
          if (!userByUsername) {
            user.save((err) => {
              if (err) {
                throw err;
              }
              res.redirect("/sessions/new");
            });
          } else {
            res.redirect("/users/new");
          }
        });
      } else {
        res.redirect("/users/new");
=======
    user.save((err) => {
      if (err) {
        throw err;
>>>>>>> main
      }
      res.status(201).redirect("/posts");
    });
  },
};

module.exports = UsersController;
