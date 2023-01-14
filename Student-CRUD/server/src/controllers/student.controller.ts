import { Student } from "../models/students.model";
import { Request, Response } from "express";

const student = new Student();

export const getAll = async (req: Request, res: Response) => {
  req.headers;
  const students = await student.findAll();
  res.json(students);
};

export const getById = async (req: Request, res: Response) => {
  const result = await student.findById(req.params.id);
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await student.create(req.body);
  res.json(result);
};

export const update = async (req: Request, res: Response) => {
  const result = await student.update(req.params.id, req.body);
  res.json(result);
};

export const deleteById = async (req: Request, res: Response) => {
  await student.delete(req.params.id);
  res.json({ message: "Successfully deleted student" });
};
