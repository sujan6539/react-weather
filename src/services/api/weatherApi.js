import axios from "axios";
import { API_BASE_URL } from "../constants/api.js";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
});

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;

function fetchWeatherData() {  
  const queryParams = {
    appid: weatherApiKey,
    lat: 33.4,
    lon: -94.04,
  };

  // Make a request for a user with a given ID
  instance
    .get("/2.5/weather", {
      params: queryParams,
    })
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export default fetchWeatherData;
