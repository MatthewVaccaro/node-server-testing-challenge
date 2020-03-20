const db = require("./helperFunctions");
const config = require("./data/config");

beforeEach(async () => {
  await config.seed.run();
});

test("Insert Function", async () => {
  const res = await db.create({ name: "pool", amount: 1 });
  console.log(res);
  expect(res[0].name).toBe("pool");
});
