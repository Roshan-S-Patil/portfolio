import React, { useEffect, useState } from "react";
import "./Contact.css";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useDataLayerValue } from "../datalayer/DataLayer";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
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
  const localUser = JSON.parse(localStorage.getItem("user"));
  const [{ clicked }, dispatch] = useDataLayerValue();
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });
  const changeFeedback = (e) => {
    e.preventDefault();
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    const { name, email, message } = feedback;

    const data = await axios.post("/feedback/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      name,
      email,
      message,
    });
    try {
      setFeedbackSent(true);
      resetForm();
    } catch (err) {
      console.log("error" + err);
    }
  };
  const resetForm = () => {
    setFeedback({ name: "", email: "", message: "" });
  };
  return (
    <>
      <motion.div className="contact" id="contact">
        <motion.h1 variants={variants} initial="hidden" whileInView="visible">
          Contact
        </motion.h1>
        <div className="social-links">
          <motion.button
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="submit"
            style={{
              backgroundColor: "black",
              color: "rgb(243, 74, 130)",
            }}
          >
            <BsLinkedin />
            <a
              href="http://www.linkedin.com/in/roshanspatil"
              style={{
                color: "rgb(243, 74, 130)",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
          </motion.button>
          <motion.button
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="submit"
            style={{
              backgroundColor: "black",
              color: "rgb(243, 74, 130)",
            }}
          >
            <MdEmail />
            <a
              href="mailto:patilroshan450@gmail.com"
              style={{
                color: "rgb(243, 74, 130)",
                textDecoration: "none",
              }}
            >
              Email
            </a>
          </motion.button>
        </div>
        <motion.form
          method="POST"
          onSubmit={submit}
          className="form"
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.input
            type="text"
            placeholder="Name"
            name="name"
            className="input"
            value={feedback.name}
            onChange={changeFeedback}
          />
          <motion.input
            type="email"
            placeholder="Email"
            name="email"
            className="input"
            value={feedback.email}
            onChange={changeFeedback}
          />
          <motion.textarea
            name="message"
            cols="30"
            rows="5"
            className="input"
            placeholder="Message"
            value={feedback.message}
            onChange={changeFeedback}
          ></motion.textarea>
          <motion.button type="submit" className="submit">
            Submit
          </motion.button>
        </motion.form>
        {feedbackSent ? <p>Sent Successfully</p> : <></>}
      </motion.div>
    </>
  );
};

export default Contact;
