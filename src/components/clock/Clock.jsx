import React, { useState } from "react";
import style from "./style.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  setInterval(() => {
    let time = new Date().toLocaleTimeString();

    var date =
      new Date().getDate() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getFullYear();
    setCurrentTime(time);
    setCurrentDate(date);
  }, 1000);

  return (
    <div className="containerTime">
      <h1>Current time</h1>
      <h1> {currentTime} </h1>
      <h1> {currentDate} </h1>
      <h1>
        <marquee behavior="alternate">Sweden</marquee>
      </h1>
    </div>
  );
};

export default Clock;
