import React from 'react';
import ServiceSectionCard from './ServiceSectionCard';
import "../stylesheets/ServicePageStyle.css";
import ServiceComponent from './ServiceComponent';

const Service = () => {
  return (
    <>
      <section className="service">
        <div className="container">
          <div class="row">
            <div class="section-title pad-15">
              <h2>Our Services</h2>
            </div>
          </div>

          <div class="row">
            <p class="my-para">
              Welcome to DocApoint, where we're committed to making healthcare
              access easier and more convenient for everyone. Our online
              appointment system provides a wide range of services to connect
              you with trusted healthcare professionals. Explore the various
              services we offer:
            </p>
          </div>

          <div className="row mt-5">
            <ServiceSectionCard />
          </div>

          {/* Service Components */}
          <div>
            <ServiceComponent />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
