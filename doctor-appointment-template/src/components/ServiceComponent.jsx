import React from "react";
import { useState } from "react";
import serviceComponentAPI from "../APIs/serviceComponentAPI";

const ServiceComponent = () => {
  const [component] = useState(serviceComponentAPI);

  return (
    <>
      {component.map((element) => {
        const { id, title, description, buttonName, imagePath } = element;
        return (
          <>
            <div
              className="px-4 pt-3 my-7 text-center"
              style={{ borderTop: "1.5px solid var(--bg-black-25)" }}
              key={id}
            >
              <h1 className="display-5 fw-bold heading-text">{title}</h1>
              <div className="overflow-hidden">
                <div className="container">
                  <img
                    src={imagePath}
                    className="img-fluid rounded-4 mb-4"
                    style={{ border: "1px solid var(--bg-black-50)" }}
                    alt="..."
                    loading="lazy"
                    width="500"
                  />
                </div>
              </div>
              <div className="col-lg-6 mx-auto">
                <p
                  className="mb-4 justify-text"
                  style={{
                    color: "var(--text-black-700)",
                    fontSize: "20px",
                    textAlign: "justify",
                  }}
                >
                  {description}
                </p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                  <button type="button" className="my-btn">
                    {buttonName}
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ServiceComponent;
