const Users = require('../models/user');
const { hashPassword, comparePassword } = require('../utils/auth');
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');

const awsConfig = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    apiVersion: process.env.AWS_API_VERSION,
}

const SES = new AWS.SES(awsConfig);

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

        const user = await Users.findOne({ email }).exec();
        if (!email) {
            return res.status(400).send("No User Found");
        }

        const match = await comparePassword(password, user.password);

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

const logout = async (req, res) => {
    try {
        res.clearCookie("token");
        res.json({ msg: "Signout Success" });
    } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try Again.");
    }
}

const currentUser = async (req, res) => {
    try {
        const user = await Users.findById(req.user.id).select("-password").exec();
        console.log("CURRENT_USER", user);
        return res.json(user);
    } catch (err) {
        console.log(err);
    }
};

const sendTestEmail = async (req, res) => {
    // console.log('send email on using aws');
    // res.json({ 'ok': true });

    const params = {
        Source: process.env.EMAIL_FROM,
        Destination: {
            ToAddresses: ['khrisbharmmano121@gmail.com']
        },
        ReplyToAddresses: [process.env.EMAIL_FROM],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: `
                        <html>
                            <h1>Reset Password link</h1>
                            <p>Please use the following link to reset your password</p>
                        </html>
                    `
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Password reset link",
            }
        }
    };

    const emailSent = SES.sendEmail(params).promise();

    emailSent
        .then((data) => {
            console.log(data)
            res.json({ 'ok': true });
        })
        .catch(err => {
            console.log(err);
        })
}

module.exports = { register, login, logout, currentUser, sendTestEmail };