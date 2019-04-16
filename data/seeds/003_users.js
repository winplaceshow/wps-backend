const bcrypt = require("bcryptjs");
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Anubhav",
          password: bcrypt.hashSync("Bhambri", 10),
          email: "Ab@gmail.com"
        },
        {
          username: "Ilya",
          password: bcrypt.hashSync("Yelizarov", 10),
          email: "Iy@gmail.com"
        },
        {
          username: "Joanne",
          password: bcrypt.hashSync("Jordan", 10),
          email: "Jj@gmail.com"
        }
      ]);
    });
};
