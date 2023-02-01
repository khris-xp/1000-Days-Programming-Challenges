import { Badge, Modal, Button } from "antd";
import currencyFormatter from "../../utils/helpers";
import Image from "next/image";
import PlayCircleFilled, {
  LoadingOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  user,
  loading,
  handleFreeEnrollment,
  handlePaidEnrollment,
  enrolled,
  setEnrolled,
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
                  width: "100%",
                  height: "225px",
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
            {loading ? (
              <div className="d-flex justify-content-center">
                <LoadingOutlined className="h1 text-danger" />
              </div>
            ) : (
              <Button
                className="mb-3"
                type="danger"
                block
                shape="round"
                icon={<SafetyOutlined />}
                size="large"
                disabled={loading}
                onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
              >
                {user
                  ? enrolled.status
                    ? "Go to Course"
                    : "Enroll"
                  : "Login to Enroll"}
              </Button>
            )}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default SingleCourseJumbotron;
