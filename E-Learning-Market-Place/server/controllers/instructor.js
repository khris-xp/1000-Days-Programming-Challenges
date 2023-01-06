const Users = require('../models/user');
const stripe = require('stripe');
const querystring = require('node:querystring');

const makeInstructor = async (req, res) => {
    try {
        const { user } = await Users.findById(req.user._id).exec();

        if (!user.stripe_account_id) {
            const account = await stripe.accounts.create({ type: "express" });
            user.stripe_account_id = account.id;
            user.save();
        }

        const accountLink = await stripe.accountLinks.create({
            account: user.stripe_account_id,
            refresh_url: process.env.STRIPE_REDIRECT_URL,
            return_url: process.env.STRIPE_REDIRECT_URL,
            type: "account_onboarding",
        });

        // console.log(accountLink);
        accountLink = Object.assign(accountLink, {
            "stripe_user[email]": user.email,
        });

        res.send(`${accountLink}?${querystring.stringify(accountLink)}`);
    } catch (err) {
        console.log("MAKE INSTRUCTOR ERROR ", err);
    };
};

module.exports = makeInstructor;