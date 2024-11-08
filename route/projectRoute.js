const { authentication, restrictTo } = require("../controller/authController");
const { store } = require("../controller/projectController");

const router = require("express").Router();

router.route("/").post(authentication, restrictTo("1"), store);

module.exports = router;
