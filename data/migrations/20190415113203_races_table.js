exports.up = function(knex) {
  return knex.schema.createTable("races", tbl => {
    tbl.increments();
    tbl.julianday("date").notNullable();
    tbl.string("track", 128);
    tbl.string("city", 128);
    tbl.string("horses");
  });
  // .createTable("results", function(results) {
  //   results.increments("id");

  //   results
  //     .integer("race_id")
  //     .unsigned()
  //     .references("id")
  //     .inTable("races");

  //   results
  //     .integer("date_id")
  //     .unsigned()
  //     .references("date")
  //     .inTable("races");

  //   results
  //     .integer("track_id")
  //     .unsigned()
  //     .references("track")
  //     .inTable("races");

  //   results
  //     .integer("city_id")
  //     .unsigned()
  //     .references("city")
  //     .inTable("races");

  //   results.unique(["race_id", "date_id", "track_id", "city_id"]);
  // });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("races");
};
