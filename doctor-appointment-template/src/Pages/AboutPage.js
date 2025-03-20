import React from "react";
import "../index.css";
import "../stylesheets/AboutPageStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
