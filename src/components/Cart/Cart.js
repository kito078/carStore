import React from "react";
import { useContext } from "react";
import { BsTypeH1 } from "react-icons/bs";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  //const totalAmount = cartCtx.totalAmount.toFixed(2);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  //const totalAmount = cartCtx ? cartCtx.totalAmount.toFixed(2) : 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const hasItems = cartCtx.items.length > 0;
  console.log(cartCtx.items);
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      id={item.id}
      key={item.id}
      name={item.name}
      title={item.title}
      amount={item.amount}
      price={item.price}
      img={item.img}
      description={item.description}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));
  //const totalAmount = cartCtx ? cartCtx.totalAmount.toFixed(2) : 0;
  // const totalAmount =
  //   cartCtx && cartCtx.totalAmount ? cartCtx.totalAmount.toFixed(2) : 0;

  return (
    <div className="cart container">
      <div className="modal-one cart__header text-right pt-5">
        <ul className="cart__list text-right">
          {cartItems}
          {cartCtx.items.length > 0 && (
            <div className="calc-cont d-flex flex-column alight-items-right justify-content-end text-right">
              <div className=" ">
                <h1>Total: {totalAmount}</h1>
                <Button className="news-btn mt-2" variant="success">
                  Order Now!
                </Button>
              </div>
            </div>
          )}

          {!hasItems && (
            <div className="cart__empty text-start ">
              <h2>Cart</h2>
              <div className="cart__empty__body my-4">
                <h5>Your cart is currently empty</h5>
              </div>
              <Link to="/shop">
                <Button className="news-btn " variant="success">
                  Return to shop
                </Button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
