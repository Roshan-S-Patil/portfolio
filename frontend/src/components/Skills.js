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
      <h1 className="title">Skills</h1>
      <div className="skills">
        {skills?.map((skill) => {
          return (
            <div className="skill-card">
              <motion.img
                variants={variants}
                initial="hidden"
                whileInView="visible"
                className="skill-img"
                src={skill.image}
                alt=""
              />
              <motion.h1
                variants={variants}
                initial="hidden"
                whileInView="visible"
                className="skill-title"
              >
                {skill.title}
              </motion.h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
