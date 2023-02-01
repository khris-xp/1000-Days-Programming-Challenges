import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLesson from "../../components/cards/SIngleCourseComponent";
import { Context } from "../../context/index";
import toast from "react-toastify";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});

  const {
    state: { user },
  } = useContext(Context);

  useEffect(() => {
    if (user && course) {
      checkEnrollment();
    }
  }, [user, course]);

  const checkEnrollment = async () => {
    const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
    console.log("CHECK ENROLLMENT", data);
    setEnrolled(data);
  };

  const handlePaidEnrollment = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(`/api/free-enrollment/${course._id}`);
      toast.success(data.message);
    } catch (err) {
      toast.error("Enrollment failed. Try again");
      console.log(err);
      setLoading(false);
    }
  };

  const handleFreeEnrollment = () => {
    console.log("Handle Free Enrollment");
  };

  return (
    <>
      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
        user={user}
        loading={loading}
        handleFreeEnrollment={handleFreeEnrollment}
        handlePaidEnrollment={handlePaidEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}
      />
      <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />

      {course.lessons && (
        <SingleCourseLesson
          lessons={course.lessons}
          setPreview={setPreview}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { data } = await axios.get(`${process.env.API}/course/${query.slug}`);
  return {
    props: {
      course: data,
    },
  };
};

export default SingleCourse;
