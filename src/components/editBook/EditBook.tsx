import React, { useEffect, useState } from "react";
import "./style.css";
import useBook from "../../redux/hooks/useBook";

function Managebook() {
  const { getAllBooks, handleDeleteBook, book } = useBook();
  const [page, setPage] = useState(1);
  useEffect(() => {
    getAllBooks(page);
  }, [page]);

  return (
    <>
      <div>
        <div className="book-nav">
          <span style={{ width: "30%" }}>
            <button className="active-sort-btn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="icon"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
              </svg>
            </button>
          </span>

        </div>
        <div className="row justify-content-center">
          <table className="books">
            <h1></h1>
          </table>
        </div>
      </div>
    </>
  );
}

export default Managebook;
