import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import HowItWorks from "./components/HowItWorks";
import HowToUse from "./components/HowToUse";
import FAQs from "./components/FAQs";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import HomePageHeader from "./components/HomePageHeader";
import AppointmentBookingProcess from "./components/AppointmentBookingProcess";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HomePageHeader />
      <HowItWorks />
      <HowToUse />
      <AppointmentBookingProcess />
      <FAQs />
      <Footer />
    </>
  );
};

export default HomePage;
