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

server.use("/", authRouter);
server.use("/users", usersRouter);
server.use("/races", restricted, racesRouter);

server.get("/", async (req, res) => {
  res.status(200).send("Win Place Show is up and running!");
});

module.exports = server;
