const express = require("express");
const Races = require("../data/racesModel");
const server = express();
server.use(express.json());

server.get("/", async (req, res) => {
  res.status(200).send("Win Place Show Api is up and running!");
});

server.get("/races", async (req, res) => {
  try {
    const races = await Races.getAll(req.query);
    res.status(200).json(races);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving races" });
  }
});

module.exports = server;
