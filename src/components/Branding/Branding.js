import React, { createContext } from "react";
import First from "../../images/con1.jpg";
import Second from "../../images/con2.jpg";
import Third from "../../images/con3.jpg";
import blog1 from "../../images/bloga.jpg";
import blog2 from "../../images/blogb.jpg";
import blog3 from "../../images/blogc.jpg";
import blog4 from "../../images/blogp1.jpeg";
import blog5 from "../../images/blogp2.webp";
import blog6 from "../../images/blogb.jpg";
import BrandingItem from "./BrandingItem";
import { Button, Row, Col } from "reactstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const newBrand = [
  {
    img: blog1,
    img2: blog1,
    img3: blog2,
    title: "Post Format Chat, Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
  {
    img: Second,
    img2: blog2,
    img3: blog3,
    title: "Nostrum Iesum Christum Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
  {
    img: blog6,
    img2: blog2,
    img3: blog6,
    title: "Post Format Image, Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
];

function Branding() {
  const cartCtx = useContext(CartContext);

  //   cartCtx.receiveItem(item);
  // const receiveItemHandler = (item) => {
  // };
  const brandItems = newBrand.map((item) => (
    <Col key={item.id} onClick={() => cartCtx.blogItem(item)}>
      <BrandingItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        brand={item.brand}
      />
    </Col>
  ));
  return (
    <Row className="align-items-center justify-content-center mx-2 mx-lg-0">
      {brandItems}
    </Row>
  );
}

export default Branding;
