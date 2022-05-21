const router = require("express").Router();
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const authentic = require("../middleware/authenticate");

router.use("/api/v1/auth", authRoutes);
router.use("/api/v1/users", authentic, userRoutes);

module.exports = router;
