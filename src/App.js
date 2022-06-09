import React from "react";
import Clock from "./components/Clock";
import Todo from "./components/todo/Home";
import Country from "./components/country/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      <Country />
      <Clock />
    </div>
  );
}

export default App;
