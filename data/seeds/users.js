exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { user_id: 1, user_name: "Mark" },
        { user_id: 2, user_name: "Janita" },
        { user_id: 3, user_name: "Jeremiah" },
      ]);
    });
};
