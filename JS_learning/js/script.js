"use strict";

const numebrOfFilms = +promt("How match films do you watchts?");

const personalMovieDB = {
    count: numebrOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("One of the last watching films?"),
      b = prompt("How macth do you rate it?"),
      c = prompt("One of the last watching films?"),
      d = prompt("How macth do you rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

