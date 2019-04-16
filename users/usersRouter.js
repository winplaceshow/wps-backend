const router = require("express").Router();

const Users = require("../races/racesModel");

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
