require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios"); // for OMDB and Bands in Town API calls
var fs = require("fs");
var moment = require("moment");
moment().format();

var Spotify = require('node-spotify-api/index');
var spotify = new Spotify(keys.spotify);

// var omdb = keys.omdb; // Tried to pass api key through keys,js. returning 401 error


spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response.tracks);
  })
  .catch(function(err) {
    console.log(err);
  });

  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function(response) {
      // Then we print out the imdbRating
      // console.log(response)
      console.log("The movie's rating is: " + response.data.imdbRating);
    }
  );

  axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
      function(response) {
          console.log(response);
      }
  )