import React from "react";

const Appointment = () => {
  return (
    <>
      <section className="appointment">
        <div className="container">
          <div class="row">
            <div class="section-title pad-15">
              <h2>Appointment</h2>
            </div>

            <div className="d-flex justify-content-center">
              <button type="button" className="my-btn">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Appointment;
