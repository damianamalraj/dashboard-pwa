import React, { useState } from "react";
import "./style.css";

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
    <div className="Clock">
      <h1> {currentTime} </h1>
      <h2> {currentDate} </h2>
    </div>
  );
};

export default Clock;
