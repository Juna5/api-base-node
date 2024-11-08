const { authentication, restrictTo } = require("../controller/authController");
const {
    store,
    getAllProject,
    getProjectById,
    update,
    deleteProject,
} = require("../controller/projectController");

const router = require("express").Router();

router
    .route("/")
    .get(authentication, getAllProject)
    .post(authentication, restrictTo("1"), store);

router
    .route("/:id")
    .get(authentication, getProjectById)
    .patch(authentication, update)
    .delete(authentication, deleteProject);

module.exports = router;
