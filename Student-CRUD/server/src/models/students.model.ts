import mongoose, { Model } from "mongoose";
import { StudentDocument } from "../interfaces/students.interface";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  class: String,
  gpa: Number,
  grade: String,
});

export class Student {
  private model: Model<StudentDocument>;

  constructor() {
    this.model = mongoose.model<StudentDocument>("Student", studentSchema);
  }

  async findAll(): Promise<StudentDocument[]> {
    return await this.model.find();
  }

  async findById(id: string): Promise<StudentDocument[] | null> {
    return await this.model.findById(id);
  }

  async create(student: StudentDocument): Promise<StudentDocument> {
    return await new this.model(student).save();
  }

  async update(
    id: string,
    student: StudentDocument
  ): Promise<StudentDocument[] | null> {
    return await this.model.findByIdAndUpdate(id, student, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.model.findByIdAndDelete(id);
  }
}
