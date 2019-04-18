const request = require("supertest");
const server = require("../api/server");
const Races = require("./racesModel");
const db = require("../data/dbConfig");

describe("races", () => {
  describe("GET request", () => {
    it("returns 200 status code ", () => {
      return request(server)
        .get("/races")
        .then(response => {
          expect(response.status).toEqual(200);
        });
    });
    it("returns 200 status code for /:id ", () => {
      return request(server)
        .get("/races/:id")
        .then(res => {
          expect(res.status).toEqual(200);
        });
    });
    it("returns an array", async () => {
      const res = await request(server).get("/races");
      if (res.body.length === 0) {
        expect(res.body).toEqual([]);
      }
    });
  });
});
// describe("test route", () => {
//   beforeEach(async () => {
//     await db("races").truncate();
//   });
//   it("should add race, given the correct info", async () => {
//     await Races.addRace({ date: "02/02/2002", track: "hp" });

//     const races = await db("races");
//     expect(races).toHaveLength(13);
//   });
// });

// it("returns 201 status code", async () => {
//   const expected = {
//     id: 11,
//     date: "01/09/2012",
//     track: "Test Track",
//     city: "Test City",
//     horses:
//       "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold"
//   };
//   const response = await request(server)
//     .post("/races")
//     .send(expected);

//   expect(response.status).toEqual(201);
// });
