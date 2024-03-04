import React from "react";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import PlaceIcon from "@mui/icons-material/Place";

function CareerItem({ name, type, location, description, qualifications }) {
  return (
    <div className="careerItem">
      <div className="careerIntro">
        <h2> {name} </h2>
        <TimelapseIcon />
        <p> {type} </p>
        <PlaceIcon />
        <p> {location} </p>
      </div>
      <div className="careerInfo">
        <h3> Description: </h3>
        <p> {description} </p>
        <h3> Qualifications: </h3>
        <p> {qualifications} </p>
      </div>
    </div>
  );
}

export default CareerItem;
