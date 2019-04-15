const db = require("./dbConfig.js");

module.exports = {
  getAll
};

function getAll() {
  return db("races");
}
