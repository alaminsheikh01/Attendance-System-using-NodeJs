const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const obj = {
    name: "Alamin",
    email: "alamin@gmail.com",
  };
  res.json(obj);
});

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});
