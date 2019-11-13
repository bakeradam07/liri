require("dotenv").config();

var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");



var concertSongMovie = process.argv[2];
var userSelection = process.argv.slice(3).join(" ");

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

function movieThis() {
    if (!userSelection) {
        userSelection = "Mr. Nobody";
        console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }

    axios.get("http://www.omdbapi.com/?t=" + userSelection + "&y=&plot=short&apikey=trilogy").then(function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Released: " + response.data.Year);
        console.log("IMDB Rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
        console.log("Country Produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Cast: " + response.data.Actors);
    });
};