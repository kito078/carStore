import React from "react";
import Chair from "../../images/t5.jpg";
import Chair2 from "../../images/t11.jpg";
import "./Deal.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { BsStarFill } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

const DealsCard = ({ product }) => {
  return (
    <div className="deals mt-5">
      <Row className="mx-2 mx-md-0">
        <Col sm className="deal__holder my-5 my-md-0">
          <Row className="deal align-items-center justify-content-center">
            <Col lg>
              <div className="deals__image my-4 my-md-4">
                <div className="deals-badge">
                  <h5>-15%</h5>
                </div>
                <img src={Chair} alt="" />
              </div>
            </Col>
            <Col lg>
              <CardBody className="deals__body mb-5 text-start  ms-4 ms-md-0">
                <CardTitle className="deals__body-title mb-3 my-lg-0 mb-lg-0">
                  <h5>New Car Tyres from China.</h5>
                </CardTitle>
                <CardSubtitle className="deals__text">
                  <p>Lorem ipsum dolor.</p>
                </CardSubtitle>

                {/* <Button
                  className="btn-button rounded-pill px-5 py-2  mb-5 mb-lg-0"
                  color="primary"
                >
                  About Us
                </Button> */}
              </CardBody>
            </Col>
          </Row>
        </Col>
        <Col sm className=" mb-5 mt-5 mt-md-0 mb-md-0">
          <Row className="deal align-items-center justify-content-center">
            <Col lg>
              <div className="deals__image my-4">
                <div className="deals-badge">
                  <h5>-15%</h5>
                </div>
                <img src={Chair2} alt="" />
              </div>
            </Col>
            <Col lg>
              <CardBody className="deals__body mb-5 text-start ms-4 ms-md-0">
                <CardTitle className="deals__body-title mb-3 my-lg-0 mb-lg-0">
                  <h5>New Car Tyres from China.</h5>
                </CardTitle>
                <CardSubtitle className="deals__text">
                  <p>Lorem ipsum dolor.</p>
                </CardSubtitle>
              </CardBody>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DealsCard;
