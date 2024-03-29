const Users = require("../models/user");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const querystring = require("node:querystring");
const Courses = require("../models/course");

const makeInstructor = async (req, res) => {
  try {
    const user = await Users.findById(req.user._id).exec();

    if (!user.stripe_account_id) {
      const account = await stripe.accounts.create({ type: "express" });
      user.stripe_account_id = account.id;
      user.save();
    }

    let accountLink = await stripe.accountLinks.create({
      account: user.stripe_account_id,
      refresh_url: process.env.STRIPE_REDIRECT_URL,
      return_url: process.env.STRIPE_REDIRECT_URL,
      type: "account_onboarding",
    });

    // console.log(accountLink);
    accountLink = Object.assign(accountLink, {
      "stripe_user[email]": user.email,
    });

    res.send(`${accountLink.url}?${querystring.stringify(accountLink)}`);
  } catch (err) {
    console.log("MAKE INSTRUCTOR ERROR ", err);
  }
};

const getAccountStatus = async (req, res) => {
  try {
    const user = await Users.findById(req.user._id).exec();
    const account = await stripe.accounts.retrieve(user.stripe_account_id);

    if (!account.charges_enabled) {
      return res.status(400).send("Unauthorized");
    } else {
      const statusUpdated = await Users.findByIdAndUpdate(
        user._id,
        {
          stripe_seller: account,
          $addToSet: { role: "Instructor" },
        },
        { new: true }
      ).exec();
      res.json(statusUpdated);
    }
  } catch (err) {
    console.log(err);
  }
};

const currentInstructor = async (req, res) => {
  try {
    let user = await Users.findById(req.user._id).select("-password").exec();
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      res.json({ ok: true });
    }
  } catch (err) {
    console.log(err);
  }
};

const instructorCourses = async (req, res) => {
  try {
    const courses = await Courses.find({ instructor: req.user._id })
      .sort({
        createdAt: -1,
      })
      .exec();
    res.json(courses);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instructorCourses,
};
