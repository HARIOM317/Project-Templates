import React, { useState } from "react";
import useTipsAPI from "../APIs/useTipsAPI";
import customerSupportAPI from "../APIs/customerSupportAPI";

const HowToUse = () => {
  const [howToUseData] = useState(useTipsAPI);
  const [customerSupportData] = useState(customerSupportAPI);

  return (
    <>
      {/* First Part */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-4 text-center our-service-left-side-img">
              <img
                src="./images/home-images/how-to-use.jpg"
                alt="How To Use DocApoint"
              />
            </div>

            <div className="col-12 col-lg-8 our-services-list">
              <h1 className="main-heading">How to use the App</h1>

              {howToUseData.map((element) => {
                const { id, title, info } = element;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2 className="sub-heading">{title}</h2>
                        <p className="paragraph">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Part */}

      <section className="common-section our-services our-services-right-side">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-8 our-services-right-side-content d-flex justify-content-center align-items-start flex-column order-lg-first order-last">
              <h1 className="main-heading">
                World class support is <br />
                available 24/7
              </h1>

              {customerSupportData.map((element) => {
                const { id, title, info } = element;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2 className="sub-heading">{title}</h2>
                        <p className="paragraph">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>

            <div className="col-12 col-lg-4 text-center our-service-right-side-img order-md-first order-sm-first">
              <img
                src="./images/home-images/call-center.jpg"
                alt="Customer Support"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToUse;
