const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = require("../api/secrets.js").jwtSecret;
const Users = require("../races/racesModel.js");

router.post("/signup", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 4);
  user.password = hash;
  if (!user.username) {
    res.status(404).json({ error: "Please provide username to signup" });
  }
  if (!user.password) {
    res.status(404).json({ error: "Please provide password to signup" });
  }
  if (!user.email) {
    res.status(404).json({ error: "Please provide email to signup" });
  }
  Users.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json({ error: "We encountered an error during signup" });
    });
});
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  if (!username) {
    res.status(404).json({ error: "Please provide username to login" });
  }
  if (!password) {
    res.status(404).json({ error: "Please provide password to login" });
  }
  Users.getBy({ username })
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
    username: user.username
  };
  const options = {
    expiresIn: "2d"
  };
  return jwt.sign(payload, secret, options);
}

module.exports = router;
