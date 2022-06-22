import React, { useEffect, useState } from "react";
import List from "./List";
import "./index.css";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("/netlify/functions/fetch.js");
      const data = await res.json();
      setNews(data);
    })();
  }, []);
  return (
    <div>
      {news.map((news) => {
        return (
          <List
            key={news.id}
            title={news.title}
            description={news.description}
          />
        );
      })}
    </div>
  );
}

export default News;
