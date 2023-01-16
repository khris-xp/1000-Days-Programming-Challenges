import axios from "axios";
import InstructorRoute from "../../components/routes/InstructorRoute";
import { useState, useEffect } from "react";

const InstructorIndex = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/instructors-course");
    setCourses(data);
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron square text-center bg-primary">
        Instructor Dashboard
      </h1>
      <pre>{JSON.stringify(courses, null, 4)}</pre>
    </InstructorRoute>
  );
};

export default InstructorIndex;
