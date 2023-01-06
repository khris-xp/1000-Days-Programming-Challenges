const express = require('express');
const router = express.Router();

const requireSignin = require('../middleware/index');
const makeInstructor = require('../controllers/instructor');

router.post('/make-instructor', requireSignin, makeInstructor);

module.exports = router;