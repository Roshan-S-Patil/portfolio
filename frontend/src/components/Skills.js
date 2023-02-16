import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";
import htmlImg from "./HTML.png";
import cssImg from "./CSS.png";
import jsImg from "./js.png";
import reactImg from "./REACT.png";
import fmImg from "./FM.png";

const Skills = () => {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 80,
      },
    },
  };
  const skills = [
    {
      title: "HTML",
      image: htmlImg,
    },
    {
      title: "CSS",
      image: cssImg,
    },
    {
      title: "JavaScript",
      image: jsImg,
    },
    {
      title: "React",
      image: reactImg,
    },
    {
      title: "Framer-Motion",
      image: fmImg,
    },
  ];
  return (
    <>
      <div className="skills">
        <div className="skill-card">
          <h1 className="heading">Passionate About</h1>
          <div className="contents">
            <h1>CSS</h1>
          </div>
        </div>
        <div className="skill-card">
          <h1 className="heading">Expertise In</h1>
          <div className="contents">
            <h1>HTML</h1>
            <h1>CSS</h1>
            <h1>JavaScript</h1>
            <h1>React</h1>
            <h1>Bootstrap</h1>
            <h1>Framer Motion</h1>
          </div>
        </div>
        <div className="skill-card">
          <h1 className="heading">Knows About</h1>
          <div className="contents">
            <h1>NodeJs</h1>
            <h1>Express</h1>
            <h1>MongoDB</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
