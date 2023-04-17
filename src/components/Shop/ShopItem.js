import React, { useContext } from "react";
import "./ShopItem.css";
import { Button, Row, Col, Input, Form, Label, Card } from "reactstrap";
import { CartContext } from "../../cart-context";

function ShopItem(props) {
  const { id, name, price, img, title, stars, bage } = props.data;

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(id);

  console.log(cart.items);

  return (
    <Col>
      <Card className="productItem  text-center mt-5">
        <div className="productItem__bage">{bage}</div>
        <div className="productItem__header d-flex align-items-center justify-content-center">
          <img src={img} alt="" />
          {/* <h2>{name}</h2> */}
        </div>
        <div className="productItem__body mt-5  mx-3 text-start ">
          <div className="mb-4">
            <span className="productItem__name pb-5">{name}</span>
            <h3 className="mb-2 mt-3">{title}</h3>
            <div className="productItem__star mt-0 mb-3">
              <span>{stars}</span>
              <span>{stars}</span>
              <span>{stars}</span>
              <span>{stars}</span>
              <span>{stars}</span>
            </div>
            <h5 className="productItem__price ">
              <span className="price__main">{`$${price}`}</span>{" "}
              <del className="price__del ms-4">${price}</del>
            </h5>
          </div>
          <div></div>
        </div>
      </Card>
    </Col>
  );
}

export default ShopItem;
