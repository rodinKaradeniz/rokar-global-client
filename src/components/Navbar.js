import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarHeader">
        <div className="navbarLogo">
          {/* <Link to="/">
          <img src={Logo} alt="" />
        </Link> */}
        </div>
        <div className="navbarTitle">
          <Link to="/">Rokar Global</Link>
        </div>
      </div>
      <div className="navbarLinksContainer">
        <div className="navbarLinks">
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
        </div>
        <Link to="/contact" className="contact-link">
          <button> Contact </button>
        </Link>
      </div>
    </div>
  );
};
