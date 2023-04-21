import React, { useContext, useState } from "react";
import ImageOne from "../../images/bottle.jpg";
import "./ProductInfo.css";
import { Button, Row, Col, ButtonGroup } from "reactstrap";
import ProductInfoForm from "./ProductInfoForm";
import CartContext from "../../store/cart-context";

function ProductInfo({ product }) {
  const [text, setText] = useState({ title: "", desc: "" });

  const cartCtx = useContext(CartContext);

  // const price = `$${product.price.toFixed(2)}`;
  const price = product ? `$${product.price.toFixed(2)}` : "";
  console.log("Product: ", product);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      name: product.name,
      amount: amount,
      description: product.description,
      bage: product.bage,
    });
  };

  const handleClick = () => {
    setText({
      title: product ? product.title : "",
      desc: product ? product.description : "",
    });
  };
  const handleClickOne = () => {
    setText({
      title: product ? product.stars : "",
      desc: product ? product.description : "",
    });
  };
  const handleClickTwo = () => {
    setText({
      title: product ? product.title : "",
      desc: product ? product.description : "",
    });
  };

  return (
    <div>
      <div className="container productInfo ">
        <Row className="productInfo__card mx-3 mx-md-0">
          <Col md className="productInfo__image">
            {/* <img src={product.img} alt="" /> */}
            <img src={product ? product.img : ""} alt="" />
          </Col>
          <Col md className="productInfo__content ms-lg-3">
            <div>
              <h2 className="mt-5 mt-lg-3 mb-lg-4">
                {product ? product.title : ""}
              </h2>
              <span className="productInfo__star mb-3 ">
                Star(2 customer reviews)
              </span>
              <h3 className="my-3 mb-4 mt-lg-4">{price}</h3>
              <p>{product ? product.description : ""}</p>
            </div>
            <ProductInfoForm onAddToCart={addToCartHandler} />
          </Col>
        </Row>
      </div>
      <div className="container productInfo__grp my-5 py-5">
        <ButtonGroup className="d-flex flex-column flex-lg-row mx-4">
          <div>
            <Button className="grp-btn-one my-2 me-3" onClick={handleClick}>
              Description
            </Button>
          </div>
          <div>
            <Button className="grp-btn my-2 me-3" onClick={handleClickOne}>
              Additional Information
            </Button>
          </div>
          <div>
            <Button className="grp-btn my-2" onClick={handleClickTwo}>
              Reviews (2)
            </Button>
          </div>
        </ButtonGroup>
        {/* display text.title and text.desc */}
        <div className="btn-info mt-5 mx-4">
          <h4 className="mb-4">{text.title}</h4>
          <p className="">{text.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
