import React from "react";
import Clock from "./components/clock/Clock";
import Quote from "./components/quote/index";
import Weather from "./components/weather/Weather";
import News from "./components/news/index";
import Social from "./components/social/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <div className="header">
          <h1>IT-Högskolan</h1>
        </div>
      </div>
      <div className="wgt">
        <Clock />
        <Weather />
        <Quote />
        <Social />
        <News />
      </div>
    </div>
  );
}

export default App;
