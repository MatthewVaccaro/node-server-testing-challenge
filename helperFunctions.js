const db = require("./data/config");

async function create(body) {
  return db
    .insert(body)
    .into("resources")
    .then(res => {
      const id = res[0];
      return db("*")
        .from("resources")
        .where({ id });
    });
}

async function remove(id) {
  return db("resources")
    .where("id", id)
    .del();
}

module.exports = {
  create,
  remove
};
