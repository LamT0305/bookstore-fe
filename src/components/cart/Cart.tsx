import React, { useEffect } from "react";
import "./style.css";
import useUser from "../../redux/hooks/userUser";
import Bin from "../../assets/images/icons8-bin-50.png";

interface props {
  isOpenCart: boolean;
  setIsOpentCart: (isOpenCart: boolean) => void;
}

const BASE_URL = "https://bookstore-api-demo.azurewebsites.net";
const Cart: React.FC<props> = ({ isOpenCart, setIsOpentCart }) => {
  const {
    handleGetCartUser,
    handleRemoveFromCart,
    handleUpdateCartItems,
    handleCreateOrder,
    cart,
  } = useUser();

  useEffect(() => {
    handleGetCartUser();
  }, []);

  const handleUpdateQuantity = (id: any, quantity: number) => {
    const form = new FormData();
    form.append("quantity", quantity.toString());
    handleUpdateCartItems(id, form);
  };

  const handleRemoveItemFromCart = (id: any) => {
    handleRemoveFromCart(id);
  };
  return (
    <div className="cart-container">
      <div className="cart-wrapper">
        <div className="row">
          <div className="section-title-center text-center">
            <div
              className="cart__close"
              onClick={() => setIsOpentCart(!isOpenCart)}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
              </svg>
            </div>
            <h2 className="fs-5">No items in Your Cart</h2>
            <div className="section-divider divider-triangle"></div>
          </div>
        </div>
        {/* {cart && cart.length == 0 ? } */}
        {/* <div className="cart__empty">
          <p>
            You haven't added anything in your cart yet. Start adding the books
            you like.
          </p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
          </svg>
        </div> */}
        <div className="cart-items" style={{ height: "70%" }}>
          {cart.map((e: any) => (
            <div
              key={e.bookId}
              style={{
                display: "flex",
                padding: "10px 0",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`${BASE_URL}` + e.imagePath}
                alt=""
                style={{
                  width: 80,
                  height: 95,
                  objectFit: "cover",
                  marginRight: 10,
                }}
              />
              <div>
                <p>{e.bookName}</p>
                <p>Quantity: {e?.quantity}</p>
                <p>Price: ${e?.price}</p>
              </div>
              <div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRemoveItemFromCart(e.bookId)}
                >
                  <img
                    src={Bin}
                    alt=""
                    style={{ width: 32, height: 32, marginBottom: 10 }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <p style={{ margin: "0 5px", cursor: "pointer" }}>{"-"}</p>
                  <p>{e.quantity}</p>
                  <p style={{ margin: "0 5px", cursor: "pointer" }}>{"+"}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart__confirm">
          {cart.length > 0 ? (
            <>
              <button className="cart__btn-offline" onClick={handleCreateOrder}>
                Confirm
              </button>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Cart;
