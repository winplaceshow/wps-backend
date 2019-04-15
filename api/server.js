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

server.post("/races", async (req, res) => {
  try {
    const race = await Races.insert(req.body);
    res.status(201).json(race);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "We encountered an error adding the race"
    });
  }
});

module.exports = server;
