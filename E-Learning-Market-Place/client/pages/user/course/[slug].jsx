import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleCourse = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });

  // Router
  const router = useRouter();
  const { slug } = router.query;

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/${slug}`);
    setCourse(data);
  };

  useEffect(() => {
    if (slug) {
      loadCourse();
    }
  }, [slug]);

  return (
    <div>
      <h1>{JSON.stringify(course, null, 4)}</h1>
    </div>
  );
};

export default SingleCourse;
