import React from "react";
import BookImg1 from "../../assets/images/book1.jpg";
import BookImg2 from "../../assets/images/book2.jpg";
import "./style.css";

interface product {
  title: string;
  description: string;
  price: number;
  image: string;
}
const products: product[] = [
  {
    title: "Innovation in Education (Hardcover)",
    description: "SALE UP TO 15%",
    price: 65.09,
    image: BookImg1, // Replace with the actual image path
  },
  {
    title: "Another Product (Hardcover)",
    description: "Description of Another Product",
    price: 49.99,
    image: BookImg2, // Replace with the actual image path
  },
];

function SaleProducts() {
  return (
    <div className="container" style={{ paddingTop: 88, paddingBottom: 88 }}>
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-lg-6 col-sm-6 mb-4 mb-sm-0 product">
            <div className="offer__item h-100">
              <div className="row">
                <div className="col-lg-6">
                  <div className="offer__item__image">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="offer__item__content" style={{textAlign:"left"}}>
                    <span className="badge-text">Sale Up To 15%</span>
                    <h4 style={{fontWeight:'bold'}}>{product.title}</h4>
                    <p className="price">
                      Starting at: <span>${product.price}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaleProducts;
