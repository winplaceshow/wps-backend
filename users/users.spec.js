const request = require("supertest");
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("users", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
  describe("GET requests", () => {
    it("returns status code 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
