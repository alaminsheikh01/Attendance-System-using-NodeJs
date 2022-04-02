const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    serverSelectionTimeoutMS: 1000,
  })

  .then(() => {
    console.log("database conntected");
  })
  .catch((e) => {
    console.log(e);
  });
