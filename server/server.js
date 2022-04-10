const express = require("express");
const connectDB = require("./db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//import custom controller
const {
  loginController,
  registerController,
} = require("./controller/authController");

// import custom middleware
const authenticate = require("./middleware/authenticate");

//import model
const User = require("./models/User");

const app = express();

// middleware
app.use(express.json());

// route
app.post("/register", registerController);

app.post("/login", loginController);

app.get("/private", authenticate, async (req, res) => {
  console.log("i am from user", req.user);
  return res.status(200).json({ message: "I am a private route." });
});
app.get("/public", (req, res) => {
  return res.status(200).json({ message: "I am a private route." });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ messae: "Server Error Occured" });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("I am listening on port 3000");
    });
  })
  .catch((e) => console.log(e));
