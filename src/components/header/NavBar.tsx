import MenuIcon from "../../assets/images/menu.png";
import { Link } from "react-router-dom";
import "./style.css";
import PhoneIcon from "../../assets/images/phone.png";
import UserIcon from "../../assets/images/user.png";
import { useState } from "react";
import Menu from "../menu/Menu";
import CartIcon from "../../assets/images/icons8-bag-32.png"

function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  return (
    <>
      <div className="nav-bar">
        {/* Logo */}
        <div className="logo">
          <img
            src={MenuIcon}
            alt="Menu"
            width={32}
            className="menu-btn"
            onClick={() => setIsopen(!isOpen)}
          />
          <Link to={"/"}>
            <h2 style={{ fontWeight: 700 }}>BOOKSHELF</h2>
          </Link>
        </div>
        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search your book here"
          />
        </div>
        <div className="contact-user">
          <div className="phone">
            <img src={PhoneIcon} alt="phone icon" width={32} />
            <p>+0123456789</p>
          </div>
          {/* authentication*/}
          <div className="login">
            <Link to={"/log-in"}>
              <img src={UserIcon} alt="login-icon" width={32} />
            </Link>
          </div>
          {isAuthenticated && isAuthenticated == "1" ? <div className="cart-user">
            <img src={CartIcon} alt=""/>
          </div> : null}
          
        </div>
        {/* phone */}
      </div>
      {isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsopen} /> : null}
    </>
  );
}

export default NavBar;
