require("dotenv").config();

console.log('this is loaded');

class Keys { // create class of keys that holds api key values for each api
    constructor(){
        this.spotify = { // Spotify API
            id: process.env.SPOTIFY_ID,
            secret: process.env.SPOTIFY_SECRET
        }
        this.omdb = { // OMDB API 
            id: process.env.OMDB_KEY
        }
        this.bandsInTown = { // Bands in Town API
            id: process.env.BANDS_IN_TOWN_KEY
        }
    }
}

module.exports = Keys // Export keys module
