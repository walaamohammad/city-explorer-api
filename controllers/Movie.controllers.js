'use strict';

const Result =require("../models/Movie.models")
const axios = require('axios');


const movieController=(req,res)=>{
    let city = req.params.city_name;
    let movieUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.MOVIES_API_KEY}&query=${city}`
    
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