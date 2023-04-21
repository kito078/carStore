import React from "react";
import AvailableProducts from "./AvailableProducts";

function Product(props) {
  const SaveProductHandler = (product) => {
    props.onProduct(product);
  };
  return (
    <div className="mt-5">
      <AvailableProducts onSaveProduct={SaveProductHandler} />
    </div>
  );
}

export default Product;
