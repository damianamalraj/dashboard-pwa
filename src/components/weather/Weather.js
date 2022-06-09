import React, { useState } from 'react'


const Home = () => {
    const apiKey = '8d14338d4183a1dc472ddfaab619e496'
    // https://home.openweathermap.org/api_keys
    const [weatherData, setWeatherData ] = useState([{}])
    const [city, setCity] = useState("")

    const getWeather = (event) => {
      if (event.key == 'Enter') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`)
        .then(res => res.json())
        .then(data => { setWeatherData(data) } )
      }
    }
  return (
    <div className='container'>
      <h2> Today's weather forecast </h2>
      <input onChange={ e => setCity(e.target.value)} value={city} onKeyPress={getWeather} className='input' placeholder='Enter a city name ......'/>

      {typeof weatherData.main === 'undefined' ? (
        <div>
           <marquee>Welcome to weather app! Enter in a city to get the weather of .</marquee>
        </div>

      ): (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temperature'>{Math.round(weatherData.main.temp)} ℉ </p>
          <p className='weather'>{weatherData.weather[0].main}</p>
        </div>
      )}

      {weatherData.cod === "404" ? (
        <p>City not Found !!! </p>
      ) : (
        <>
        </>
      )}
    </div>
  )
}

export default Home
