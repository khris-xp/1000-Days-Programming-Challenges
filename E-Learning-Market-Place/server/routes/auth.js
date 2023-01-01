const express = require('express');

const router = express.Router();

// controllers
const { register, login, logout, currentUser } = require('../controllers/auth');

// middleware
const requireSignin = require('../middleware');

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignin, currentUser);

module.exports = router;