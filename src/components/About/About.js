import React, { Fragment } from "react";
import "./About.css";
import Feature2 from "../Feature/Feature";
import FeatureOne from "../FeatureOne/FeatureOne";
import Team from "../Team/Team";

function About() {
  return (
    <Fragment>
      <div className="showcase p-5">
        <div className="container mt-3">
          <h2 className="mb-4">About</h2>
          <h5 className="">Home | Service</h5>
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
