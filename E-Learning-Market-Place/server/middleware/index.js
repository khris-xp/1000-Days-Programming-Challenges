const expressJwt = require("express-jwt");
const Users = require("../models/user");

const requireSignin = expressJwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

const isInstructor = async (req, res, next) => {
  try {
    const user = await Users.findById(req.user._id).exec();
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { requireSignin, isInstructor };
