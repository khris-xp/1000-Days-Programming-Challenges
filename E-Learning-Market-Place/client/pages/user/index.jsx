import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";

const UserIndex = () => {
  // state
  const {
    state: { user },
  } = useContext(Context);

  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    const { data } = await axios.get("/api/user-courses");
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <UserRoute>
      <h1 className="jumbotron text-center square">User Dashboard</h1>
      <div>{JSON.stringify(courses, null, 4)}</div>
    </UserRoute>
  );
};

export default UserIndex;
