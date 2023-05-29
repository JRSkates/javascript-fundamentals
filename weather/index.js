// file: index.js

const apiKey = require('./apiKey'); // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

const extractWeather = (data) => {
  const weather = {};
  
  weather.id = data.id;
  weather.main = data.main;
  weather.weather = data.weather[0];

  return weather;
}

const weatherUpdate = () =>{ 
  fetch(apiUrl)
  .then((response) => {
    return response.json();
  })  
  .then((data) => {
    return extractWeather(data)
  })
  .then((weather) => {
    console.log(weather);
  });
}

weatherUpdate();