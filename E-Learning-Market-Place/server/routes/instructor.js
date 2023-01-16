const express = require("express");
const router = express.Router();

const { requireSignin } = require("../middleware/index");
const {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instructorCourses,
} = require("../controllers/instructor");

router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);
router.get("/current-instructor", requireSignin, currentInstructor);
router.get("/instructors-course", requireSignin, instructorCourses);

module.exports = router;
