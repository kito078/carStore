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

function Home() {
  return (
    <div className="home">
      <div className="container"></div>
      <Banner />

      <div className="container">
        <DealsCard />
      </div>
      {/* <Category /> */}
      <Easy />
      <div className="container">
        <FeatureOne />
        <Product />
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
