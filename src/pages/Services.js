import React, { useEffect } from "react";
import ServiceItem from "../components/ServiceItem";
import { ServiceList } from "../helpers/ServiceList";
// import "../styles/Services.css";

function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services">
      <div className="servicesIntro">
        <h1>Our Services</h1>
        <h4>
          Each product is a testament to our commitment to quality,
          authenticity, and the art of elevating your culinary journey.
        </h4>
      </div>
      <div className="serviceList">
        {ServiceList.map((serviceItem, key) => {
          return (
            <div className="serviceItemContainer">
              <ServiceItem
                key={key}
                image={serviceItem.image}
                name={serviceItem.name}
                description={serviceItem.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
