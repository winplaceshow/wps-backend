exports.seed = function(knex) {
  return knex("results")
    .truncate()
    .then(function() {
      return knex("results").insert([
        { race_id: 1, date_id: 1, track_id: 1, city_id: 1 },
        { race_id: 2, date_id: 2, track_id: 2, city_id: 2 },
        { race_id: 3, date_id: 3, track_id: 3, city_id: 3 }
      ]);
    });
};
