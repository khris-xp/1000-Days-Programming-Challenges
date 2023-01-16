import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import InstructorRoute from "../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../components/form/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const createCourse = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    imagePreview: "",
  });

  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Image Upload");

  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("Imaged Upload : ", data);
        setImage(data);
        setValues({ ...values, laoding: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast.error("Image upload failed. Try again later");
      }
    });
  };

  const handleImageRemove = async () => {
    try {
      setValues({ ...values, loading: true });
      let { res } = await axios.post("/api/course/remove-image", { image });
      setImage({});
      setPreview("");
      setUploadButtonText("Image Upload");
      setValues({ ...values, loading: false });
    } catch (err) {
      console.log(err);
      setValues({ ...values, loading: false });
      toast.error("Image upload failed. Try again later");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = axios.post("/api/course", {
        ...values,
        image,
      });
      toast.success("Great! Now you can start adding lessons");
      router.push("/instructor");
      res.json(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Create Course</h1>
      <CourseCreateForm
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        handleChange={handleChange}
        values={values}
        setValues={setValues}
        preview={preview}
        uploadButtonText={uploadButtonText}
        handleImageRemove={handleImageRemove}
      />
      <pre>{JSON.stringify(values, null, 4)}</pre>
      <hr />
      <pre>{JSON.stringify(image, null, 4)}</pre>
    </InstructorRoute>
  );
};

export default createCourse;
