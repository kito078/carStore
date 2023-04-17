import React from "react";
import { Button, Row, Col } from "reactstrap";
import Light from "../../images/light.jpg";
import "./Chemical.css";

function Chemical() {
  return (
    <Row className="chemical">
      <Col lg className="chemical__boxes mb-5">
        <Row className="chemical__box ">
          <Col lg className="chemical__text mt-5 ms-3 mt-lg-4 pt-lg-4 ms-lg-4">
            <p>flat 50% discount</p>
            <h2 className="my-4">Lamp and Light for Sale</h2>
            <Button className="chemical-btn mt-2 rounded-pill px-5 py-3">
              Shop Now
            </Button>
          </Col>
          <Col lg className="chemical__image">
            <img src={Light} alt="" />
          </Col>
        </Row>
      </Col>
      <Col lg className="chemical__boxes">
        <Row className="chemical__box ">
          <Col lg className="chemical__text mt-5 ms-3 mt-lg-4 pt-lg-4 ms-lg-4">
            <p>flat 50% discount</p>
            <h2 className="my-4">Lamp and Light for Sale</h2>
            <Button className="chemical-btn mt-2 rounded-pill px-5 py-3">
              Shop Now
            </Button>
          </Col>
          <Col lg className="chemical__image">
            <img src={Light} alt="" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Chemical;
