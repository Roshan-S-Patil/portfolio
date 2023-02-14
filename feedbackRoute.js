require("./feedbackSchema");
const express = require("express");
const feedbackSchema = require("./feedbackSchema");
const { response } = require("express");
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const feedback = await feedbackSchema.find();
    res.json(feedback);
  } catch (error) {
    res.json({ message: "error found" });
    console.log(error);
  }
});
router.post("/post", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(422).json("please fill required fields");
  }
  const feedback = new feedbackSchema({
    name,
    email,
    message,
  });
  const savedFeedback = await feedback.save();
  try {
    res.status(201).json(savedFeedback);
  } catch (error) {
    console.log(error);
    res.json({ messages: "error found" });
  }
});
module.exports = router;
