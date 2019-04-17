const db = require("../data/dbConfig.js");

module.exports = {
  getAll,
  addRace,
  raceById
  // addUser,
  // getBy,
  // getById,
  // getUsers,
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
// function getBy(username) {
//   return db("users").where(username);
// }

// async function addUser(user) {
//   const [id] = await db("users").insert(user);

//   return getById(id);
// }

// function getUsers() {
//   return db("users");
// }
// function getById(id) {
//   return db("users")
//     .where({ id })
//     .first();
// }
