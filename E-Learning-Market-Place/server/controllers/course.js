const AWS = require("aws-sdk");
var { nanoid: ID, nanoid } = require("nanoid");
const Course = require("../models/course");
const slugify = require("slugify");
const fs = require("fs");
const User = require("../models/user");

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION,
};

const S3 = new AWS.S3(awsConfig);

const uploadImage = async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).send("No Image");
    }

    const base64Data = new Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );

    const type = image.split(";")[0].split("/")[1];

    const params = {
      Bucket: "e-learning-marketplace-bucket",
      Key: `${nanoid()}.${type}`,
      Body: base64Data,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${type}`,
    };

    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        return res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

const removeImage = async (req, res) => {
  try {
    const { image } = req.body;
    const params = {
      Bucket: image.Bucket,
      Key: image.Key,
    };

    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      res.send({ ok: true });
    });
  } catch (err) {
    console.log(err);
  }
};

const createCourse = async (req, res) => {
  try {
    const alreadyExist = await Course.findOne({
      slug: slugify(req.body.name.toLowerCase()),
    });
    if (alreadyExist) return res.status(400).send("Title is taken");

    const course = await new Course({
      slug: slugify(req.body.name),
      instructor: req.user._id,
      ...req.body,
    }).save();

    res.json(course);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Course create failed. Try again.");
  }
};

const readCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug })
      .populate("instructor", "_id name")
      .exec();
    res.json(course);
  } catch (err) {
    console.log(err);
  }
};

const updateCourse = async (req, res) => {
  try {
    const { slug } = req.params;

    const course = await Course.findOne({ slug }).exec();

    if (req.user._id != course.instructor) {
      return res.status(400).send("Unauthorized");
    }

    const { updated } = await Course.findOneAndUpdate({ slug }, req.body, {
      new: true,
    }).exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.messages);
  }
};

const uploadVideo = async (req, res) => {
  try {
    if (req.user._id !== req.params.instructorId) {
      return res.status(400).send("Unauthorized");
    }

    const { video } = req.files;
    if (!video) {
      return res.status(400).send("No Video");
    }

    const params = {
      Bucket: "e-learning-marketplace-bucket",
      Key: `${nanoid()}.${video.type.split("/")[1]}`,
      Body: fs.readFileSync(video.path),
      ACL: "public-read",
      CuurentType: video.type,
    };

    S3.upload(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

const removeVideo = async (req, res) => {
  try {
    if (req.user._id !== req.params.instructorId) {
      return res.status(400).send("Unauthorized");
    }
    const { Bucket, Key } = req.body;

    const params = {
      Bucket,
      Key,
    };

    S3.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      }
      console.log(data);
      res.send(data);
    });
  } catch (err) {
    console.log(err);
  }
};

const createLesson = async (req, res) => {
  try {
    const { slug, instructorId } = req.params;
    const { title, content, video } = req.body;

    if (req.user._id !== instructorId) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findOneAndUpdate(
      { slug },
      {
        $push: { lessons: { title, content, video, slug: slugify(title) } },
      },
      { new: true }
    )
      .populate("instructor", "_id name")
      .exec();

    res.json(updated);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};

const updateLesson = async (req, res) => {
  try {
    const { slug } = req.params;
    const { _id, title, content, video, free_preview } = req.body;
    const course = await Course.findOne({ slug }).select("instructor").exec();

    if (req.user._id != course.instructor._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.updateOne(
      { "lessons._id": _id },
      {
        $set: {
          "lessons.$.title": title,
          "lessons.$.content": content,
          "lessons.$.video": video,
          "lessons.$.free_preview": free_preview,
        },
      },
      { new: true }
    ).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.messages);
  }
};

const deleteLesson = async (req, res) => {
  try {
    const { slug, lessonId } = req.params;
    const course = await Course.findOne({ slug }).exec();

    if (req.user._id != course.instructor._id) {
      return res.status(400).send("Unauthorized");
    }

    const deletedCourse = await Course.findByIdAndUpdate(course._id, {
      $pull: { lessons: { _id: lessonId } },
    }).exec();

    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send(err.messages);
  }
};

const publishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select("instructor").exec();

    if (req.user._id != course.instructor._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      {
        published: true,
      },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Publish course failed");
  }
};

const unpublishCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findById(courseId).select("instructor").exec();

    if (req.user._id != course.instructor._id) {
      return res.status(400).send("Unauthorized");
    }

    const updated = await Course.findByIdAndUpdate(
      courseId,
      {
        published: false,
      },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    return res.status(400).send("Unpublish course failed");
  }
};

const courses = async (req, res) => {
  const allCourses = await Course.find({ published: true })
    .populate("instructor", "_id name")
    .exec();
  res.json(allCourses);
};

const checkEnrollment = async (req, res) => {
  const { courseId } = req.params;
  const user = await User.findById(req.user._id).exec();
  let ids = [];
  let length = user.courses && user.courses.length;
  for (let i = 0; i < length; i++) {
    ids.push(user.courses[i].toString());
  }
  res.json({
    status: ids.includes(courseId),
    course: await Course.findById(courseId).exec(),
  });
};

module.exports = {
  uploadImage,
  removeImage,
  createCourse,
  readCourse,
  updateCourse,
  uploadVideo,
  removeVideo,
  createLesson,
  updateLesson,
  deleteLesson,
  publishCourse,
  unpublishCourse,
  courses,
  checkEnrollment,
};
