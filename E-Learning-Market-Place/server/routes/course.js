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
  deleteCourse,
} = require("../controllers/course");

// image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignin, isInstructor, createCourse);
router.get("/course/:slug", readCourse);
router.put("/course/:slug", requireSignin, updateCourse);
router.put("/course/:slug/:lessonId", requireSignin, deleteCourse);
router.post(
  "/course/video-upload/:instructorId",
  requireSignin,
  formidable(),
  uploadVideo
);
router.post("/course/video-remove/:instructorId", requireSignin, removeVideo);
router.post("/course/lesson/:slug/:instructorId", requireSignin, addLesson);
module.exports = router;
