const request = require("supertest");
const server = require("../api/server.js");
const db = require("../data/dbConfig");

describe("auth", () => {
  describe("Auth requests", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });
    // it("returns 201 status on successful signup", async () => {
    //   const expected = {
    //     username: "Ilya",
    //     password: "Yelizarov",
    //     email: "Iy@gmail.com"
    //   };
    //   const res = await request(server)
    //     .post("/signup")
    //     .send(expected);

    //   expect(res.status).toEqual(201);
    // });
    it("returns 404 if username is omitted from signup", async () => {
      const expected = { password: "Yelizarov", email: "Iy@gmail.com" };
      const res = await request(server)
        .post("/signup")
        .send(expected);

      expect(res.status).toEqual(404);
    });
    it("returns 404 if password is omitted from signup", async () => {
      const expected = { username: "Ilya", email: "Iy@gmail.com" };
      const res = await request(server)
        .post("/signup")
        .send(expected);

      expect(res.status).toEqual(404);
    });
    it("returns 404 if password AND username are omitted from signup", async () => {
      const expected = { email: "Iy@gmail.com" };
      const res = await request(server)
        .post("/signup")
        .send(expected);

      expect(res.status).toEqual(404);
    });
    it("returns 404 if email is omitted from signup", async () => {
      const expected = { username: "Ilya", password: "Yelizarov" };
      const res = await request(server)
        .post("/signup")
        .send(expected);

      expect(res.status).toEqual(404);
    });
    it("returns 404 if username, password AND email are omitted from signup", async () => {
      const expected = {};
      const res = await request(server)
        .post("/signup")
        .send(expected);

      expect(res.status).toEqual(404);
    });
  });
});
