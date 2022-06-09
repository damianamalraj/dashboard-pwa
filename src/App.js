import React from "react";
import Clock from "./components/clock/Clock";
import Country from "./components/country/Home";
import Weather from "./components/weather/Weather";

import "./App.css";
import News from "./components/news/NewsList";

function App() {
  return (
    <div className="App">
      <Clock />
      <News />
      <Country />
      <Weather />
    </div>
  );
}

export default App;
