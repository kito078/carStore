import React from "react";
import NewsletterForm from "./NewsletterForm";
import "./Newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter d-flex  text-center py-5">
      {/* <div className="newsletter__header pt-5"></div> */}
      <div className="newsletter__header pt-5 text-center mx-auto d-flex align-items-center flex-column  justify-content-center">
        <h2>EXECUTIVE AUTO PART</h2>
        <div>
          <span className="my-5 py-2 px-2">
            Explore Seasonal SALE only on New Freedom
          </span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
