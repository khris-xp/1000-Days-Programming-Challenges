import { Document } from "mongoose";

export interface StudentDocument extends Document {
  name: string;
  age: number;
  class: string;
  gpa: number;
  grade: number;
}
