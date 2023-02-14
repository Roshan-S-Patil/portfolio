import React, { useEffect, useState } from "react";
import "./Work.css";
import { useDataLayerValue } from "../datalayer/DataLayer";
import { motion, spring } from "framer-motion";

const Work = () => {
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
  const [{ clicked }, dispatch] = useDataLayerValue();
  useEffect(() => {
    document.querySelectorAll(".work-head").forEach((wh) => {
      wh.addEventListener("touchstart", (e) => {
        wh.classList.add("md");
        wh.style.transition = "300ms";
      });
    });

    document.querySelectorAll(".work-head").forEach((wh) => {
      wh.addEventListener("touchmove", (e) => {
        wh.classList.remove("md");
        wh.classList.add("mm");
      });
    });
    document.querySelectorAll(".work-head").forEach((wh) => {
      wh.addEventListener("touchend", (e) => {
        wh.classList.remove("md");
        wh.classList.remove("mm");
      });
    });
  });

  return (
    <>
      <motion.div className="work">
        <motion.div className="head-box">
          <motion.h1 className="work-head">
            <motion.span>
              <motion.h1
                className="work-head"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                BE MY
              </motion.h1>
            </motion.span>

            <motion.span>
              <motion.h1
                className="work-head"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                ANGEL
              </motion.h1>
            </motion.span>
            <motion.span>
              <motion.h1
                className="work-head"
                variants={variants}
                initial="hidden"
                whileInView="visible"
              >
                RECRUITER
              </motion.h1>
            </motion.span>
          </motion.h1>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Work;
