'use strict'
const express = require('express') ;
const server = express() ;
const cors = require('cors'); 
require('dotenv').config();
const PORT=process.env.PORT;
const weather=require('./data/weather.json');
server.use(cors());
const axios = require('axios');
const { response } = require('express');


server.listen(PORT || 3008,()=>{
  console.log(`server is running is in port ${PORT}`) // to check if localhost is run
})
server.get('/',(req,res)=>{    // '/' endpoint with get 
  res.send('hello world')
})

server.get('/weather/:city_name',(req,res)=>{
  let newWeather=[];
  const findCity=weather.find((element)=>element.city_name === req.params.city_name); // i need to find just city wuth forecast date and descreption
  if(findCity){
    findCity.data.map((day)=>newWeather.push(new Forecast(day)));
    res.send(newWeather);
    
  }else{
    res.send('the city  was not found');
  }
})

server.get('/getWeather/:lat/:lon', weatherHandler); // weather ROUTE
//Create a corresponding class for the result.



function weatherHandler (req,response) { //WEATHERHANDLER
 
  let lon =req.params.lon;
  let lat  =req.params.lat;
 
console.log(lon + '  ' + lat)
  // let weatherKey=process.env.WEATHER_KEY;
  let weatherUrl = ` http://api.weatherbit.io/v2.0/forecast/daily/?key=9a0d46305384474b9018006d4dd3be71&lat=${lat}&lon=${lon}`
  
  let newWeather = []
  axios.get(weatherUrl).then(weatherData => {
    weatherData.data.data.forEach((day)=> newWeather.push(new Forecast(day)));
    console.log('sent')
    response.send(newWeather);
})
 .catch((error)=> {
  response.status(500).send(error);
});

}

///___________________________________Movie____________________________________________//
 

server.get('/getMovies/:city_name' ,moviesHandler)

function moviesHandler (req,response){
let city = req.params.city_name;
let movieUrl = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.MOVIES_API_KEY}&query=${city}`

let newFilms=[]
axios.get(movieUrl).then(moveisData=>{
  moveisData.data.results.forEach((film)=>newFilms.push(new Result(film)));
  response.send(newFilms);
})
.catch((error)=>{
  response.status(500).send(error);
})

}

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

class Forecast {
  constructor(day) {
      this.date = day.datetime;
      this.description = day.weather.description
  }
};
