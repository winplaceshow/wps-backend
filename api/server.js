const express = require("express");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("Win Place Show Api is up and running!");
});

module.exports = server;
