import React from "react";
import Banner from "../Banner/Banner";
import Feature2 from "../Feature/Feature";
import DealsCard from "../Deals/Deals";
import Easy from "../Easy/Easy";
import FeatureOne from "../FeatureOne/FeatureOne";
import Product from "../Product/Product";
import Branding from "../Branding/Branding";
import Newsletter from "../Newsletter/Newsletter";
import Contact from "../Contact/Contact";
import Testimonial from "../Testimonial/Testimonial";
import Category from "../Category/Category";
import "./Home.css";
import Collection from "../Collection/Collection";
import WeekSave from "../WeekSave/WeekSave";

function Home(props) {
  const onProductHandler = (product) => {
    props.onSaveProduct(product);
  };
  return (
    <div className="home">
      <div className="container"></div>
      <Banner />

      <div className="container">
        <DealsCard />
      </div>

      <WeekSave />
      <div className="container">
        <FeatureOne />
        <Product onProduct={onProductHandler} />
        <FeatureOne />
        <Branding />
      </div>

      <Newsletter />

      <div className="container">
        <Category />
        <Collection />
      </div>
    </div>
  );
}

export default Home;
