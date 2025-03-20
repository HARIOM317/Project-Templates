import React from "react";
import "../stylesheets/FooterStyle.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                {/* First Column */}
                <div className="col-6 col-lg-3">
                  <h2>DocApoint</h2>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Service</a>
                    </li>
                    <li>
                      <a href="/">Appointment</a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-6 col-lg-3">
                  <h2>User</h2>
                  <ul>
                    <li>
                      <a href="/">Book Appointment</a>
                    </li>
                    <li>
                      <a href="/">Appointment Process</a>
                    </li>
                    <li>
                      <a href="/">FAQs</a>
                    </li>
                    <li>
                      <a href="/">Clinic</a>
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="/">+91 12345 12345</a>
                    </li>
                    <li>
                      <a href="/">docapoint@gmail.com</a>
                    </li>
                    <li>
                      <a href="/">City, Street - Pin Code</a>
                    </li>
                  </ul>
                </div>

                {/* Forth Column */}
                <div className="col-6 col-lg-3">
                  <h2>Social</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/instagram.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/facebook.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/twitter.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a href="/">
                        <img
                          className="icon-style"
                          src="./images/icons/whatsapp.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div className="mt-4">
                <p className="paragraph text-center w-100">
                  © Copyright 2024 DocApoint. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
