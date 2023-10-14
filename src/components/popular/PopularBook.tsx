import React from "react";
import "./style.css";
import bookData from "../../data/BookData";
import { Link } from "react-router-dom";
import Cart from "../../assets/images/cart.png";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setIdBook: (idBook: string) => void;
}
const PopularBook: React.FC<Props> = ({ setIdBook, isOpen, setIsOpen }) => {
  const handleViewBook = (id: any) => {
    setIsOpen(!isOpen);
    setIdBook(id);
  };
  return (
    <div className="popular">
      <div style={{ paddingBottom: 30 }}>
        <p
          style={{
            color: "#5a8f7b",
            display: "inline-block",
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          Books gallery
        </p>
        <p
          style={{ fontWeight: 700, fontSize: 40, textTransform: "capitalize" }}
        >
          popular books
        </p>
      </div>
      <div className="pupolar-books">
        <div className="container">
          <div className="row">
            {bookData.map((book) => (
              <div key={book.id} className="col-lg-3 col-md-6 mb-4">
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
                  <img src={book?.imagePath} alt="" className="img-fluid" />
                  <div className="books_book_bottom">
                    <h3 className="books__book__bottom--title">
                      {book?.title}
                    </h3>
                    <p className="books__book__bottom--subtitle">
                      {book?.description}
                    </p>
                    <p className="books__book__bottom--author">
                      By: {book?.author}
                    </p>
                    <p className="price">Price: ${book?.price}</p>
                    <div
                      className="view-btn"
                      onClick={() => handleViewBook(book.id)}
                    >
                      <Link to={"#"}>View Book</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBook;
