import React from "react";
import colImage from "../../images/son1.jpg";
import colImage2 from "../../images/son2.jpg";
import colImage3 from "../../images/son3.jpg";
import colImage4 from "../../images/son4.jpg";
import colImage5 from "../../images/son2.jpg";
import colImage6 from "../../images/son1.jpg";
import { BsFillStarFill } from "react-icons/bs";
import { Button, Row, Col, Input, Form, Label, Card } from "reactstrap";
import "./Collection.css";

function Collection() {
  return (
    <div className="mx-3 mx-lg-0">
      <h2 className="container swipper-feat my-5 pb-3">Featured Categories</h2>
      <Row>
        <Col lg className="mb-5 mb-lg-0">
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">Black For Sports car</h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg className="mb-5 mb-lg-0">
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage2} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">
                  Rims Red & Black For Sports
                </h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg>
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage3} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">Black For Sports car</h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col lg className="mb-5 mb-lg-0">
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage4} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">
                  Custom Premium Rims Red
                </h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg className="mb-5 mb-lg-0">
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage5} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">Black For Sports car</h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg className="mb-5 mb-lg-0">
          <div className="collection__card">
            <Row className="collection__card align-items-center justify-content-center">
              <Col className="collection__image">
                <span className="collection__page">
                  <h5>-27%</h5>
                </span>
                <img src={colImage6} alt="" />
              </Col>
              <Col>
                <h5 className="collection__title mb-3">
                  Custom Premium Rims Red
                </h5>
                <h5 className="productItem__price collection__price mt-3">
                  <span className="price__main">$87.88</span>{" "}
                  <del className="price__del ms-4">$90.99</del>
                </h5>
                <span className="my">
                  <BsFillStarFill />
                </span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Collection;
