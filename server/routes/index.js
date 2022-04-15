const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", userRoutes);

module.exports = router;
