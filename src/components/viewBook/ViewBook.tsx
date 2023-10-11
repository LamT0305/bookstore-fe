import React, { useState } from "react";
import "./style.css";
interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const ViewBook: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(25);

  const handleChangeQuantity = (status: any) => {
    if (status === "plus") {
      setQuantity(quantity + 1);
      setPrice(price + 25);
    } else if (status === "minus") {
      if (quantity >= 1) {
        setQuantity(quantity - 1);
        setPrice(price - 25);
      }
    }
  };
  return (
    <div className="wrapper-vb">
      <div className="container view-book">
        <div className="row">
          <div className="col" style={{ padding: 0 }}>
            <div className="view-book-nav">
              <div className="book-title">It Ends With Us</div>
              <span className="close" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </span>
            </div>
            <div className="book-content row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/bookshelf-80a82.appspot.com/o/cover-4.jpg?alt=media&token=cf98c7fe-a7d8-4779-b1f9-ed502344ac95"
                  alt=""
                  className="view-book-img"
                />
              </div>

              <div className="content col-lg-6">
                <div className="description">
                  <p
                    style={{
                      textAlign: "justify",
                      lineHeight: 1.6,
                      fontSize: 17,
                      fontWeight: "400",
                    }}
                  >
                    In this “brave and heartbreaking novel that digs its claws
                    into you and doesn’t let go, long after you’ve finished it”
                    (Anna Todd, New York Times bestselling author) from the #1
                    New York Times bestselling author of All Your Perfects, a
                    workaholic with a too-good-to-be-true romance can’t stop
                    thinking about her first love.
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      textAlign: "left",
                      margin: "20px 0",
                    }}
                  >
                    <li className="vb-detail">
                      <p>Category</p> <p>: Category</p>
                    </li>
                    <li className="vb-detail">
                      <p>Author</p>
                      <p>: Shakib</p>
                    </li>
                    <li className="vb-detail">
                      <p>Language</p>
                      <p>: English</p>
                    </li>
                    <li className="vb-detail">
                      <p>Total Pages</p>
                      <p>: 120</p>
                    </li>
                    <li className="vb-detail">
                      <p>Price</p>
                      <p>: 25$</p>
                    </li>
                    <li className="vb-detail">
                      <p>Publisher</p>
                      <p>: SH Shakib</p>
                    </li>
                    <li className="vb-detail">
                      <p>Pulished Date</p>
                      <p>: 2017-06-28</p>
                    </li>
                    <li className="vb-detail">
                      <p>ISBN</p>
                      <p>: 1501110365</p>
                    </li>
                  </ul>
                </div>
                {quantity == 0 ? (
                  <div
                    className="add-to-cart"
                    style={{cursor:'pointer'}}
                    onClick={() => handleChangeQuantity("plus")}
                  >
                    <p>Add to cart</p>
                  </div>
                ) : (
                  <div className="calculation">
                    <div className="quantity">
                      <button onClick={() => handleChangeQuantity("minus")}>
                        -
                      </button>
                      <p>{quantity}</p>
                      <button onClick={() => handleChangeQuantity("plus")}>
                        +
                      </button>
                    </div>
                    <p>${price}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
