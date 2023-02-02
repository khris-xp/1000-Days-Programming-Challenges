import { useRouter } from "next/router";

const SignleCourse = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Course slug is : {JSON.stringify(router.query.slug)}</h1>
    </div>
  );
};

export default SignleCourse;
