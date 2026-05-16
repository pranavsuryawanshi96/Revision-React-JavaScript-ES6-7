import React from "react";
import { useSearchParams } from "react-router-dom";

const Articles = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const sortBy = searchParam.get("sortBy");
  const category = searchParam.get("category");
  const sortByViews = searchParam.get("sortByViews");
  const handleSortBy = () => {
    setSearchParam({
      sortByViews: "Views",
      category: "category",
    });
  };
  return (
    <div>
      <h2>
        Articles
        <p>
          SortBy: {sortBy ?? sortByViews}Category:{category}
        </p>
      </h2>
      <button onClick={handleSortBy}>Sort By Views</button>
    </div>
  );
};

export default Articles;
