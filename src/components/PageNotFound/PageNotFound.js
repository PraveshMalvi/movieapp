import React from "react";
// import PNF from "../../images/pnf.jpg";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="pnf">
      <h2>
        <i class="fas fa-bug"></i> 404
      </h2>
      <h4>Page not found.</h4>
      <p>
        We're sorry, the page you requested could not be found. Please go back
        to home page by clickng the button below. Thank you.
      </p>
      <Link to="/" className="backBtn">
        Back To Home
      </Link>
      {/* <img src={PNF} alt="" /> */}
    </div>
  );
};

export default PageNotFound;
