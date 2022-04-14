const router = require("express").Router();

router.get("/:userId", () => {});

/**
 * Update user by Id
 * @method PUT
 */

router.put("/:userId", () => {});

/**
 * delete user
 */
router.patch("/:userId", () => {});

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

router.get("/", () => {});

// create a new user

router.post("/", () => {});

/**
 * Get user by id or email
 */

module.exports = router;
