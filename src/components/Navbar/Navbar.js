import React, { useState, useEffect, useContext } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import Brand from "../../images/brand.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const cartCtx = useContext(CartContext);

  // const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx
    ? cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0)
    : 0;

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container ">
        <Link to="/">
          <div className="brand">
            <img src={Brand} alt="" />
          </div>
        </Link>

        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="my-link">
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="my-link">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="my-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons ">
          <Link to="/cart" className="my-link-2">
            <span className="icon-container">
              <span className="icon-num">{numberOfItems}</span>
              <BsCart3 />
            </span>
          </Link>

          <Link className="my-link-2">
            <span className="icon-container icon-nav">
              <span className="icon-num">0</span>
              <FiHeart />
            </span>
          </Link>

          <div className="toggler " onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
