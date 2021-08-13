'use strict';
// const { default: axios } = require('axios');
const Forecast =require ('../models/Weather.models')
const weatherController=(req,res)=>{
  let lon =req.params.lon;
  let lat =req.params.lat;
  let weatherUrl = `http://api.weatherbit.io/v2.0/forecast/daily/?key=9a0d46305384474b9018006d4dd3be71&lat=${lat}&lon=${lon}`
  
  let newWeather = []
 axios.get(weatherUrl).then(weatherData => {
    weatherData.data.data.forEach((day)=> newWeather.push(new Forecast(day)));
    //console.log('sent')
    res.send(newWeather);
})
 .catch((error)=> {
  res.status(500).send(error);
})

}
module.exports=weatherController;










