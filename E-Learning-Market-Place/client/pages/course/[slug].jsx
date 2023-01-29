import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  const [showModal, setShowModal] = useState(false);
  const [preview, setPreview] = useState("");

  return (
    <>
      <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />
      <PreviewModal
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview}
      />
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
