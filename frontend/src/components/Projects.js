import React from "react";
import "./Projects.css";
import { useDataLayerValue } from "../datalayer/DataLayer";
import { motion } from "framer-motion";
import tea from "./tea.jpg";
import portfolio from "./portfolio-website.png";
import spotify from "./spotify.png";
import todo from "./todo.jpg";

const Projects = () => {
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
  const project = [
    {
      id: 1,
      title: "TODO LIST",
      image: todo,
      description:
        "If you are a frontend developer it's mandatory to have TODO LIST in your TODO LIST. It gave me good Knowledge of states and props and Confidence to make React App",
    },
    {
      id: 2,
      title: "SPOTIFY-CLONE",
      image: spotify,
      description:
        "APP Clones Are best way to learn Frontend Development.SPOTIFY-CLONE gave me good knowledge of using APIs, Mapping and context APIs",
    },
    {
      id: 3,
      title: "CHIAMANTRA",
      image: tea,
      description:
        "This project increased my knowledge about using external APIs like Google Authentication,REST APIs, mongoDB ,nodejs etc",
    },
    {
      id: 4,
      title: "PORTFOLIO",
      image: portfolio,
      description:
        "My First Deployed Website.I used Google Authentication to give personal greetings to viewer,context API,reducer and also includes Framer Motion for Animations and Transitions",
    },
  ];
  const [{ clicked }, dispatch] = useDataLayerValue();
  return (
    <>
      <h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        className="title"
      >
        PROJECTS
      </h1>
      <div className="projects">
        {project?.map((pro) => {
          return (
            <motion.div
              className="card"
              variants={variants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.img src={pro.image} key={pro.id} />
              <motion.h2 key={pro.id}>{pro.title} </motion.h2>
              <motion.p key={pro.id}>{pro.description} </motion.p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
