const Users = require("../models/user");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const querystring = require("node:querystring");

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

    // console.log("ACCOUNT : ", account);

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
      )
        .select("-password")
        .exec();
      res.json(statusUpdated);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { makeInstructor, getAccountStatus };
