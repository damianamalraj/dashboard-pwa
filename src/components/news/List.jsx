import React from "react";
import "./index.css";

function List({ title, description }) {
  return (
    <div className="news-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default List;
