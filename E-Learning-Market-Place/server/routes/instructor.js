const express = require("express");
const router = express.Router();

const requireSignin = require("../middleware/index");
const {
  makeInstructor,
  getAccountStatus,
} = require("../controllers/instructor");

router.post("/make-instructor", requireSignin, makeInstructor);
router.post("/get-account-status", requireSignin, getAccountStatus);

module.exports = router;
