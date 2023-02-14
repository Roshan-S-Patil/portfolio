import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
import { useDataLayerValue } from "../datalayer/DataLayer";
import { motion } from "framer-motion";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Nav = () => {
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
  const [{ loggedIn }, dispatch] = useDataLayerValue();
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    try {
      localStorage.clear();
      document.getElementById("nav").style.display = "none";
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <motion.div className="nav" id="nav">
        <motion.h1
          className="roshan"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          Roshan Patil
        </motion.h1>
        {loggedIn ? (
          <motion.h1
            className="logout"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            onClick={logout}
          >
            Logout
          </motion.h1>
        ) : (
          <></>
        )}
      </motion.div>
    </>
  );
};

export default Nav;
