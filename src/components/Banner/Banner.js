import React from "react";
import { Button, Row, Col } from "reactstrap";
import Meck from "../../images/banner.png";
import "./Banner.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdAddAPhoto } from "react-icons/md";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPhotopea } from "react-icons/si";

function Banner() {
  return (
    <div className="mx-3">
      <div className="banner-container">
        <div className="px-3 pt-5">
          <Row className="banner-container py-5">
            <Row className="banner  align-items-center justify-content-center text-center text-lg-start">
              <Col lg className="banner__header">
                <div className="banner-bage text-center">
                  <h5>offer</h5>
                  <h5>50%</h5>
                </div>
                <img src={Meck} alt="" />
              </Col>
              <Col lg className="banner__content">
                <h5 className="banner__hello mt-5 ms-lg-2">one day special</h5>
                <h1 className="banner__name ">get 35 rebate</h1>
                <h5 className="banner__para mt-4 mb-lg-0 ">
                  <span className="banner-sci pb-lg-0">On All Engine Oil </span>
                  <span className="banner-co mb-0-lg-0">Products</span>
                </h5>
                <p className="banner__text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil sed repudiandae porro impedit perspiciatis inventore id.
                </p>
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-5 mt-lg-3">
                  <div>
                    <Button
                      className="btn-button rounded-pill px-5 py-2 mb-5 mb-lg-0"
                      color="primary"
                    >
                      About Me
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Banner;
