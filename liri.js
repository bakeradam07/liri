require("dotenv").config();

var keys = require("./keys.js");
//var spotify = new Spotify(keys.spotify);
// var Spotify = require('node-spotify-api');
var fs = require("fs");
var axios = require("axios");
var moment = require("moment");

// console.log(keys.spotify);



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

function concertThis() {
    if (!userSelection) {
        userSelection = "Linkin Park";
    }
    
    axios.get("https://rest.bandsintown.com/artists/" + userSelection + "/events?app_id=codingbootcamp").then(function(response) {

        for (i = 0; i < 10; i++) {      
        console.log("Venue: " + response.data[i].venue.name);
        console.log("Location: " + response.data[i].venue.city + ", " + response.data[i].venue.country);
        console.log("Date: " + moment(response.data[i].datetime).format("MM/DD/YYYY"));
        console.log("------------------------------");

        }
        
    });
    
};

function spotifyThis() {
    if (!userSelection) {
        userSelection = "The Sign"
    }

    spotify.search({type: "track", query: userSelection}, function(err, data){
        if (err) {
            console.log('Error occurred: ' + err);
        }
        console.log(userSelection);
        console.log("Artist: " + data.tracks.items.artists.name);
        console.log("Song Name: " + data.tracks.items.name);
        console.log("Preview Link: " + data.tracks.items.preview_url);
        console.log("Album: " + data.tracks.items.album.name);
    });
};

