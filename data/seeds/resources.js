exports.seed = async function(knex) {
  await knex("resources").truncate();
  await knex("resources").insert([{ name: "headphones", amount: 1 }]);
};
