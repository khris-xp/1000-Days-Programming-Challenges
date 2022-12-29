const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
    console.log("This is middleware function");
    next();
})

// Route
fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// Connect to Database
const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        throw err;
    }
    console.log(`Connect to mongoDB`);
})

// PORT
PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});
