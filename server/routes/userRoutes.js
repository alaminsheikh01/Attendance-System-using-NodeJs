const router = require("express").Router();
const Ucontroller = require("../controller/userController");

router.get("/:userId", Ucontroller.getUserById);

/**
 * Update user by Id
 * @method PUT
 */

router.put("/:userId", () => {});

/**
 * Update user by Id
 * @method PATCH
 */

router.patch("/:userId", () => {});

/**
 * delete user
 */
router.delete("/:userId", () => {});

router.get("/", Ucontroller.getUsers);

// create a new user

router.post("/", () => {});

/**
 * Get user by id or email
 */

module.exports = router;
