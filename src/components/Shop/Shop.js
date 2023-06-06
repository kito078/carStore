import React, { useEffect } from "react";
import AvailableShop from "./AvailableShop";
import Saver from "../Saver/Saver";

function Shop(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
