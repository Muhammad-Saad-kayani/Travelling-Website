/* eslint-disable no-unused-vars */
import React from "react";
import "./About.css";
import about from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
import Title from "../Title/Title";

const About = () => {
  return (
    <>
    <Title subTitle='Our Program' title='What We Offer'/>
    
    <div className="about">
      <div className="about-left">
        <img src={about} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play_icon" />
      </div>
      <div className="about-right">
        <h3>About SMIU</h3>
        <h2> Higher Education Commission (HEC) of Pakistan</h2>
        <p>
          Sindh Madressatul Islam University is a chartered University, duly
          recognized by the Higher Education Commission (HEC) of Pakistan.  </p>
        <p>
          Its campus is located in the commercial hub of Karachi, near I.I.
          Chundrigar Road (old McLeod Road) in vicinity of Habib Bank Plaza and
          MCB Tower. 
        </p>
        <p>
          The Information Technology laboratories of the University are equipped
          with latest computers, laptops, scanners, printers, multimedia
          projectors and other technical equipment. 
          through Wi-Fi.
        </p>
      </div>
    </div>
    </>

  );
};

export default About;
