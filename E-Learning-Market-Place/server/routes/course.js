const express = require("express");

const router = express.Router();

const requireSignin = require("../middleware/index");
const { uploadImage, removeImage } = require("../controllers/course");

router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

module.exports = router;
