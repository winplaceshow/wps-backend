const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("./secrets.js").jwtSecret;
// const authRouter = require("../auth/auth-router.js");
const Races = require("../data/racesModel");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use("/auth", authRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Win Place Show is up and running!");
});

server.get("/races", async (req, res) => {
  try {
    const races = await Races.getAll(req.query);
    res.status(200).json(races);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving races" });
  }
});
server.get("/test", async (req, res) => {
  res.status(200).send("testing endpoint");
});

server.post("/races", async (req, res) => {
  try {
    const race = await Races.addRace(req.body);
    res.status(201).json(race);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "We encountered an error adding the race"
    });
  }
});
server.post("/signup", (req, res) => {
  let user = req.body;

  const hash = bcrypt.hashSync(user.password, 4);
  user.password = hash;

  Races.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});
server.post("/login", (req, res) => {
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

module.exports = server;
