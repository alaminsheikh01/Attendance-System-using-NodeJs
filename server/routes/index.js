const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const private = require("../middleware/authenticate");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", private, userRoutes);

module.exports = router;
