import React from "react";
import "./BrandingItem.css";
import { Button, Row, Col } from "reactstrap";
import { BsArrowRightShort } from "react-icons/bs";

function BrandingItem(props) {
  return (
    <Col lg className="brandingItem ">
      <div className="brandingItem__header">
        <div className="brand-page ">
          <div>
            <h5>{props.brand}</h5>
          </div>
        </div>
        <img src={props.img} alt="" />
      </div>
      <div className="brandingItem__body">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <Button className="read-more ps-0 py-2 mb-5 mb-lg-0 mt-lg-4">
          Read More{" "}
          <span className="read-more__arrow">
            <BsArrowRightShort />
          </span>
        </Button>
      </div>
    </Col>
  );
}

export default BrandingItem;
