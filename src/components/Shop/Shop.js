import React from "react";
import AvailableShop from "./AvailableShop";
import Saver from "../Saver/Saver";

function Shop(props) {
  const productClickHandler = (product) => {
    props.onSaveProduct(product);
  };
  return (
    <div>
      <div className="container">
        <AvailableShop onProductClick={productClickHandler} />
      </div>
    </div>
  );
}

export default Shop;
