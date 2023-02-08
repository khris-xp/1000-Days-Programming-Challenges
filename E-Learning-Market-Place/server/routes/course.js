const express = require("express");
const formidable = require("express-formidable");
const router = express.Router();

// middleware
const { requireSignin, isInstructor, isEnrolled } = require("../middleware");

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
  publishCourse,
  unpublishCourse,
  courses,
  checkEnrollment,
  freeEnrollment,
  paidEnrollment,
  stripeSuccess,
  userCourses,
  markCompleted,
  markIncompleted,
  listCompleted,
} = require("../controllers/course");

// Router Courses
router.get("/course", courses);

// Router Image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// Publish or Unpublish Course
router.put("/course/publish/:courseId", requireSignin, publishCourse);
router.put("/course/unpublish/:courseId", requireSignin, unpublishCourse);

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

// Enrollment
router.get("/check-enrollment/:courseId", requireSignin, checkEnrollment);
router.post("/free-enrollment/:courseId", requireSignin, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignin, paidEnrollment);
router.get("/stripe-success/:courseId", requireSignin, stripeSuccess);

// Courses
router.get("/user-courses", requireSignin, userCourses);
router.get("/course/:slug", requireSignin, isEnrolled, readCourse);

// Mark Completed
router.post("/mark-completed", requireSignin, markCompleted);
router.post("/list-completed", requireSignin, listCompleted);
router.post("/list-incompleted", requireSignin, markIncompleted);

module.exports = router;
