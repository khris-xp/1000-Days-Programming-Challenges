import { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";

const Home = ({ course }) => {
  return (
    <>
      <h1 className="jumbotron square text-center">E Learning Marketplace</h1>
      <div className="container-fluid">
        <div className="row pt-2">
          {course.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.API}/course`);
  return {
    props: {
      course: data,
    },
  };
};

export default Home;
