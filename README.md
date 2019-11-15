# LIRI Bot Assignment


## Overview

In this assignment, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

## Before you begin

Install the necessary packages!

![image](https://user-images.githubusercontent.com/54034107/68906868-bf17c300-0713-11ea-9058-b7287a40a677.png)

## Movie This
node liri.js movie-this '<movie name here>'

This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.


If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

![image](https://user-images.githubusercontent.com/54034107/68907093-7e6c7980-0714-11ea-9d88-2c0f977c5d35.png)

![image](https://user-images.githubusercontent.com/54034107/68907107-8b896880-0714-11ea-9d31-e9b1ad67ee17.png)

## Concert This
node liri.js concert-this <artist/band name here>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:


* Name of the venue
* Venue location
* Date of the Event (use moment to format this as ("MM/DD/YYYY")

![image](https://user-images.githubusercontent.com/54034107/68907139-bbd10700-0714-11ea-95b3-47a20ff0a53e.png)

![image](https://user-images.githubusercontent.com/54034107/68907155-cb505000-0714-11ea-8011-6579c157417f.png)

## Spotify This
node liri.js spotify-this-song '<song name here>'

I am still working on this function as it is throwing an error.

This function should:
Show the following information about the song in your terminal/bash window


* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from


If no song is provided then your program will default to "The Sign" by Ace of Base.




