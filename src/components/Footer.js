import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../assets/logo.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerHeader">
          <div className="footerLogo">
            {/* <Link to="/">
            <img src={Logo} alt="" />
          </Link> */}
          </div>
          <h4>Rokar Global</h4>
        </div>
        <div className="footerAddress">
          <p>Head Office</p>
          <p>Chole Road, Gate No: 99</p>
          <p>Masaki, Dar Es Salaam</p>
          <p>Tanzania</p>
        </div>
        <div className="footerAddress">
          <p>Warehouse</p>
          <p>Nelson Mandela Road, Mabibo External</p>
          <p>Dar Es Salaam</p>
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
            <p>rokarglobal@gmail.com</p>
          </div>
        </div>
        <div className="footerContactContainer">
          <Link to="/contact">
            <button> Contact Us </button>
          </Link>
        </div>
      </div>
      <div className="footerEnd">
        <p>&copy; 2024 Rokar Global. All Rights Reserved.</p>
      </div>
    </div>
  );
};
