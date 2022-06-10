import React from "react";
import NewsList from "./NewsList";

function index() {
  return (
    <div className="Home">
      <h1>
        <marquee behavior="scroll">
          BREAKING NEWS!!! YOU BETTER BELIVE IT
        </marquee>
      </h1>
      <NewsList />
    </div>
  );
}

export default index;
