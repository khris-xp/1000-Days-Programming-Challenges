import { useState, useEffect } from "react";
import Link from "next/link";

const InstructorNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser, window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills">
      <Link
        href="/instructor"
        className={`nav-link ${current === "/instructor" && "active"}`}
      >
        Dashboard
      </Link>
      <Link
        href="/instructor/course/create"
        className={`nav-link ${current === "/instructor/course/create" && "active"}`}
      >
        Create Course
      </Link>
    </div>
  );
};

export default InstructorNav;
