import { Student } from "../models/students.model";
import { Request, Response } from "express";
import { StudentDocument } from "../interfaces/students.interface";

const studentModel = new Student();

const getAllStudent = async (req: Request, res: Response) => {
  req.headers;
  const students = await studentModel.findAll();
  res.json(students);
};

const getStudentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await studentModel.findById(id);
  if (!student) {
    return res.status(500).json({ message: "Student not Found" });
  }
  res.json(student);
};

const createStudent = async (req: Request, res: Response) => {
  const { name, age, class: className, grade, gpa } = req.body;
  if (!name || !age || !className || !grade || !gpa) {
    return res.status(500).json({ message: "Missing required fields" });
  }
  try {
    const studentData: StudentDocument = req.body;
    const existingStudent = await studentModel.findByName(name);
    if (existingStudent) {
      return res
        .status(500)
        .json({ message: "Student with this name already exists" });
    }
    const result = await studentModel.create(studentData);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const student = await studentModel.findById(id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  try {
    const updatedStudent = await studentModel.update(id, req.body);
    res.json(updatedStudent);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStudent,
  getStudentById,
  createStudent,
  updateStudent,
};
