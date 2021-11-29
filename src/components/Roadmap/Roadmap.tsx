import React from "react";
import data from "./data";
import "./styles.css";
import shirt from "../../assets/shirt.png";

const Roadmap = () => {
  return (
    <div id="Roadmap" className="roadmap">
      <h1>ROADMAP ACTIVATIONS</h1>
      <p>We’re in this for the long haul.</p>
      <p>
        We’ve set up some goalposts for ourselves. Once we hit a target sell
        through percentage, we will begin to work on realizing the stated goal.
      </p>
      <div className="roads-container">
        <div className="roads">
          {data.map((item, index) => (
            <div key={index} className="each-road">
              <h4>{item.percent}</h4> <p>{item.text}</p>
            </div>
          ))}
        </div>
        <img src={shirt} alt="" />
      </div>
    </div>
  );
};

export default Roadmap;
