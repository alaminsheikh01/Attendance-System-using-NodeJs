const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerService = async () => {
  let user = await User.findOne({ email });
  if (user) {
    return res.status(400).json({ message: "user already exist" });
  }

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user.password = hash;

  await user.save();
};

const loginService = async () => {
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ messae: "Invalid Credential" });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ messaeg: "Invalid Credential" });
  }

  delete user._doc.password;

  const token = jwt.sign(user._doc, "secret-key", { expiresIn: "1h" });
};

module.exports = {
  registerService,
  loginService,
};
