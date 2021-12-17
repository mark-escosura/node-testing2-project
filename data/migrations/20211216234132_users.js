exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id");
    table.string("user_name").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
