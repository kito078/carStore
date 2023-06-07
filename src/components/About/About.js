import React, { Fragment } from "react";
import "./About.css";
import Feature2 from "../Feature/Feature";
import FeatureOne from "../FeatureOne/FeatureOne";
import Team from "../Team/Team";

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
        <Feature2 />
        <Team />
      </div>
    </Fragment>
  );
}

export default About;
