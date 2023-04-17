import React, { useState, useEffect } from "react";
import { MdForwardToInbox, MdAccessTime } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import "./TopNav.css";

function TopNav() {
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShouldShow(window.pageYOffset === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`topnav ${shouldShow ? "" : "hidden"}`}>
      <div className="topnav__container container-side">
        <div className="">
          <div className="">
            <MdForwardToInbox />
            <p>support@wheel.com</p>
          </div>
          <div>
            <ImLocation2 />
            <p>36D Street Brooklyn, New York</p>
          </div>
          <div>
            <MdAccessTime />
            <p>Mon - Fri: 8:00 am - 7:00 pm</p>
          </div>
        </div>
        <div className="topnav__body">
          <div className="topnav__body-icon">
            <FaFacebookF />
          </div>
          <div className="topnav__body-icon">
            <BsTwitter />
          </div>
          <div className="topnav__body-icon">
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
