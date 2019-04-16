const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../api/secrets.js").jwtSecret;
const Races = require("../data/racesModel.js");

router.post("/signup", (req, res) => {
  let race = req.body;

  const hash = bcrypt.hashSync(race.password, 4);
  user.password = hash;

  Races.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Races.getBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res
          .status(200)
          .json({ message: `Welcome back ${user.username}!`, token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "2d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
