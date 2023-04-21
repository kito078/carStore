import React, { useContext } from "react";
import "./ProductItem.css";
import { Button, Row, Col, Input, Form, Label, Card } from "reactstrap";
import { Link } from "react-router-dom";

function ProductItem(props) {
  return (
    <Col>
      <Link to="/productInfo" className="the-link">
        <Card className="productItem text-center mt-5">
          <div className="productItem__bage">{props.bage}</div>
          <div className="productItem__header d-flex align-items-center justify-content-center">
            <img src={props.img} alt="" />
            {/* <h2>{name}</h2> */}
          </div>
          <div className="productItem__body mt-5  px-3 text-start ">
            <div className="mb-4">
              <span className="productItem__name pb-5">{props.name}</span>
              <h3 className="mb-2 mt-3">{props.name}</h3>
              <div className="productItem__star mt-0 mb-3">
                <span>{props.stars}</span>
                <span>{props.stars}</span>
                <span>{props.stars}</span>
                <span>{props.stars}</span>
                <span>{props.stars}</span>
              </div>
              <h5 className="productItem__price ">
                <span className="price__main">{`$${props.price}`}</span>{" "}
                {/* <del className="price__del ms-4">${price}</del> */}
              </h5>
            </div>
            <div></div>
          </div>
        </Card>
      </Link>
    </Col>
  );
}

export default ProductItem;
