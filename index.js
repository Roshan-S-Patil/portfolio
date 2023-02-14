const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const feedbackRoute = require("./feedbackRoute");
const path = require("path");
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.json({ home: "home" });
});
app.use("/feedback", feedbackRoute);
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

//static file
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.listen(port, () => {
  console.log("connected");
});
