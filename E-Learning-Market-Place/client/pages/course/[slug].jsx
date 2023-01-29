import axios from "axios";
import { useRouter } from "next/router";
import { Badge } from "antd";
import { currencyFormatter } from "../../utils/helpers";

const SingleCourse = ({ course }) => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course;

  return (
    <div>
      <div className="jumbotron bg-primary square">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-light font-weight-bold">{name}</h1>
            <p className="lead">
              {description && description.substring(0, 160)}...
            </p>
            <Badge
              count={category}
              style={{ backgroundColor: "#03a9f4" }}
              className="pb-4 mr-2"
            />
            <p>Created By {instructor.name}</p>
            <p suppressHydrationWarning>
              Last updated {new Date(updatedAt).toLocaleDateString()}
            </p>
            <h4 className="text-light" suppressHydrationWarning>
              {paid
                ? `${currencyFormatter({ amount: price, currency: "usd" })}`
                : "Free"}
            </h4>
          </div>
          <div className="col-md-4">
            <p>Show Course Image</p>
            <p>Enroll</p>
          </div>
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
