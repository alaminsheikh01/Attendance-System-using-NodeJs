const express = require("express");
const connectDB = require("./db");
const bcrypt = require("bcryptjs");

//import model
const User = require("./models/User");

const app = express();

// middleware
app.use(express.json());

// route
app.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "invalid data" });
  }

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    user = new User({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user.password = hash;

    await user.save();
    return res.status(201).json({ message: "User created success", user });
  } catch (e) {
    next(e);
  }
});

app.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ messae: "Invalid Credential" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ messaeg: "Invalid Credential" });
    }

    delete user.password;

    return res.status(200).json({ messae: "Login Successful" });
  } catch (e) {
    next(e);
  }
});

app.get("/", (_, res) => {
  const obj = {
    name: "Alamin",
    email: "alamin@gmail.com",
  };
  res.json(obj);
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
