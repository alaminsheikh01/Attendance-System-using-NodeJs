const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByProperty, createNewUser } = require("./userService");

const registerService = async ({ name, email, password }) => {
  let user = await findUserByProperty("email", email);
  if (user) {
    // return res.status(400).json({ message: "user already exist" });
    const error = new Error("User already exist");
    error.status = 400;
    throw error;
  }

  user = new User({ name, email, password });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  createNewUser({ name, email, password: hash });
};

const loginService = async ({ email, password }) => {
  const user = await findUserByProperty("email", email);
  if (!user) {
    const error = new Error("Invalid Credential");
    error.status = 400;
    throw error;
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const error = new Error("Invalid Credential");
    error.status = 400;
    throw error;
  }
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    roles: user.roles,
    accountStatus: user.accountStatus,
  };
  return jwt.sign(payload, "secret-key", { expiresIn: "1h" });
};

module.exports = {
  registerService,
  loginService,
};
