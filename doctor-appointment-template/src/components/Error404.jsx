import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/Error404PageStyle.css";
import PageNotFound from "../animation/page_not_found.json";
import Lottie from "lottie-react";

const Error404 = () => {
  return (
    <>
      <section id="not-found">
        <div className="container">
          <div className="page-not-found">
            <Lottie
              loop={true}
              animationData={PageNotFound}
              className="lottie-animation"
            />
            <h2>We are sorry, page not found!</h2>
            <p>
              This page you are looking for might have been removed or is not
              available.
            </p>
            <NavLink to="/" className={"my-btn"}>
              Back to Homepage
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
