import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "./newsItem.css";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=football&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      const data = await response.json();
      setArticles(data.articles);
    };

    getArticles();
  }, []);
  return (
    <div>
      <div className="news-field">
        {articles.map((article) => {
          return (
            <NewsItem
              key={article.title}
              title={article.title}
              description={article.description}
              url={article.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsList;
