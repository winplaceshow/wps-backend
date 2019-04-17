const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  addRace,
  raceById
};

function getAll() {
  return db("races");
}
function raceById(id) {
  return db("races")
    .where({ id })
    .first();
}
function addRace(race) {
  return db("races")
    .insert(race)
    .then(ids => ({ id: ids[0] }));
}
