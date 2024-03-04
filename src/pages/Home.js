import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="homeContent">
        <div className="homeHeader">
          <h1>Rokar Global</h1>
          <h4>
            Building Futures, Fueling Progress, and Managing Excellence —
            Crafting Stability, Delivering Reliability.
          </h4>
        </div>
        <div className="homeIntro">
          <p>
            We seamlessly integrate the art of construction, the vitality of the
            petroleum industry, and the precision of property management to
            create a comprehensive ecosystem of excellence. With a steadfast
            commitment to quality, safety, and reliability, we embark on a
            journey to redefine standards, leaving an indelible mark on the
            landscapes we shape. Join us in building a future where resilience
            and stability converge for lasting success.
          </p>
        </div>
        <div className="homeServicesButton">
          <Link to="/services">
            <button> Our Services </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
