const bcrypt = require("bcryptjs");
exports.seed = function(knex, Promise) {
  return (
    knex("users")
      // .truncate()
      .then(function() {
        return knex("users").insert([
          {
            username: "Anubhav",
            password: bcrypt.hashSync("Bhambri", 6),
            email: "Ab@gmail.com"
          },
          {
            username: "Ilya",
            password: bcrypt.hashSync("Yelizarov", 6),
            email: "Iy@gmail.com"
          },
          {
            username: "Joanne",
            password: bcrypt.hashSync("Jordan", 6),
            email: "Jj@gmail.com"
          }
        ]);
      })
  );
};
