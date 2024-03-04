import React from "react";

function ProjectItem({ image, name, stat1, stat2, stat3, description }) {
  return (
    <div className="projectItem">
      <div className="projectImageContainer">
        <img className="image" src={image} alt={"service"} />
      </div>
      <div className="projectInfo">
        <h2> {name} </h2>
        <div className="projectStats">
          <h3> {stat1} </h3>
          <h3> {stat2} </h3>
          <h3> {stat3} </h3>
        </div>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ProjectItem;
