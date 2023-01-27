const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middleware");

// controllers
const {
  uploadImage,
  removeImage,
  createCourse,
  readCourse,
  updateCourse,
  uploadVideo,
  removeVideo,
  addLesson,
  removeLesson,
  updatedLesson,
} = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignin, isInstructor, createCourse);
router.get("/course/:slug", readCourse);
router.put("/course/:slug", requireSignin, updateCourse);
router.post(
  "/course/video-upload/:instructorId",
  requireSignin,
  formidable(),
  uploadVideo
);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);

// Router Lesson
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
router.put("/course/:slug/:lessonId", requireSignin, removeLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updatedLesson);
module.exports = router;
