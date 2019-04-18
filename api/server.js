const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const usersRouter = require("../users/usersRouter");
const racesRouter = require("../races/racesRouter");
const authRouter = require("../auth/auth-router");
const restricted = require("../auth/restricted.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/auth", authRouter);
server.use("/users", usersRouter);
server.use("/races", racesRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Place Show is up and running!");
});

// server.post("/login", (req, res) => {
//   let { username, password } = req.body;

//   if (!username || !password) {
//     res.status(404).json({ error: "Please provide your login credentials" });
//   } else {
//     Users.getBy({ username })
//       .first()
//       .then(user => {
//         res.status(200).json({
//           message: `Welcome back ${user.username}!`,
//           id: user.id
//         });
//       })
//       .catch(error => {
//         res.status(500).json(error);
//       });
//   }
// });

module.exports = server;
