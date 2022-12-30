const Users = require('../models/user');
const { hashPassword, comparsePassword } = require('../utils/auth');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { name, email, password } = req.body;
        // validation
        if (!name) return res.status(400).send("Name is required");
        if (!password || password.length < 6) {
            return res
                .status(400)
                .send("Password is required and should be min 6 characters long");
        }
        let userExist = await Users.findOne({ email }).exec();
        if (userExist) return res.status(400).send("Email is taken");

        // hash password
        const hashedPassword = await hashPassword(password);

        // register
        const user = new Users({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();
        // console.log("saved user", user);
        return res.json({ ok: true });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // let userExist = await Users.findOne({ email }).exec();
        const user = await Users.findOne({ email }).exec();
        if (!email) {
            return res.status(400).send("No User Found");
        }

        const match = comparsePassword(password, user.password);

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        user.password = undefined;
        res.cookie("token", token, {
            httpOnly: true
        });

        res.json(user);

    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try Again.");
    }
}

module.exports = { register, login };