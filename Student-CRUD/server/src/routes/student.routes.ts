import express, { Router } from "express";
const {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
} = require("../controllers/student.controller");

const router: Router = express.Router();

router.get("/", getAllStudent);
router.get("/:id", getStudentById);
router.post("/create-student", createStudent);
router.put("/update-student/:id", updateStudent);

export default router;
