const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test", {
    serverSelectionTimeoutMS: 1000,
  })

  .then(async () => {
    console.log("database conntected");
    await createUser({ name: "Alamin sheikh", email: "alamin@gmail.com" });
    await createUser({ name: "Alamin sheikh1", email: "alamin1@gmail.com" });
    mongoose.connection.close(true);
  })
  .catch((e) => {
    console.log(e);
  });

const Schema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("User", Schema);

async function createUser(data) {
  const user = new User({ ...data });
  await user.save();
  return user;
}
