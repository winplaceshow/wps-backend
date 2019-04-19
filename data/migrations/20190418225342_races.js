exports.up = function(knex) {
  return knex.schema.createTable("races", tbl => {
    tbl.increments();
    tbl.string("date").notNullable();
    tbl.string("track", 128).notNullable();
    tbl.string("city", 128).notNullable();
    tbl.string("horses");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("races");
};
