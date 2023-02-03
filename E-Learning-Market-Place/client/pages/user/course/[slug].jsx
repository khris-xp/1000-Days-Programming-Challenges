import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";

const SingleCourse = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });

  // Router
  const router = useRouter();
  const { slug } = router.query;

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setCourse(data);
  };

  useEffect(() => {
    if (slug) {
      loadCourse();
    }
  }, [slug]);

  return (
    <StudentRoute>
      <div>{JSON.stringify(course, null, 4)}</div>
    </StudentRoute>
  );
};

export default SingleCourse;
