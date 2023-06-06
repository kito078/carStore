import React from "react";
import Bottle from "../../images/bottle.jpg";
import "./WeekSave.css";

function WeekSave() {
  return (
    <div className="weekSave__container py-5">
      <div className="container ">
        <div className="d-flex flex-md-row text-center  flex-column align-items-center justify-content-center ">
          <div>
            <img
              className="image"
              src={Bottle}
              alt="Description of the image"
            />
          </div>
          <div className="weekSave__body mx-4 text-md-start">
            <h2 className="mt-5 mb-4 mt-md-3">save 10% this week</h2>
            <h3 className="mb-4">on all engine projects</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeekSave;
