import React from 'react';
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactPageHeader from '../components/ContactPageHeader';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactPageHeader />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;