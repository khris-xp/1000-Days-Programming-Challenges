const express = require("express");
const router = express.Router();

// controllers
const {
  register,
  login,
  logout,
  currentUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

// middleware
const { requireSignin } = require("../middleware");

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
