import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";
import shinchan from "./shinchan.gif";
import { useNavigate } from "react-router-dom";
import { useDataLayerValue } from "../datalayer/DataLayer";

const Intro = () => {
  const navigate = useNavigate();
  const localUser = JSON.parse(localStorage?.getItem("user"));
  const localUserPhoto = localUser?.photoURL;
  const [{ clicked, loggedIn }, dispatch] = useDataLayerValue();
  const afterClick = () => {
    const container = document.getElementById("container");
    const intro = document.getElementById("intro");
    container.style.backgroundColor = "black";
    intro.style.transform = `translateY(-100vh)`;
    intro.style.transition = "all ease-in";
    container.style.transition = "all ease-in";
    intro.style.transitionDuration = "500ms";
    container.style.transitionDuration = "500ms";
    setTimeout(() => {
      navigate("/home");
    }, 750);
  };

  return (
    <div className="container" id="container">
      <motion.div className="intro" id="intro">
        {loggedIn ? (
          <>
            <img src={localUserPhoto} alt="..." className="user-dp" />
            <h1>WELCOME </h1>
            <h1 className="user-name">{localUser.displayName}</h1>
          </>
        ) : (
          <>
            <h1>WELCOME</h1>
          </>
        )}
        <motion.div className="click-me">
          <h1>CLICK</h1>
          <motion.img src={shinchan} alt="shinchan" onClick={afterClick} />
          <h1>ME</h1>
        </motion.div>
        {loggedIn ? (
          <></>
        ) : (
          <>
            <p>
              Visit this site on PC To Experience Personalised Welcome Screen
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Intro;
