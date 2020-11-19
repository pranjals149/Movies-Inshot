<h1 align='center'>Movies In-Shot</h1>

<p align='center'><img src='https://raw.githubusercontent.com/pranjals149/acevent/dc290bd44058661164ecd25c70216fe629e8da8d/movies-inshot/logo.svg' height=400 width=400 /></p>

### Description

This app is made by using React. This is a single page application which shows up all the movies fetched by The Movies Database. When a user clicks on a poster of a movie it fetches the youtube link of the trailer and displays the trailer video in an embedded Youtube component. The Banner at the top randomly changes all the time whenever the page is refreshed.

### Setup

To setup this application in your local system, follow the given steps -

1. Fork and clone this repository - `git clone https://github.com/pranjals149/Movies-Inshot.git`
2. Now, move into the repository's directory - `cd Movies-Inshot`
3. Now, install the node modules used in this application - `npm install`
4. Now, run the application - `npm start`.

**Your application will be setup by running on http://localhost:3000/**

### Working Screenshot

<img src='Movies-Inshot.gif' />

### Dependencies used

1. axios
2. movie-trailer
3. react-youtube

**Note - If the trailer of the clicked movie poster is not available or if the application is having some problem making connection with the youtube url then the trailer video will not be played.**
