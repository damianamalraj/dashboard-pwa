import React from "react";
import "./style.css";
import temp from "./img/thermometer_FILL0_wght400_GRAD0_opsz48.svg";

const Weather = () => {
  const [weather, setWeather] = React.useState("");

  React.useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=imperial&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const data = await res.json();
        setWeather({
          temp: (((data.main.temp - 32.0) * 5.0) / 9.0).toFixed() + "°C",
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="weather">
      <div className="container">
        <h1>{weather.temp}</h1>
        <img src={temp} alt="" />
      </div>
      <h2>Stockholm</h2>
    </div>
  );
};

export default Weather;
