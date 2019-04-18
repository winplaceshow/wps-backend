exports.seed = function(knex, Promise) {
  return knex("horses")
    .truncate()
    .then(function() {
      return knex("horses").insert([
        { race_id: 1, name: "Storm Cat", winnings: "45,000", rank: 2 },
        { race_id: 1, name: " A.P. Indy", winnings: "75,000", rank: 1 },
        { race_id: 1, name: " Gone West", winnings: "5,000", rank: 4 },
        { race_id: 1, name: " Giant's Causeway", winnings: "15,000", rank: 3 }
      ]);
    });
};
