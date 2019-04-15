const db = require("./dbConfig.js");

module.exports = {
  getAll,
  addRace
};

function getAll() {
  return db("races");
}

function addRace(race) {
  return db("races")
    .insert(race)
    .then(ids => ({ id: ids[0] }));
}
