import React, { useEffect, useState } from "react";
import Cart from "../../assets/images/cart.png";
import "./style.css";
import useBook from "../../redux/hooks/useBook";
import { Link } from "react-router-dom";

const BASE_URL = "https://bookstore-api-demo.azurewebsites.net/"

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIdBook: (idBook: string) => void;
}

const Books: React.FC<Props> = ({ isOpen, setIsOpen, setIdBook }) => {
  const [page, setPage] = useState(1);
  const handleViewBook = (id: any) => {
    setIsOpen(!isOpen);
    setIdBook(id);
  };

  const { getAllBooks, book } = useBook();
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

          <p style={{ width: "30%" }}>14 books available</p>
          <span
            style={{ width: "30%", display: "flex", justifyContent: "right" }}
          >
            <select name="filter" id="filter">
              <option value="">Lowest price</option>
              <option value="">highest price</option>
              <option value="">Book title {"(A-Z)"}</option>
              <option value="">Lowest price{"(Z-A)"}</option>
            </select>
          </span>
        </div>
        <div className="row justify-content-center">
          {book.map((b: any) => (
            <div key={b.id} className="col-lg-4 col-sm-6 mb-4">
              <div className="books__book">
                <div className="cart">
                  <img
                    src={Cart}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <img src={`${BASE_URL}`+b?.imagePath} alt="" className="img-fluid" />
                <div className="books_book_bottom">
                  <h3 className="books__book__bottom--title">{b?.title}</h3>
                  <p className="books__book__bottom--subtitle">
                    {b?.description}
                  </p>
                  <p className="books__book__bottom--author">By: {b?.author}</p>
                  <p className="price">Price: ${b?.price}</p>
                  <div
                    className="view-btn"
                    onClick={() => handleViewBook(b.id)}
                  >
                    <Link to={"#"}>View Book</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
