exports.up = function(knex) {
  return knex.schema.createTable("results", function(results) {
    results.increments("id");

    results
      .integer("race_id")
      .unsigned()
      .references("id")
      .inTable("races");

    results
      .integer("date_id")
      .unsigned()
      .references("date")
      .inTable("races");

    results
      .integer("track_id")
      .unsigned()
      .references("track")
      .inTable("races");

    results
      .integer("city_id")
      .unsigned()
      .references("city")
      .inTable("races");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("results");
};
