console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {    // Gave 401 error
    id: process.env.OMDB_KEY
};

exports.bandsInTown = {     // Gave 401 error
    id: process.env.BANDS_IN_TOWN_KEY
};