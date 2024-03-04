import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import Maps from "../components/Maps";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
// import "../styles/Contact.css";

function Contact() {
  const [mapContainerStyle, setMapContainerStyle] = useState({
    width: "350px",
    height: "250px",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    updateMapContainerStyle(); // Update mapContainerStyle initially
    window.addEventListener("resize", updateMapContainerStyle); // Add event listener for window resize
    return () => {
      window.removeEventListener("resize", updateMapContainerStyle); // Cleanup event listener on component unmount
    };
  }, []);

  const updateMapContainerStyle = () => {
    // Adjust mapContainerStyle based on screen width
    const screenWidth = window.innerWidth;
    const newMapContainerStyle =
      screenWidth >= 768
        ? { width: "500px", height: "300px" }
        : { width: "300px", height: "200px" };
    setMapContainerStyle(newMapContainerStyle);
  };

  return (
    <div className="contact">
      <div className="contactHeader">
        <h1> Contact Us </h1>
        <h4>
          If you require support or have any inquiries, please feel free to
          submit your message through the form below.
        </h4>
      </div>
      <div className="contactBody">
        <div className="contactInfo">
          <h2>Ro-Kar Global</h2>
          <p>Chole Road, Gate No: 99, Masaki, Dar Es Salaam, Tanzania</p>
          <div className="contactPhoneInfo">
            <CallIcon />
            <p>+255 752 777 708</p>
          </div>
          <div className="contactPhoneInfo">
            <WhatsAppIcon />
            <p>+255 772 733 303</p>
          </div>
          <div className="contactEmailInfo">
            <EmailIcon />
            <p>rokarglobal@gmail.com</p>
          </div>
        </div>
        <div className="contactFormContainer">
          <ContactForm />
        </div>
        <div className="mapsContainer">
          <Maps data={mapContainerStyle} />
        </div>
      </div>
    </div>
  );
}

export default Contact;
