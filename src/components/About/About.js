import React, { Fragment } from "react";
import "./About.css";
import Feature2 from "../Feature/Feature";
import FeatureOne from "../FeatureOne/FeatureOne";
import Team from "../Team/Team";
import About2 from "../../images/abt.jpg";

function About() {
  return (
    <Fragment>
      <div className="blog-container">
        <div className="blog-container-content">
          <h2 className="mb-4">About Details Right Sidebar.</h2>
          <h5>About Details About Details Right Sidebar</h5>
        </div>
      </div>
      <div className="container">
        <div className="about__body ">
          <div className="about__image">
            <img src={About2} alt="Image" />
          </div>
          <div className="about__text">
            <h2>We Are Always Ready To Assist Our Clients</h2>
            <p>
              Automotive’s four Frederick locations continues its 20++ plus
              years tradition of quality auto repair services. ehicle owners in
              the ederick, MD area should be well aware of the Dynamic
              Automotive brand of service. We strive to go above and beyond for
              all of our customers, who we pair services. ehicle owners.
            </p>
          </div>
        </div>

        <Feature2 />
        <Team />
      </div>
    </Fragment>
  );
}

export default About;
