const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function authenticate(req, res, next) {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    token = token.split(" ")[1]; // if have bearer token in the token. then just simply remove it.
    const decoded = jwt.verify(token, "secret-key");

    const user = await User.findById(decoded._id);

    if (!user) {
      return res.status(401).json({ messae: "Unauthorized" });
    }

    //req.user = user;
    next();
  } catch (e) {
    return res.status(400).json({ message: "fuck token" });
  }
}

module.exports = authenticate;
