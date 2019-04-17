exports.seed = function(knex, Promise) {
  return knex("races")
    .truncate()
    .then(function() {
      return knex("races").insert([
        {
          date: "01/01/2011",
          track: "Aqueduct Racetrack",

          city: "Queens"
        },
        {
          date: "01/ 02/2011",
          track: "Arlington International Racecourse",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Arlington Heights"
        },
        {
          date: "01/03/2011",
          track: "Atlantic City Race Course",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Hamilton Township"
        },
        {
          date: " 01/04/2012",
          track: "Fairplex",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Pomona"
        },
        {
          date: " 01/05/2012",
          track: "Belmont Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Elmont"
        },
        {
          date: " 01/06/2012",
          track: "Belterra Park Cincinnati",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Cincinnati"
        },
        {
          date: " 01/07/2012",
          track: "Hollywood Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Inglewood"
        },
        {
          date: " 01/08/2012",
          track: "Calder Casino",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Miami Gardens"
        },
        {
          date: " 01/09/2012",
          track: "Canterbury Park",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Shakopee"
        },
        {
          date: " 01/10/2012",
          track: "Churchill Downs",
          horses:
            "Storm Cat, A.P. Indy,Mr. Prospector, Unbridled's Song, Gone West, Kingmambo, Giant's Causeway, Danzig, Seeking the Gold",
          city: "Louisville"
        }
      ]);
    });
};
