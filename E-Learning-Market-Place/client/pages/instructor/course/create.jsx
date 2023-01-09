import React from "react";
import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";

const createCourse = () => {
  return (
    <InstructorRoute>
      <div className="jumbotron square text-center bg-primary">
        <h1>Create Course</h1>
      </div>
    </InstructorRoute>
  );
};

export default createCourse;
