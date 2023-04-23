import React from "react";
import { Button, Row, Col } from "reactstrap";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { GiFlatTire } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import footImage from "../../images/brand.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer p-4">
      <div className="container">
        <Row className="align-items-center justify-content-center  text-lg-start  mx-auto  ">
          <Col lg className="footer__header ">
            <div className="footer-icon-one d-flex">
              <GiFlatTire /> <h5 className="rebate">Rebate</h5>
            </div>
            <p className="ms-3 mt-4 text-start">
              Copyright &copy; 2020 Kito kessian
            </p>
            <div className="my-5">
              <span className="footer-icon mx-2">
                <a href="https://www.facebook.com/mechack.kayembe.94">
                  {" "}
                  <FaFacebookF />
                </a>
              </span>
              <span className="footer-icon mx-2">
                <a href="https://twitter.com/Kabamechackgma1/photo">
                  {" "}
                  <BsTwitter />
                </a>
              </span>
              <span className="footer-icon mx-2">
                <a href="">
                  <FaInstagram />
                </a>
              </span>
              <span className="footer-icon mx-2">
                <a href="https://www.linkedin.com/in/kaba-mechack-2b2b09202/">
                  {" "}
                  <ImLinkedin2 />
                </a>
              </span>
            </div>
          </Col>
          <Col lg className="footer__body d-none d-lg-block text-lg-start">
            <h5>Devwaves</h5>
            {/* <Link to="https://www.npmjs.com/package/react-router-dom">
              facebook
            </Link> */}

            <p>Home</p>
            <p>About Us</p>
            <p>Team</p>
            <p>Contact</p>
          </Col>
          <Col lg className="footer__body d-none d-lg-block">
            <h5>Devwaves</h5>
            <p>Tutorial</p>
            <p>Streaming</p>
            <p>Teaching</p>
            <p>Tutorial</p>
          </Col>
          <Col lg className="footer__body mt-4 mt-lg-0">
            <h5 className="mb-5 mb-lg-3">Contact Us</h5>
            <p>
              <ImLocation2 />
              <span className="ms-3">Johannesburg beria Yeta street n 60</span>
            </p>

            <p>
              <a href="">
                <MdEmail />
                <span className="ms-3">kitokessian07@gmail.com</span>
              </a>
            </p>

            <p>
              <a href="08766575556">
                <BsTelephoneFill />
                <span className="ms-3">0849614484</span>
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
