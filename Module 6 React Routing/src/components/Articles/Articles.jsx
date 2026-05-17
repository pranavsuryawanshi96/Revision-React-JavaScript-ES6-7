import React from "react";
import { useSearchParams } from "react-router-dom";

const dummyArticles = [
  { id: 1, title: "Laptop", views: 290, category: "electronics" },
  { id: 2, title: "Smartphone", views: 300, category: "electronics" },
  { id: 3, title: "Shoes", views: 100, category: "fashion" },
  { id: 4, title: "washing machine", views: 150, category: "electronics" },
];

const Articles = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const category = searchParam.get("category");
  const sortByViews = searchParam.get("sortByViews");
  let filteredArticle = dummyArticles;
  const handleSortBy = () => {
    setSearchParam({
      sortByViews: "true",
      category: "electronics",
    });
  };

  if (category) {
    filteredArticle = filteredArticle.filter(
      (article) => article.category === category,
    );
  }

  if (sortByViews === "true") {
    filteredArticle = [...filteredArticle].sort((a, b) => a.views - b.views);
  }

  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy: {sortBy ?? sortByViews}Category:{category}
        </p>
      </h2>
      <button onClick={handleSortBy}>Sort By Views</button>
      <ul>
        {filteredArticle.map((article) => {
          return (
            <li key={article.id}>
              {article.title}-{article.views} views ({article.category})
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
