exports.up = function(knex) {
  return knex.schema.createTable("horses", function(tbl) {
    tbl.increments();

    tbl.string("name");

    tbl.integer("winnings");

    tbl.integer("rank");

    tbl
      .integer("race_id")
      .unsigned()
      .references("id")
      .inTable("races")
      .onDelete("RESTRICT")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("horses");
};
