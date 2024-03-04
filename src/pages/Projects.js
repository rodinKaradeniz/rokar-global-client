import React, { useEffect } from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
// import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <div className="projectsIntro">
        <h1>Our Projects</h1>
        <h4>
          Each product is a testament to our commitment to quality,
          authenticity, and the art of elevating your culinary journey.
        </h4>
      </div>
      <div className="projectList">
        {ProjectList.map((projectItem, key) => {
          return (
            <div className="projectItemContainer">
              <ProjectItem
                key={key}
                image={projectItem.image}
                name={projectItem.name}
                stat1={projectItem.stat1}
                stat2={projectItem.stat2}
                stat3={projectItem.stat3}
                description={projectItem.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
