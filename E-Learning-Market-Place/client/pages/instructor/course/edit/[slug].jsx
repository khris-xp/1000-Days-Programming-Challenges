import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import InstructorRoute from "../../../../components/routes/InstructorRoute";
import CourseCreateForm from "../../../../components/form/CourseCreateForm";
import Resizer from "react-image-file-resizer";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { List, Avatar } from "antd";
import Item from "antd/lib/list/Item";
import { DeleteOutlined } from "@ant-design/icons";

const editCourse = () => {
  // state
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "9.99",
    uploading: false,
    paid: true,
    category: "",
    loading: false,
    lessons: [],
  });
  const [image, setImage] = useState({});
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  // router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    loadCourse();
  }, [slug]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/course/${slug}`);
    setValues(data);
    if (data && data.image) {
      setImage(data.image);
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });
    // resize
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
        let { data } = await axios.post("/api/course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED", data);
        // set image in the state
        setImage(data);
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/course/${slug}`, {
        ...values,
        image,
      });
      toast.success("Course Updated.");
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  const handleRemoveVideo = async (e) => {
    try {
      const { data } = await axios.post(
        `/api/course/video-remove/${course.instructor._id}`,
        values.video
      );
      console.log(data);
      setUploading(false);
      setValues({ ...values, video: {} });
      setUploadButtonText("Upload another video.");
    } catch (err) {
      console.log(err);
      setUploading(false);
      toast.error("Video remove failed");
    }
  };

  const handleDrag = async (e, index) => {
    e.dataTransfer.setData("itemIndex", index);
  };

  const handleDrop = async (e, index) => {
    const movingItemIndex = e.dataTransfer.getData("itemIndex");
    const targetItemIndex = index;
    let alllessons = values.lessons;

    let movingItem = alllessons[movingItemIndex];
    alllessons.splice(movingItemIndex, 1);
    alllessons.splice(targetItemIndex, 0, movingItem);

    setValues({ ...values, lessons: [...alllessons] });

    const { data } = await axios.put(`/api/course/${slug}`, {
      ...values,
      image,
    });

    console.log("LESSONS REARRANGED : ", data);
    toast.success("Lessons rearranged successfully");
  };

  const handleDelete = async (index) => {
    const answer = window.confirm("Are you sure you want to delete ?");
    if (!answer) {
      return;
    }
    let alllessons = values.lessons;
    const removed = alllessons.splice(index, 1);
    setValues({ ...values, lessons: alllessons });

    const { data } = await axios.put(`/api/course/${slug}/${removed[0]._id}`);
    console.log("LESSONS DELETED : ", data);
  };

  return (
    <InstructorRoute>
      <h1 className="jumbotron text-center square">Update Course</h1>
      <div className="pt-3 pb-3">
        <CourseCreateForm
          handleSubmit={handleSubmit}
          handleImage={handleImage}
          handleChange={handleChange}
          values={values}
          setValues={setValues}
          preview={preview}
          uploadButtonText={uploadButtonText}
          handleRemoveVideo={handleRemoveVideo}
          editPage={true}
        />
      </div>

      <hr />
      {values && (
        <div className="row pb-5">
          <div className="col lesson-list">
            <h4>{values && values.lessons && values.lessons.length} Lessons</h4>
            <List
              onDragOver={(e) => e.preventDefault()}
              itemLayout="horizontal"
              dataSource={values && values.lessons}
              renderItem={(items, index) => (
                <Item
                  draggable
                  onDragStart={(e) => handleDrag(e, index)}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  <Item.Meta
                    avatar={<Avatar>{index + 1}</Avatar>}
                    title={items.title}
                  ></Item.Meta>

                  <DeleteOutlined
                    className="text-danger float-right"
                    onClick={() => handleDelete(index)}
                  />
                </Item>
              )}
            ></List>
          </div>
        </div>
      )}
    </InstructorRoute>
  );
};

export default editCourse;
