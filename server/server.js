const express = require("express");
const connectDB = require("./db");

const app = express();
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "invalid data" });
  }
});

app.get("/", (_, res) => {
  const obj = {
    name: "Alamin",
    email: "alamin@gmail.com",
  };
  res.json(obj);
});

connectDB("mongodb://localhost:27017/attendance-db")
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("I am listening on port 3000");
    });
  })
  .catch((e) => console.log(e));
