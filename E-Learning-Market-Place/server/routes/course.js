const express = require("express");

const router = express.Router();

const requireSignin = require("../middleware/index");
const { uploadImage } = require("../controllers/course");

router.post("/course/upload-image", uploadImage);

module.exports = router;
