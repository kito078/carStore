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
      <div className="blog-container mb-5">
        <div className="blog-container-content">
          <h2 className="mb-4">Shop Details Right Sidebar.</h2>
          <h5>Home Blog Details Blog Details Right Sidebar</h5>
        </div>
      </div>
      <div className="container">
        <AvailableShop onProductClick={productClickHandler} />
      </div>
    </div>
  );
}

export default Shop;
