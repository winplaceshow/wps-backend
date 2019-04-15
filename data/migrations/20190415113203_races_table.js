exports.up = function(knex) {
  return knex.schema.createTable("races", tbl => {
    tbl.increments();
    tbl.date("date").notNullable();
    tbl.string("track", 128);
    tbl.string("city", 128);
    tbl.string("horses");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("races");
};
