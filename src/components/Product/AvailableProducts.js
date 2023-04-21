import React from "react";
import ProductItem from "./ProductItem";
import { Button, Row, Col } from "reactstrap";
import { PRODUCTS } from "./newItem";
import { Link } from "react-router-dom";

function AvailableProducts(props) {
  return (
    <Row className="align-items-center justify-content-center text-center mx-2">
      {PRODUCTS.slice(0, 4).map((product) => (
        <Col onClick={() => props.onSaveProduct(product)}>
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            title={product.title}
            stars={product.stars}
            bage={product.bage}
          >
            {props.children}
          </ProductItem>
        </Col>
      ))}
    </Row>
  );
}

export default AvailableProducts;
