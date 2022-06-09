import React from "react";
import Clock from "./components/Clock";
import Todo from "./components/todo/Home";
import Country from "./components/country/Home"
import Weather from "./components/weather/Weather"
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Crossplatform</h1>
      <Clock />
      <Todo/>
      {/* <Country /> */}
      <Weather />

   

    </div>
  );
}

export default App;
