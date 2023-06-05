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
    <Card className="deals mt-5">
      <Row className="">
        <Col md>
          <Row className="deal">
            <Col lg>
              <Card className="deals__image my-5">
                <div className="deals-badge">
                  <h5>-15%</h5>
                </div>
                <img src={Chair} alt="" />
              </Card>
            </Col>
            <Col lg>
              <CardBody className="deals__body mb-5 text-center text-lg-start">
                <CardTitle className="deals__body-title mb-3 my-lg-5 mb-lg-4">
                  <h5>Motul 4100 Power 5W30 3L.</h5>
                </CardTitle>
                <CardSubtitle className="deals__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </CardSubtitle>
                <div className="star__wrap d-flex mx-5 mx-lg-0 align-items-center justify-content-between">
                  <CardText className="deal-star">
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                  </CardText>
                  <CardText className="deals__price">
                    <h5>$89.99</h5>
                  </CardText>
                </div>
                <Button className="read-more ps-0 py-2 mb-5 mb-lg-0 mt-lg-0">
                  Add To Cart{" "}
                  <span className="read-more__arrow">
                    <BsArrowRightShort />
                  </span>
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Col>
        <Col md>
          <Row className="deal">
            <Col lg>
              <Card className="deals__image my-5">
                <div className="deals-badge">
                  <h5>-15%</h5>
                </div>
                <img src={Chair2} alt="" />
              </Card>
            </Col>
            <Col lg>
              <CardBody className="deals__body mp-5 text-center text-lg-start">
                <CardTitle className="deals__body-title mb-3 my-lg-5 mb-lg-4">
                  <h5>Jeep Patriot 17 Inch Steel Rims.</h5>
                </CardTitle>
                <CardSubtitle className="deals__text">
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                </CardSubtitle>
                <div className="star__wrap  mx-5 mx-lg-0 d-flex align-items-center justify-content-between">
                  <CardText className="deal-star">
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                    <span>
                      <BsStarFill />
                    </span>
                  </CardText>
                  <CardText className="deals__price">
                    <h5>$89.99</h5>
                  </CardText>
                </div>
                <Button className="read-more ps-0 py-2 mb-5 mb-lg-0 mt-lg-0">
                  Add To Cart{" "}
                  <span className="read-more__arrow">
                    <BsArrowRightShort />
                  </span>
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default DealsCard;
