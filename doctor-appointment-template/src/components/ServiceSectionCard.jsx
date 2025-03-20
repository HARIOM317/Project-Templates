import React from "react";
import { useState } from "react";
import ServiceCardAPI from "../APIs/ServiceCardAPI";

const ServiceSectionCard = () => {
  const [cardData] = useState(ServiceCardAPI);
  return (
    <>
      {cardData.map((element) => {
        const { id, icon, title, description } = element;
        return (
          <>
            <div class="service-item pad-15" key={id}>
              <div class="service-item-inner">
                <div class="icon">
                  <i class={icon}></i>
                </div>
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ServiceSectionCard;
