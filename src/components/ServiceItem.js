import React from "react";

function ServiceItem({ image, name, description }) {
  return (
    <div className="serviceItem">
      <div className="serviceImageContainer">
        <img className="image" src={image} alt={"service"} />
      </div>
      <div className="serviceInfo">
        <h2> {name} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ServiceItem;
