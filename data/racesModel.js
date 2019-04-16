const db = require("./dbConfig.js");

module.exports = {
  getAll,
  addRace,
  addUser,
  getBy,
  getById,
  getUsers
};

function getAll() {
  return db("races");
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
