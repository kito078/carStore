import React, { useContext, useState } from "react";
import { Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { PRODUCTS } from "../Product/newItem";
import ShopItem from "./ShopItem";

function AvailableShop(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const cartCtx = useContext(CartContext);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(PRODUCTS.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <Button
      key={number}
      onClick={() => setCurrentPage(number)}
      active={number === currentPage}
    >
      {number}
    </Button>
  ));

  return (
    <>
      <Row className="align-items-center justify-content-center text-center mx-2">
        {currentItems.map((product) => (
          <Col
            onClick={() => {
              props.onProductClick(product);
            }}
          >
            <ShopItem
              key={product.key}
              id={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
              title={product.title}
              stars={product.stars}
              bage={product.bage}
            >
              {props.children}
            </ShopItem>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs="auto">{renderPageNumbers}</Col>
      </Row>
    </>
  );
}

export default AvailableShop;

// import React, { useState } from "react";
// import ProductItem from "./AvailableShop";
// import { Button, Row, Col } from "reactstrap";
// import { PRODUCTS } from "../Product/newItem";
// import ShopItem from "./ShopItem";
// import Collection from "../Collection/Collection";

// function AvailableShop() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(4);
//   const [details, setDetails] = useState(false);

//   const showDetailsHandler = () => {};

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = PRODUCTS.slice(indexOfFirstItem, indexOfLastItem);

//   const pageNumbers = [];
//   for (let i = 1; i <= Math.ceil(PRODUCTS.length / itemsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   const renderPageNumbers = pageNumbers.map((number) => (
//     <Button
//       key={number}
//       onClick={() => setCurrentPage(number)}
//       active={number === currentPage}
//     >
//       {number}
//     </Button>
//   ));

//   return (
//     <>
//       <Row
//         onClick={showDetailsHandler}
//         className="align-items-center justify-content-center text-center mx-2"
//       >
//         {currentItems.map((product) => (
//           <div>
//             <ShopItem key={product.id} data={product} />
//           </div>
//         ))}
//       </Row>

//       <Row className="justify-content-center mt-4">
//         <Col xs="auto">{renderPageNumbers}</Col>
//       </Row>
//     </>
//   );
// }

// export default AvailableShop;

// import React from "react";
// import ProductItem from "./AvailableShop";
// import { Button, Row, Col } from "reactstrap";
// import { PRODUCTS } from "../Product/newItem";
// import ShopItem from "./ShopItem";

// function AvailableShop() {
//   return (
//     <Row className="align-items-center justify-content-center text-center mx-2">
//       {PRODUCTS.map((product) => (
//         <ShopItem key={product.id} data={product} />
//       ))}
//     </Row>
//   );
// }

// export default AvailableShop;
