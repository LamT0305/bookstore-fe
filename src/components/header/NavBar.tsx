import MenuIcon from "../../assets/images/menu.png";
import { Link } from "react-router-dom";
import "./style.css";
import PhoneIcon from "../../assets/images/phone.png";
import UserIcon from "../../assets/images/user.png";
import { useState } from "react";
import Menu from "../menu/Menu";
import CartIcon from "../../assets/images/icons8-bag-32.png";
import useBook from "../../redux/hooks/useBook";
import Cart from "../cart/Cart";

function NavBar() {
  const [isOpen, setIsopen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const isAuthenticated = sessionStorage.getItem("isAuthenticated");
  const [search, setSearch] = useState('');
  const { handleSearchBook } = useBook();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const formdata = new FormData(); 
    formdata.append("bookName", search);
    handleSearchBook(formdata);
  };
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
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="search-input"
              placeholder="Search your book here"
              value ={search}
              onChange={e =>  setSearch(e.target.value)}
            />
          </form>
        </div>
        <div className="contact-user">
          <div className="phone">
            <img src={PhoneIcon} alt="phone icon" width={32} />
            <p>+0123456789</p>
          </div>
          {/* authentication*/}
          <div className="login"></div>
          {isAuthenticated != undefined && isAuthenticated == "1" ? (
            <>
              <div className="current-user">
                <Link to={"/current-user"}>
                  <img src={UserIcon} alt="login-icon" width={32} />
                </Link>
              </div>

              <div
                className="cart-user"
                onClick={() => setIsOpenCart(!isOpenCart)}
              >
                <img src={CartIcon} alt="" />
              </div>
            </>
          ) : (
            <Link to={"/log-in"}>
              <img src={UserIcon} alt="login-icon" width={32} />
            </Link>
          )}
        </div>
        {/* phone */}
      </div>
      {isOpen ? <Menu isOpen={isOpen} setIsOpen={setIsopen} /> : null}
      {isOpenCart ? (
        <Cart isOpenCart={isOpenCart} setIsOpentCart={setIsOpenCart} />
      ) : null}
    </>
  );
}

export default NavBar;
