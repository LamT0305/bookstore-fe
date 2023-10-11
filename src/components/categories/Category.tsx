import React from "react";
import "./style.css";

const Category: React.FC = () => {
  return (
    <div className="filter">
      <div className="filter__item">
        <form>
          <input type="text" name="text" placeholder="Search" value="" />
        </form>
      </div>
      <div className="filter__item" style={{ textAlign: "left" }}>
        <h3 className="filter--title">Category</h3>
        <div className="filter__item--category">
          <ul style={{ listStyle: "none" }}>
            <li className="category-name-active">All</li>
            <li className="category-name">Mystery Thriller</li>
            <li className="category-name">Fantasy</li>
            <li className="category-name">Biography</li>
            <li className="category-name">Music</li>
            <li className="category-name">Fiction</li>
            <li className="category-name">Book Title</li>
            <li className="category-name">Inspirationa;</li>
          </ul>
        </div>
      </div>
      <div className="filter__item">
        <h3 className="filter--title">Author</h3>
        <form action="#">
          <select name="author" id="author">
            <option value="all">all</option>
            <option value="Book Description">Book Description</option>
            <option value="Baran bo Odar">Baran bo Odar</option>
            <option value="Shakib">Shakib</option>
            {/* Add more author options if needed */}
          </select>
        </form>
      </div>
      <div className="filter__item">
        <h3 className="filter--title">Price</h3>
        <p className="amount">USA&nbsp;250.00</p>
        <input
          type="range"
          name="price"
          className="price"
          min="0"
          max="250"
          value="250"
        />
      </div>
    </div>
  );
};

export default Category;
