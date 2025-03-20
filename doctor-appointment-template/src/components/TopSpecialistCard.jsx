import React, { useState } from "react";
import topSpecialistAPI from "../APIs/topSpecialistAPI";
import "../stylesheets/AppointmentPageStyle.css";

const TopSpecialistCard = () => {
  const [topSpecialist] = useState(topSpecialistAPI);

  return (
    <>
      <section className="top-specialist">
        <div className="container">
          <h1 className="main-heading">Our Top Specialist</h1>
          <div className="row">
            {topSpecialist.map((currentElement) => {
              const { id, profile, doctorName, specialist } = currentElement;
              return (
                <>
                  <div
                    className="col-12 col-lg-4 text-center top-specialist-card"
                    key={id}
                  >
                    <img src={profile} alt="Doctor" className="img-fluid" />
                    <h2>{doctorName}</h2>
                    <p>{specialist}</p>
                    <button className="card-btn">{"View Details »"}</button>
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

export default TopSpecialistCard;
