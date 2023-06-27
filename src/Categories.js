import React from "react";

const Categories = ({ categories, filter }) => {
  return (
    <div className="btn-container">
      <button className="filter-btn" onClick={() => filter("all")}>
        All
      </button>
      {categories.map((category) => {
        return (
          <button className="filter-btn" onClick={() => filter(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
