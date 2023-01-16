const express = require("express");
const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middleware");

// controllers
const {
  uploadImage,
  removeImage,
  createCourse,
} = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignin, isInstructor, createCourse);

module.exports = router;
