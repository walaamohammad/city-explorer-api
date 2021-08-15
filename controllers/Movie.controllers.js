'use strict';

const Result =require("../models/Movie.models")
const Cache = require('../helper/cache.helper');
let cacheObject = new Cache();
const axios = require('axios');


const movieController=(req,res)=>{
    let city = req.params.city_name;
    let movieUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.MOVIES_API_KEY}&query=${city}`

    
  cacheObject.aflam.push({
    "query": query,
    "data": callMovies
  })
  return callMovies;
};
if((Date.now() - cacheObject.timeStamp) > 86400000){ // reset the cache object if the timeStamp exeeds 1 day
  cacheObject = new Cache();
}
if(cacheObject.aflam.length){
 const filteredData = cacheObject.aflam.find((movie) =>{
   return movie.query === query;
 });
    
    let newFilms=[]
    axios.get(movieUrl).then(moveisData=>{
      moveisData.data.results.forEach((film)=>newFilms.push(new Result(film)));
      res.send(newFilms);
    })
    .catch((error)=>{
      res.status(500).send(error);
    })

module.exports= movieController;


















}