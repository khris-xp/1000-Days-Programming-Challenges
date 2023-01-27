const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

// middleware
const { requireSignin, isInstructor } = require("../middleware");

// Comtrollers
const {
  uploadImage,
  removeImage,
  createCourse,
  readCourse,
  updateCourse,
  uploadVideo,
  removeVideo,
  createLesson,
  updateLesson,
  deleteLesson,
} = require("../controllers/course");

// Router Image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// Router Course
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
router.post("/course/lesson/:slug/:instructorId", requireSignin, createLesson);
router.put("/course/:slug/:lessonId", requireSignin, deleteLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignin, updateLesson);
module.exports = router;
