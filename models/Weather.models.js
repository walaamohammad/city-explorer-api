'use strict';

class Forecast {
    constructor(day) {
        this.date = day.datetime;
        this.description = day.weather.description
    }
  };
  module.exports= Forecast;