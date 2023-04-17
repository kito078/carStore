import React from "react";
import First from "../../images/con1.jpg";
import Second from "../../images/con2.jpg";
import Third from "../../images/con3.jpg";
import BrandingItem from "./BrandingItem";
import { Button, Row, Col } from "reactstrap";

const newBrand = [
  {
    img: Third,
    title: "Post Format Chat, Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
  {
    img: Second,
    title: "Nostrum Iesum Christum Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
  {
    img: Third,
    title: "Post Format Image, Lorem Ipsum is simply text",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    brand: "August 11",
  },
];

function Branding() {
  const brandItems = newBrand.map((item) => {
    return (
      <BrandingItem
        img={item.img}
        title={item.title}
        desc={item.desc}
        brand={item.brand}
      />
    );
  });
  return (
    <Row className="align-items-center justify-content-center mx-2 mx-lg-0">
      {brandItems}
    </Row>
  );
}

export default Branding;
