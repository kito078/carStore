import React from "react";
import { useContext } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import { CartContext } from "../../cart-context";

import "./Cart.css";
import CartItem from "./CartItem";

function Cart(props) {
  return (
    <div className="cart ">
      <div className="modal-one cart__header text-center pt-5">
        <ul className="cart__list">
          <>
            <h1>Total: 999999</h1>
            <Button className="news-btn" variant="success">
              Order Now!
            </Button>
          </>

          <div className="cart__empty text-start">
            <h2>Cart</h2>
            <div className="cart__empty__body">
              <h5>Your cart is currently empty</h5>
            </div>
            <Button className="news-btn" variant="success">
              Return to shop
            </Button>
          </div>
        </ul>
        {/* <Row className="d-flex">
          <Col>
            <h3 className="cart-price">4353</h3>
          </Col>
          <Col>
            <h3>Total Amount</h3>
          </Col>
        </Row> */}
        {/* <Row>
          <Col></Col>
          <Col>
            <div className="d-flex justify-content-end">
              <Button
                onClick={props.onClose}
                className="btn-button rounded-pill px-5 py-2"
                color="primary"
              >
                close
              </Button>

              <Button
                className="btn-button rounded-pill px-5 py-2"
                color="primary"
              >
                Order
              </Button>
            </div>
          </Col>
        </Row> */}
      </div>
    </div>
  );
}

export default Cart;
