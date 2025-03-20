import React, { Component } from 'react';
import "../stylesheets/NavbarStyle.css";
import "../index.css";
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

    state = {clicked: false};
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render(){
      return (
        <>
          <nav>
            <NavLink to="/">
              <img src="./images/logo.png" alt="DocApoint" width={50} />
            </NavLink>

            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "#navbar active" : "#navbar"}
              >
                {/* Close Button */}
                <div onClick={this.handleClick} className="close-btn">
                  <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className="fas fa-times"></i>
                  </div>
                </div>

                <li>
                  <NavLink to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Services</NavLink>
                </li>
                <li>
                  <NavLink to="/appointment">Appointment</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>

                <button className="btn-style" type="submit">
                  Log In
                </button>
              </ul>
            </div>

            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className="fas fa-bars"></i>
            </div>
          </nav>
        </>
      );
    }

}

export default Navbar
