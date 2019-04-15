exports.up = function(knex) {
  return knex.schema
    .createTable("races", tbl => {
      tbl.increments();
      tbl.date("date").notNullable();
      tbl.string("track", 128);
      tbl.string("city", 128);
      tbl.string("horses");
    })
    .createTable("results", tbl => {
      tbl.increments();
      tbl
        .integer("race_id")
        .unsigned()
        .references("id")
        .inTable("races");

      tbl
        .integer("date_id")
        .unsigned()
        .references("date")
        .inTable("races");

      tbl
        .integer("track_id")
        .unsigned()
        .references("track")
        .inTable("races");

      tbl
        .integer("city_id")
        .unsigned()
        .references("city")
        .inTable("races");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("races");
};
