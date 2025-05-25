import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container w-full">
      <div className="hero-text">
        <h1>Transforming education into global opportunities</h1>
        <p>
          The objective of Udaan cell is to facilitate our student’s with education, internship and work opportunities in abroad. It gives students to enroll in various course in international universities in countries like USA, UK, Canada, Australia, Newzeland,  Europe, Singapore Dubai and many more.
        </p>
        <button className="btn">
          Explore more
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
