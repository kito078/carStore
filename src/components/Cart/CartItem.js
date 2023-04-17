import React, { useContext } from "react";
import { Button, Row, Col } from "reactstrap";
import CartImage from "../../images/01.jpg";
import "./CartItem.css";
import { CartContext } from "../../cart-context";
import { getProductData } from "../Product/newItem";

function CartItem(props) {
  return (
    <li className="cartItem">
      <Row className="cartItem__row align-items-center justify-content-center text-center">
        <Col lg className="cartItem__header">
          <img src="" alt="" />
          <h5> </h5>
        </Col>
        <Col lg className="cartItem__body my-5 py-5 py-0 my-lg-0 text-start">
          <h3 className="cartItem__title">kito.</h3>
          <div className="d-flex align-items-center mb-4">
            <div className="cartItem-icon">
              <span>star</span>
            </div>
            <span className="cartItem-review ms-4 mt-1">(113)Reviews</span>
          </div>
          <span className="cartItem-stock-main">
            Availability:<span className="cartItem-stock">In Stock</span>
          </span>
          <p className="cartItem__para mt-4">65555556</p>
          <h5 className="cartItem__price ">
            <span className="curtItem__price__main">65555565</span>{" "}
            <del className="price__del ms-4">$65656</del>
          </h5>
        </Col>
      </Row>
    </li>
  );
}

export default CartItem;
