exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("result")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("result").insert([{ winnings: "452,000 " }]);
    });
};
