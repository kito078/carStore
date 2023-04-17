import React, { useState } from "react";
import ImageOne from "../../images/bottle.jpg";
import "./ProductInfo.css";
import { Button, Row, Col, ButtonGroup } from "reactstrap";

function ProductInfo() {
  const [text, setText] = useState({ title: "", desc: "" });

  const handleClick = () => {
    setText({
      title: "Description",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t",
    });
  };
  const handleClickOne = () => {
    setText({
      title: "Additional information",
      desc: "WEIGHT	10 kg",
    });
  };
  const handleClickTwo = () => {
    setText({
      title: "2 reviews for Fresh Strawberry",
      desc: "Cool and fresh fruits",
    });
  };

  return (
    <div>
      <div className="container productInfo ">
        <Row className="productInfo__card mx-3 mx-md-0">
          <Col md className="productInfo__image">
            <img src={ImageOne} alt="" />
          </Col>
          <Col md className="productInfo__content ms-lg-3">
            <h2 className="mt-5 mt-lg-0 mb-lg-4">Fresh Strawberry</h2>
            <span className="productInfo__star mb-3 ">
              Star(2 customer reviews)
            </span>
            <h3 className="my-3 mb-4 mt-lg-4">$40.657</h3>
            <p>
              Sumptuous, filling, and temptingly healthy, our Biona Organic
              Granola with Wild Berries is just the thing to get you out of bed.
              The goodness of rolled wholegrain oats are combined with a variety
              of tangy organic berries, and baked into crispy clusters that are
              as nutritious.
            </p>
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
