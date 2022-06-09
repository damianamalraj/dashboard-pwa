import React, { useState } from "react";

const Home = () => {
  const apiKey = "8d14338d4183a1dc472ddfaab619e496";
  // https://home.openweathermap.org/api_keys
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherData(data);
          console.log(data);
        });
    }
  };
  return (
    <div className="container">
      <h2> Today's weather forecast </h2>
      <input
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        className="input"
        placeholder="Enter a city name ......"
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <marquee>
            Welcome to weather app! Enter in a city to get the weather of .
          </marquee>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">City : {weatherData.name}</p>
          <p className="temperature">
            {" "}
            Temperature : {Math.round(weatherData.main.temp)} ℉{" "}
          </p>
          <p className="temperature">
            {" "}
            Feels Like : {Math.round(weatherData.main.feels_like)}{" "}
          </p>
          <p className="temperature">
            {" "}
            Max Temp : {Math.round(weatherData.main.temp_max)} ℉{" "}
          </p>
          <p className="temperature">
            {" "}
            Min Temp : {Math.round(weatherData.main.temp_min)} ℉{" "}
          </p>
          <p className="weather"> Atmosphere : {weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? <p> City not Found !!! </p> : <></>}
    </div>
  );
};

export default Home;

// b3cd33c79de9414384d063ed4411ad71;
