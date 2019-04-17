const router = require("express").Router();
const db = require("../data/dbConfig.js");
const Races = require("./racesModel");

router.get("/", async (req, res) => {
  try {
    const races = await Races.getAll(req.query);
    res.status(200).json(races);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving races" });
  }
});

router.post("/", async (req, res) => {
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

router.get("/:id", async (req, res) => {
  try {
    const race = await Races.raceById(req.params.id);

    if (race) {
      res.status(200).json(race);
    } else {
      res
        .status(404)
        .json({ message: "The race with that ID does not exist." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Race information could not be retrieved."
    });
  }
});

router.get("/:id/horses", async (req, res) => {
  const { id } = req.params;
  try {
    const horses = await db("horses as h").where({ "h.race_id": id });
    const races = await db("races as r")
      .where({ "r.id": id })
      .first();
    res.status(200).json({ ...races, horses });
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving horses for this race"
    });
  }
});

module.exports = router;
