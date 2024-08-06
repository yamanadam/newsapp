import React, { useEffect, useState } from "react";
import CardNew from "./CardNew";

const New = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getNews();
  }, [category]);

  const getNews = async () => {
    const BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2d2c90203b3647ff85d5321129db4a32
     
    `;
    try {
      await fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => setArticles(data.articles));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {articles.map((item, index) => {
        return <CardNew key={index} {...item} />;
      })}
    </div>
  );
};

export default New;
