'use strict'
const express = require('express') ;
const server = express() ;
const cors = require('cors'); 
require('dotenv').config();
const PORT=process.env.PORT;
const weather=require('./data/weather.json');
server.use(cors());
const weatherController=require('./controllers/Weather.controllers').default;
const movieController=require('./controllers/Movie.controllers');


server.listen(PORT || 3001,()=>{
  console.log(`server is running is in port ${PORT}`) // to check if localhost is run
})
server.get('/',(req,res)=>{    // '/' endpoint with get 
  res.send('hello world')
})
server.get('/weather',(req,res)=>{    // '/' endpoint with get 
  res.send(newWeather)
})

// server.get('/weather/:city_name',(req,res)=>{
//   let newWeather=[];
//   const findCity=weather.find((element)=>element.city_name === req.params.city_name); // i need to find just city wuth forecast date and descreption
//   if(findCity){
//     findCity.data.map((day)=>newWeather.push(new Forecast(day)));
//     res.send(newWeather);
    
//   }else{
//     res.send('the city  was not found');
//   }
// })


  server.get('/weather/:lat/:lon', weatherController)
 

server.get('/getMovies/:city_name' ,movieController)



