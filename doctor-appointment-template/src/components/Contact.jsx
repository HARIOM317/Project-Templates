import React from "react";
import "../stylesheets/ContactUsStyle.css";

const Contact = () => {
  return (
    <>
      <section className="contact-us-section">
        <div className="container">
          {/* Contact Form */}
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* Left Side Part */}
                <div className="contact-left-side col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">Contact Us</h1>
                  <p className="paragraph">
                    Connect with us. We are always at your services
                  </p>

                  <figure>
                    <img
                      src="./images/contact-us.jpg"
                      alt="Contact Us"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* Right Side Part */}
                <div className="contact contact-right-side col-12 col-lg-7">
                  <form method="POST">
                    {/* first row */}
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="First name"
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="Last name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* second row */}
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="phone"
                          placeholder="Phone"
                          className="form-control"
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="Address"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* third row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          placeholder="Subject (Optional)"
                          className="form-control"
                        />
                      </div>
                    </div>

                    {/* forth row */}
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <textarea
                          placeholder="Message"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <button type="submit" className="my-btn w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
