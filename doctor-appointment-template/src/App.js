import React from 'react'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './HomePage';
import AboutPage from './Pages/AboutPage';
import ServicePage from './Pages/ServicePage';
import AppointmentPage from './Pages/AppointmentPage';
import ContactPage from './Pages/ContactPage';
import ErrorPage from './Pages/ErrorPage';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={HomePage}></Route>
        <Route path="/about" Component={AboutPage}></Route>
        <Route path="/service" Component={ServicePage}></Route>
        <Route path="/appointment" Component={AppointmentPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
        <Route path="*" Component={ErrorPage}></Route>
      </Routes>
    </>
  );
};

export default App;
