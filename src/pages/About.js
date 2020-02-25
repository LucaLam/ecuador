import React from "react";
import "./about.scss";

import Ecuador from '../assets/ecuador.svg';

const About = () => {
  return (
    <div className="about-text-container">
      <p className="about-text">
        This project is inspired by a hack-a-thon that my team and I totally
        failed on during my time at BrainStation.</p> 
        <p className="about-text">
        We had about 10 hours to work
        with the Data Science and UX/UI Design teams to create an app from
        scratch and due to too many amazing ideas, we just didn't have the time
        to finish. </p> 
        <p className="about-text">
        The original project was meant to be a map of Canada and
        provide province specific details when clicked. However, I have changed
        this concept to one that is close to my heart, tourism in Ecuador.
      </p>
      <img className='ecuador-icon' src={Ecuador} alt='Ecuador Flag Icon' />
    </div>
  );
};

export default About;
