import React from "react";
import Clock from "./components/Clock";
import Todo from "./components/todo/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo />
      <Clock />
    </div>
  );
}

export default App;
