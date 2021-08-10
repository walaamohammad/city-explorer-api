'use strict'
const express = require('express') ;
const server = express() ;
const cors = require('cors'); 
require('dotenv').config();
const PORT=process.env.PORT;
const weather=require('./data/weather.json');
server.use(cors());


server.listen(PORT,()=>{
  console.log(`server is running is in port ${PORT}`) // to check if localhost is run
})
server.get('/',(req,res)=>{    // '/' endpoint with get 
  res.send('hello world')
})
server.get('/weather',(req,res)=>{               
  res.send(weather)
}); 



server.get('/weather/:lon/:lat/:city_name',(req,res)=>{
  const data= weather.find((element)=>+element.lon === +req.params.lon &&
  +element.lat === +req.params.lat &&
  element.city_name === req.params.city_name);
  
  if(data){res.send(data)
  }else{res.send('the country not found')} // if data are there send to server and if data is not found sh ow error msg


  
class Forecast {
    constructor(day) {
        this.date = day.datetime;
        this.description = day.weather.description
    }
  };
  
    
  
});

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


