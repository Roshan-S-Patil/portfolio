import React, { useState } from "react";
import "./Home.css";
import { useDataLayerValue } from "../datalayer/DataLayer";
import { motion } from "framer-motion";
import shinchan from "./shinchan.gif";
import Projects from "./Projects";
import Intro from "./Intro";
import Hero from "./Hero";
import Work from "./Work";
import Contact from "./Contact";
import Nav from "./Nav";
import Skills from "./Skills";
import About from "./About";

const Home = () => {
  return (
    <motion.div className="home">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Work />
      <Contact id="contact" />
    </motion.div>
  );
};

export default Home;
