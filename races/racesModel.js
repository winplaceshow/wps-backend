const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  addRace,
  addUser,
  getBy,
  getById,
  getUsers,
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

function getBy(username) {
  return db("users").where(username);
}

function addRace(race) {
  return db("races")
    .insert(race)
    .then(ids => ({ id: ids[0] }));
}
async function addUser(user) {
  const [id] = await db("users").insert(user);

  return getById(id);
}

function getUsers() {
  return db("users");
}
function getById(id) {
  return db("users")
    .where({ id })
    .first();
}
