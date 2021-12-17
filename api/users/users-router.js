const User = require("./users-model.js");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  User.getAll()
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
