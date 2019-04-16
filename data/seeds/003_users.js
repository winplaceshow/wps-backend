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
          password: "Bhambri",
          email: "Ab@gmail.com"
        },
        {
          username: "Ilya",
          password: "Yelizarov",
          email: "Iy@gmail.com"
        },
        {
          username: "Joanne",
          password: "Jordan",
          email: "Jj@gmail.com"
        }
      ]);
    });
};
