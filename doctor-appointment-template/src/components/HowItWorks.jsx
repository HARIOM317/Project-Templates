import React, { useState } from "react";
import workApi from "../APIs/workAPI";

const HowItWorks = () => {
  const [working] = useState(workApi);

  return (
    <>
      <section className="homepage">
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it work</h1>
          <div className="row">
            {working.map((currentElement) => {
              const { id, logo, title, info } = currentElement;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center work-container-sub-div"
                    key={id}
                  >
                    <i class={`font-awesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="paragraph">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
