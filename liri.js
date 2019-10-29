require("dotenv").config();

var keys = require("./keys.js"); // Collecting API keys 
var axios = require("axios"); // for OMDB and Bands in Town API calls
var fs = require("fs");
var moment = require("moment");
moment().format();

var Spotify = require('node-spotify-api/index'); // VSCODE ERROR: Could not find a declaration file for module 'node-spotify-api/index'.
var spotify = new Spotify(keys.spotify);

var searchInput = process.argv[3]

// var omdb = keys.omdb; // Tried to pass api key through keys,js. returning 401 error
// var bandsInTown = keys.bandsInTown;

function searchOMDB(searchInput){
    if (!searchInput){
        searchInput = 'Mr.Nobody'
    }
    axios.get("http://www.omdbapi.com/?t="+searchInput+"&y=&plot=short&apikey=trilogy")
    .then(function (response){
        console.log(`
            Title: "${response.data.Title}"
            Released: ${response.data.Released}
            IMDB Rating: ${response.data.imdbRating}
            Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
            Produced in: ${response.data.Country}
            Language: ${response.data.Language}
            Plot: ${response.data.Plot}
            Cast: ${response.data.Actors}
        `)
    })
}

searchBandsInTown()

function searchBandsInTown(searchInput){
    if (!searchInput){
        searchInput = 'Celine Dion'
    }
    axios.get("https://rest.bandsintown.com/artists/" + searchInput + "/events?app_id=codingbootcamp")
    .then(function(response){
        for (i = 0; i < 24; i++){
            console.log(`
            RESULT #${[i]}
            ++++++++++++++++++++++++++++++++++++++++++++++++++
            Venue Name: ${response.data[i].venue.name}
            Venue Location: ${response.data[i].venue.city} ${response.data[i].venue.region}
            Event Date: ${response.data[i].datetime}
            ++++++++++++++++++++++++++++++++++++++++++++++++++
            `)
        }

    })
    .catch(function(error){
        console.log(error)
    })
}

// searchSpotify();

// function searchSpotify(searchInput){
//     if (!searchInput){
//         searchInput = 'The Sign'
//     }
//     spotify
//   .search({ type: 'track', query: searchInput, limit: 5})
//   .then(function(response) {
//     console.log(response.tracks);
//   })
//   .catch(function(err) {
//     console.log(err);
//     });
// }
