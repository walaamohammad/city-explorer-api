
'use strict';

class Result {
    constructor(film){
      this.title=film.original_title;
      this.overview=film.overview;
      this.average_votes=film.vote_average;
      this.total_votes=film.vote_count;
      this.image_url=`https://image.tmdb.org/t/p/w500/${film.poster_p}`;
      this.popularity=film.popularity;
      this.released_on=film.release_date;
  
    }
  }
  module.exports= Result;