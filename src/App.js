import React from "react";
import Clock from "./components/clock/Clock";
import Todo from "./components/todo/Home";
import Country from "./components/country/Home";
import Weather from "./components/weather/Weather";

import "./App.css";
import News from "./components/news/NewsList";

function App() {
  return (
    <div className="App">
      <Todo />
      <Country />
      <Weather />
      <News />
      <Clock />
    </div>
  );
}

export default App;
// API_KEY = b3cd33c79de9414384d063ed4411ad71;
