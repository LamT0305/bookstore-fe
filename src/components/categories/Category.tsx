import React, { useEffect } from "react";
import "./style.css";
import useCate from "../../redux/hooks/useCate";

const Category: React.FC = () => {
  const { getAllCates, handleGetCateByID, cate } = useCate();
  useEffect(() => {
    getAllCates();
  }, []);

  return (
    <div className="filter">
      <div className="filter__item--category">
        <h3 className="filter--title">Category</h3>
        <ul style={{ listStyle: "none", textAlign: "left" }}>
          {cate.map((e: any) => (
            <li key={e.id} className="category-name">
              {e.name}
            </li>
          ))}
        </ul>
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
        <div className="filter__item">
          <h3 className="filter--title">Money</h3>
          <p className="amount">USA&nbsp;Price</p>
          {/* <input
            type="range"
            name="price"
            className="price"
            min="0"
            max="250"
            value="250"
            defaultValue={0}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
