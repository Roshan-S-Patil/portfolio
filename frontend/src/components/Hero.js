import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import dp from "./port-dp.png";
import { HashLink as Link } from "react-router-hash-link";
import { GrDocumentDownload } from "react-icons/gr";
import resume from "./ROSHAN S.docx";

const Hero = () => {
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
  return (
    <>
      <motion.div className="hero">
        <motion.div className="left">
          <motion.img
            src={dp}
            variants={variants}
            initial="hidden"
            whileInView="visible"
          ></motion.img>
        </motion.div>
        <motion.div className="right ">
          <motion.h1 variants={variants} initial="hidden" whileInView="visible">
            ROSHAN PATIL,
          </motion.h1>
          <motion.h1 variants={variants} initial="hidden" whileInView="visible">
            <span>FRONTEND</span> DEVELOPER
          </motion.h1>
          <motion.div
            className="buttons"
            variants={variants}
            initial="hidden"
            whileInView="visible"
          >
            <button className="btns">
              <Link
                to="#contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                Contact
              </Link>{" "}
            </button>
            <button className="btns">
              <a
                className="resume"
                href={resume}
                style={{ textDecoration: "none", color: "black" }}
              >
                Resume <GrDocumentDownload />
              </a>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Hero;
