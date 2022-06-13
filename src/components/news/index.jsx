import React from "react";
import News from "./News";
import "./index.css";

function index() {
  return (
    <div className="Home">
      <h1>
        {/* <marquee behavior="scroll"> */}
        BREAKING NEWS!!! YOU BETTER BELIVE IT
        {/* </marquee> */}
      </h1>
      <News />
    </div>
  );
}

export default index;
