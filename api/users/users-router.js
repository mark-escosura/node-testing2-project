const User = require("./users-model.js");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  User.getAll()
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

// [GET] returns a users id
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await User.getById(id);
  try {
    if (!id) {
      next({ status: 400, message: "No such ID exist!" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    next(err);
  }
});

// [POST] returns a newly created record of user
router.post("/", async (req, res, next) => {
    const user = await User.create(req.body)
    try {
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
});

module.exports = router;
