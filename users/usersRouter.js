const router = require("express").Router();

const Users = require("./usersModel.js");

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get("/:id", async (req, res) => {
  try {
    const user = await Users.getById(req.params.id);

    if (user) {
      res.status(200).json(user);
    } else {
      res
        .status(404)
        .json({ message: "The user with that ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "User information could not be retrieved."
    });
  }
});

module.exports = router;
