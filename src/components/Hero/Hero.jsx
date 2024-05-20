import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            Cooking demands attention, patience,and a respect for the gifts of
            the earth.
          </h1>
          <p>
            So when people ask me, ‘What do you think of Michelin?’ I don’t cook
            for guides. I cook for customers.
          </p>
          <button className="button-btn">
            Explore more
            <img src={dark_arrow} alt="" className="dark-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
