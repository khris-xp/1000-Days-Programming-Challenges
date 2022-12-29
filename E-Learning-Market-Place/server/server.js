const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

require('dotenv').config();

const app = express();

// middleware
app.use(cors());
app.use(morgan());
app.use((req, res, next) => {
    console.log("This is middleware function");
    next();
})

// Route
fs.readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

// PORT
PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});
