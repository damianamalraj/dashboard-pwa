import React, { useEffect, useState } from "react";
import List from "./List";
import "./index.css";

function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const data = await res.json();
      setNews(data.news);
    })();
  }, []);
  return (
    <div>
      {news.map((news) => {
        return <List title={news.title} description={news.description} />;
      })}
    </div>
  );
}

export default News;
