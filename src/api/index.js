import axios from "axios";

export const fetchWeather = id =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=b3a040aec33ad98244385a7ef924b1b4`
    )
    .then(response => {
      return response;
    });
