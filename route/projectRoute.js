const { authentication } = require("../controller/authController");
const { store } = require("../controller/projectController");

const router = require("express").Router();

router.route("/").post(authentication, store);

module.exports = router;
