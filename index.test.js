const server = require("./server");
const supertest = require("supertest");
const db = require("./data/config");

//Welcome Router
test("welcome route", async () => {
  const res = await supertest(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe(res.body.message);
});

beforeEach(async () => {
  await db.seed.run();
});

test("POST resource", async () => {
  const res = await supertest(server)
    .post("/api")
    .send({
      name: "blue",
      amount: 1
    });

  expect(res.statusCode).toBe(201);
  expect(res.type).toBe("application/json");
  expect(res.body[0].name).toBe("blue");
});

test("DELETE resource", async () => {
  const res = await supertest(server).delete("/api/1");
  expect(res.statusCode).toBe(200);
});
