const database = require("../../data/db-config.js");

const getAll = () => {
  return database("users");
};

const getById = (user_id) => {
  return database("users").where("user_id", user_id).first();
};

const create = (newUser) => {
  return database ('users')
    .insert(newUser)
    .then(([id]) => {
      return getById(id)
    })
};

const update = (user_id) => {
  return null;
};

const destroy = (user_id) => {
  return null;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};
