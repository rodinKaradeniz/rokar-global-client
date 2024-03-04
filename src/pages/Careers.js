import React, { useEffect } from "react";
import CareerItem from "../components/CareerItem";
import { CareerList } from "../helpers/CareerList";
// import "../styles/Careers.css";

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="careers">
      <div className="careerIntro">
        <h1>Careers</h1>
        <h4>See below for our job openings.</h4>
        <h4>
          If you do not meet with all of the requirements, no worries! We are
          still eager to hear from you. If you see a position that you would
          like to apply for, please e-mail us your resume.
        </h4>
      </div>
      <div className="careerList">
        {CareerList.map((careerItem, key) => {
          return (
            <div className="careerItemContainer">
              <CareerItem
                key={key}
                name={careerItem.name}
                location={careerItem.location}
                type={careerItem.type}
                description={careerItem.description}
                qualifications={careerItem.qualifications}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Careers;
