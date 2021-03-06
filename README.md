# Project: LIRI Bot

**LIRI** is a Language Interpretation and Recognition Interface. LIRI is similar to iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives data in return.

Use Node JS to create a LIRI bot, like iPhone's SIRI, but takes in commands through Language vs Speech using the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`
   
   
## Tech

**GitHub** - file repository

**Visual Studio Code** - text editor

**Node.js**

**APIs:**

  * **Spotify** (https://developer.spotify.com/)
  * **OMDB** (http://www.omdbapi.com) 
  * **Bands In Town** (http://www.artists.bandsintown.com/bandsintown-api)

**NPM Packages:**

  * **Node-Spotify-API** (https://www.npmjs.com/package/node-spotify-api)
  * **Axios** (https://www.npmjs.com/package/axios)
  * **Moment** (https://www.npmjs.com/package/moment)
  * **DotEnv** (https://www.npmjs.com/package/dotenv)

   
## Prerequisites

- Node.js - download the latest version of Node (https://nodejs.org/en/).

- Make a new GitHub repository called **liri-node-app** and clone it to your computer.

- Send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs.

  
## What Each Command Does

**LIRI** searches **Bands in Town** for concerts, **Spotify** for songs, and **OMDB** for movies.

1. **`node liri.js concert-this <artist name here>`**

    ![Results](./images/concert-this-input.png)

   * Searches the Bands in Town Artist Events API for an artist and renders the following information about each event to the terminal:
    ```
     - Concert Line-up
     
     - Name of the venue

     - Venue location

     - Date of the Event (using the format "MMM/Do/YYYY")
    ```
    * If no search criteria is provided the function defaults to search for Celine Dion concerts.
    
    ![Results](./images/concert-this.png)
    
2. **`node liri.js spotify-this-song <song name here>`**

   * Displays the following information about the selected song in your terminal/bash window

    ![Results](./images/spotify-this-song-input.png)

    ```
     - Artist(s)

     - The song's title

     - A link of the song from Spotify

     - The album containing the track
    ```
   * If no search criteria is provided the function defaults to search for "The Sign" by Ace of Base.

    ![Results](./images/spotify-this-song.png)

3. **`node liri.js movie-this <movie name here>`**

    ![Results](./images/movie-this-input.png)

   * This will output the following movie information to your terminal/bash window:
     ```
       - Title
       - Year movie was released
       - IMDB Rating
       - Rotten Tomatoes Rating
       - Country where the movie was produced
       - Language(s)
       - Plot of the movie
       - Film's cast
     ```
   * If no search criteria is provided the function defaults to search for  'Mr. Nobody.'

   ![Results](./images/movie-this.png)

4. **`node liri.js do-what-it-says`**

    ![Results](./images/do-what-it-says.png)

     * Runs `spotify-this-song` for "I Want it That Way".
     


