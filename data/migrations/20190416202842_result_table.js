exports.up = function(knex) {
  return knex.schema.createTable("result", function(result) {
    result.increments();

    result.integer("winnings");

    result
      .string("horse")
      .unsigned()
      .references("horses")
      .inTable("races");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("result");
};
