import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <SingleCourseJumbotron course={course} />
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
