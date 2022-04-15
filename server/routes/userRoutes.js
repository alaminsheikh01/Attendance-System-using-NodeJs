const router = require("express").Router();
const { getUsers } = require("../controller/userController");

router.get("/:userId", () => {});

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

/**
 * get all users, include
 * filter
 * sort
 * pagination
 * select properties
 * @route /api/v1/users?sort=['by','name']
 * @method GET
 * @visibility Private
 */

router.get("/", getUsers);

// create a new user

router.post("/", () => {});

/**
 * Get user by id or email
 */

module.exports = router;
