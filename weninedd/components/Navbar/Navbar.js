import React, { useState, useEffect } from "react";
import { FaHeart, FaBars, FaTimes } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import Brand from "../../images/brand.png";
import "./Navbar.css";

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

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <div className="nav-container ">
        <div className="brand">
          <img src={Brand} alt="" />
        </div>
        <div className={`menu ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="icons">
          <span className="icon-container">
            <span className="icon-num">0</span>
            <BsCart3 />
          </span>
          <span className="icon-container">
            <span className="icon-num">0</span>
            <FiHeart />
          </span>

          <div className="toggler" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
