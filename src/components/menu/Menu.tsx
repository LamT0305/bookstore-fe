import React from "react";
import "./style.css";

interface menuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Menu: React.FC<menuProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="header-menu">
      <div className={`wrapper-menu${isOpen ? "" : "-close"}`}>
        <div className="header-menu__top">
          <h1>Bookshelf</h1>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </span>
        </div>
        <ul className="bs-scroll">
          <a href="/#">
            <li>Bookshelf Minimal</li>
          </a>
          <a href="/#">
            <li>Bookshelf Modern</li>
          </a>
          <a href="#">
            <li>Bookshelf ClassnclassNameic</li>
          </a>
          <a href="/all-books">
            <li>All Books</li>
          </a>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
