import { Badge } from "antd";
import currencyFormatter from "../../utils/helpers";
import Image from "next/image";

const SingleCourseJumbotron = ({ course }) => {
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
    <>
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
            {lessons[0].video && lessons[0].video.Location ? (
              <div>
                <video loop controls height={225} className="react-player-div">
                  <source src={lessons[0].video.Location} />
                </video>
              </div>
            ) : (
              <Image
                src={image.Location}
                height={200}
                width={100}
                alt={name}
                className="img-fluid img"
              />
            )}
            <p>Enroll</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default SingleCourseJumbotron;
