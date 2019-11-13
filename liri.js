require("dotenv").config();

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");


var concertSongMovie = process.argv[2];
var userSelection = process.argv[3];

switch (concertSongMovie) {
    case "concert-this":
        concertThis();
        break;

    case "spotify-this-song":
        spotifyThis();
        break;
    
    case "movie-this":
        movieThis();
        break;
        
    case "do-what-it-says":
        doWhatitSays();
        break;
}