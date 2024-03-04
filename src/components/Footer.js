import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerHeader">
        <div className="footerLogo">
          {/* <Link to="/">
            <img src={Logo} alt="" />
          </Link> */}
        </div>
        <div className="footerAddress">
          <p>Chole Road, Gate No: 99</p>
          <p>Masaki, Dar Es Salaam</p>
          <p>Tanzania</p>
        </div>
        <div className="footerContactInfo">
          <div className="footerPhoneInfo">
            <CallIcon />
            <p>+255 752 777 708</p>
          </div>
          <div className="footerPhoneInfo">
            <WhatsAppIcon />
            <p>+255 772 733 303</p>
          </div>
          <div className="footerEmailInfo">
            <EmailIcon />
            <p>: rokarglobal@gmail.com</p>
          </div>
        </div>
        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/projects">Our Projects</Link>
          <Link to="/about">About Us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footerEnd">
        <p>Rokar Global &copy; 2019 All Rights Reserved.</p>
      </div>
    </div>
  );
};
