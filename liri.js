require("dotenv").config();

var keys = require("./keys.js"); // Collecting API keys 
var axios = require("axios"); // for OMDB and Bands in Town API calls
var fs = require("fs");
var moment = require("moment");
moment().format();

var Spotify = require('node-spotify-api/index'); 

let masterKey = new keys();
var spotify = new Spotify(masterKey.spotify);
var omdb = masterKey.omdb.id; 
var bandsInTown = masterKey.bandsInTown.id;


var command = process.argv[2];
var searchInput = process.argv[3];

switchFunction(command, searchInput)

function switchFunction(command, searchInput){
    switch (command) {
        case 'concert-this':
            searchBandsInTown(searchInput);
            break;
        case 'spotify-this-song':
            searchSpotify(searchInput);
            break;
        case 'movie-this':
            searchOMDB(searchInput);
            break;
        case 'do-what-it-says':
            justDoIt(searchInput);
            break;

    };
}

// searchOMDB();

function searchOMDB(){
    if (!searchInput){
        searchInput = 'Mr.Nobody';
    };
    axios.get(`http://www.omdbapi.com/?t=" + ${searchInput} + "&y=&plot=short&apikey=${omdb}`)
    .then(function (response){
        console.log(`
            ++++++++++++++++++++++++++++++++++++++++++++++++++
            Title: "${response.data.Title}"
            Released: ${response.data.Released}
            IMDB Rating: ${response.data.imdbRating}
            Rotten Tomatoes Rating: ${response.data.Ratings[1].Value}
            Produced in: ${response.data.Country}
            Language: ${response.data.Language}
            Plot: ${response.data.Plot}
            Cast: ${response.data.Actors}
            ++++++++++++++++++++++++++++++++++++++++++++++++++
        `);
    });
};

// searchBandsInTown();

function searchBandsInTown(){
    if (!searchInput){
        searchInput = 'Celine Dion'
    };
    axios.get(`https://rest.bandsintown.com/artists/${searchInput}/events?app_id=${bandsInTown}`)
    .then(function(response){
        for (i = 0; i < 5; i++){
            // console.log(response) // responses for concert search not working with searchInput variable. 
            console.log(`
            RESULT #${i+1}
            ++++++++++++++++++++++++++++++++++++++++++++++++++
            Artist(s): ${response.data[i].lineup} 
            Venue Name: ${response.data[i].venue.name}    
            Venue Location: ${response.data[i].venue.city} ${response.data[i].venue.region}
            Event Date: ${response.data[i].datetime}
            ++++++++++++++++++++++++++++++++++++++++++++++++++
            `);
        };

    }).catch(function(error){
        console.log(error)
    });
};




// searchSpotify()

function searchSpotify(){
    if (!searchInput){
        searchInput = 'The Sign Ace';
    };
    spotify
  .search({ type: 'track', query: searchInput, limit: 5})
  .then(function(response) {
    var spotifyResult = `
        ++++++++++++++++++++++++++++++++++++++++++++++++++
        Artist(s): ${response.tracks.items[0].artists[0].name}
        Song Title: ${response.tracks.items[0].name}
        Link to Track: ${response.tracks.items[0].external_urls.spotify} 
        Album: ${response.tracks.items[0].album.name}
        ++++++++++++++++++++++++++++++++++++++++++++++++++
    `;
    console.log(spotifyResult)
  }).catch(function(err) {
    console.log(err);
    });
};

function justDoIt() {
    fs.readFile('random.txt', 'utf8', function (error, data){
        if (error){
            console.log(error);
        }
        var dataArr = data.split(',');
        searchInput = dataArr[1];
        switchFunction(dataArr[0]);
        
    })
}

