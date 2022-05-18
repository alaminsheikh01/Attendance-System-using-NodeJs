const express = require("express");
const connectDB = require("./db");

// routes
const routes = require("./routes");

// import custom middleware
const authenticate = require("./middleware/authenticate");

const app = express();

// middleware
app.use(express.json());
app.use(routes);

// route

app.get("/private", authenticate, async (req, res) => {
  console.log("i am from user", req.user);
  return res.status(200).json({ message: "I am a private route." });
});
app.get("/public", (req, res) => {
  return res.status(200).json({ message: "I am a private route." });
});

app.use((err, req, res, next) => {
  console.log(err);
  const message = err.message ? err.message : "Server Error Occurred";
  const status = err.status ? err.status : 500;
  res.status(status).json({
    message,
  });
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("I am listening on port 3000");
    });
  })
  .catch((e) => console.log(e));

//again start from 5.18.22
