import { Badge } from "antd";
import currencyFormatter from "../../utils/helpers";
import Image from "next/image";
import PlayCircleFilled from "@ant-design/icons";

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
}) => {
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
              <div
                style={{
                  backgroundImage: "url(" + image.Location + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  marginBottom: "25px",
                }}
                className="d-flex justify-content-center"
                onClick={() => {
                  setPreview(lessons[0].video.Location);
                  setShowModal(!showModal);
                }}
              >
                <PlayCircleFilled
                  className="align-self-center display-4 text-light"
                  style={{ padding: "90px 90px 90px 90px" }}
                />
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
