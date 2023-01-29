import axios from "axios";
import { useRouter } from "next/router";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <pre>{JSON.stringify(course, null, 4)}</pre>
        </div>
      </div>
    </div>
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
