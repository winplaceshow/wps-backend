const db = require("../data/dbConfig.js");

module.exports = {
  getBy,
  addUser,
  getUsers,
  getById,
  remove,
  update
};

function getBy(username) {
  return db("users").where(username);
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

function update(id, changes) {
  return db("users")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
