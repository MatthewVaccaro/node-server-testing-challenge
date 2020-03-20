exports.up = function(knex) {
  return knex.schema.createTable("resources", table => {
    table.increments("id");
    table
      .text("name")
      .notNullable()
      .unique();
    table.integer("amount").notNullable();
  });
};

exports.down = function(knex) {};
