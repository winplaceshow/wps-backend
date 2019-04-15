exports.seed = function(knex, Promise) {
  return knex("races")
    .truncate()
    .then(function() {
      return knex("races").insert([
        {
          date: "2011 / 01 / 01",
          track: "Aqueduct Racetrack",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",

          city: "Queens, NY"
        },
        {
          date: "2011 / 01 / 02",
          track: "Arlington International Racecourse",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Arlington Heights, IL"
        },
        {
          date: "2011 / 01 / 03",
          track: "Atlantic City Race Course",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Hamilton Township, NJ"
        },
        {
          date: "2012 / 01 / 04",
          track: "Fairplex",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Pomona, CA"
        },
        {
          date: "2012 / 01 / 05",
          track: "Belmont Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Elmont, NY"
        },
        {
          date: "2012 / 01 / 06",
          track: "Belterra Park Cincinnati",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Cincinnati, OH"
        },
        {
          date: " 2012 / 01 / 07",
          track: "Hollywood Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Inglewood, CA"
        },
        {
          date: "2013 / 01 / 08",
          track: "Calder Casino",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Miami Gardens, FL"
        },
        {
          date: "2013 / 01 / 09",
          track: "Canterbury Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Shakopee, MN"
        },
        {
          date: "2013 / 01 / 10",
          track: "Churchill Downs",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Louisville, KY"
        }
      ]);
    });
};
