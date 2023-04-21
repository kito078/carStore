import React, { useContext } from "react";
import { Button, Row, Col, Card } from "reactstrap";
import "./CartItem.css";
import { MdDelete } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";

function CartItem(props) {
  const price = `$${props.price}`;
  console.log("price", price);
  //console.log(props.title);
  return (
    <Card className="cartItem my-4">
      <Row className="justify-content-center align-items-center">
        <Col sm>
          <div className="cartItem__row d-flex  align-items-center text-start">
            <div lg className="cartItem__header">
              <img src={props.img} alt="" />
              <h5> </h5>
            </div>
            <div lg className="cartItem__body my-0 py-0 py-0 mb-lg-5 pb-lg-5 ">
              <h5 className="cartItem__title">{props.name}</h5>
              <div className="d-flex align-items-center mb-4"></div>
              <span className="cartItem-stock-main">
                Availability:<span className="cartItem-stock">In Stock</span>
              </span>

              <h5 className="cartItem__price mt-3d-block d-sm-none">{price}</h5>
            </div>
          </div>
        </Col>

        <Col sm className="text-center ">
          <div className="d-flex justify-content-center align-items-center">
            <h4 className="me-5">X {props.amount}</h4>
            <div>
              <h5 className="cartItem__price mt-3 ms-5 ps-5 text-left d-none d-sm-block">
                <span className="curtItem__price__main ms-5">{price}</span>{" "}
              </h5>
              <button
                onClick={props.onRemove}
                className="delete mx-5 px-4 my-5"
              >
                <span className="delete-span me-3">
                  <MdDelete />
                </span>
                remove
              </button>
              <button onClick={props.onAdd} className="delete">
                <AiOutlinePlusCircle /> add
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;
