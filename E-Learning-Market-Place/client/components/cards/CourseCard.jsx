import { Card, Badge } from "antd";
import Link from "next/link";
import Image from "next/image";
import currencyFormatter from "../../utils/helpers";
const { Meta } = Card;

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course;
  return (
    <>
      <Link href={`/course/${slug}`}>
          <Card
            className="mb-4"
            cover={
              <Image
                src={image.Location}
                alt={name}
                style={{ objectFit: "cover" }}
                height={200}
                width={100}
                className="p-1"
              />
            }
          >
            <h2 className="font-weight-bold">{name}</h2>
            <p>By {instructor.name}</p>
            <Badge
              count={category}
              style={{ backgroundColor: "#0ea9f4" }}
              className="pb-2 mr-2"
            />
            <h4 className="pt-2" suppressHydrationWarning>
              {paid
                ? `${currencyFormatter({ amount: price, currency: "usd" })}`
                : "Free"}
            </h4>
          </Card>
        </Link>
    </>
  );
};

export default CourseCard;
