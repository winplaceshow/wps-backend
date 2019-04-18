const request = require("supertest");
const server = require("../api/server");
const Users = require("./usersModel");
const db = require("../data/dbConfig");

describe("users", () => {
  describe("GET /:id route", () => {
    it("returns status code 200", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
