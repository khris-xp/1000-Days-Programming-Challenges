const express = require("express");
const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middleware");

// controllers
const {
  uploadImage,
  removeImage,
  createCourse,
  readCourse,
} = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignin, isInstructor, createCourse);
router.get("/course/:slug", readCourse);
module.exports = router;
