const router = require("express").Router();

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

module.exports = router;
