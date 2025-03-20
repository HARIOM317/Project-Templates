import React from "react";
import Doctor from "../animation/doctor.json";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";

const HomePageHeader = () => {
  return (
    <>
      <header className="homepage">
        <h1 class="hello container">
          👋🏼 Welcome to <span>DocApoint</span>
        </h1>
        <section className="container main-header-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h3 class="doc-apoint-offers">
                DocApoint provides you{" "}
                <TypeAnimation
                  className="typing"
                  sequence={[
                    "Online Appointment Service",
                    2000,
                    "Health Tips",
                    2000,
                    "Best Doctors",
                    2000,
                    "Fast Response",
                    2000,
                  ]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </h3>

              <p className="main-header-para">
                Streamline your healthcare journey with our intuitive online
                appointment system. Browse a diverse array of doctors, select
                your preferred specialist, and secure your appointment in just a
                few clicks. Say goodbye to long wait times and phone queues.
                With secure online payments, booking is seamless and
                hassle-free. Prioritize your well-being – experience the ease of
                modern healthcare today.
              </p>

              <button type="submit" class="my-btn">
                Make Appointment
              </button>
            </div>

            {/* Main Header Right Side */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-header-section-images order-md-first order-sm-first">
              <Lottie
                className="animation"
                loop={true}
                animationData={Doctor}
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default HomePageHeader;
