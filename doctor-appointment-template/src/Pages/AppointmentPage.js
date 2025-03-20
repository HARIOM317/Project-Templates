import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopSpecialistCard from '../components/TopSpecialistCard';
import Appointment from '../components/Appointment';

const AppointmentPage = () => {
  return (
    <div>
      <Navbar />
      <Appointment />
      <TopSpecialistCard />
      <Footer />
    </div>
  );
};

export default AppointmentPage;
