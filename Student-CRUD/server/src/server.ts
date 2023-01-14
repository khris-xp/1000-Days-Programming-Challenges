// import { Request, Response } from "express";
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT: string | number = process.env.PORT || 8000;
const Database: string = "mongodb://localhost:27017/student-db";

// Connect to mongoDB
mongoose.set("strictQuery", false);
mongoose.connect(Database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDb has be connected.");
});

mongoose.connection.on("error", (err: Error) => {
  console.log(`Mongoose connection error: ${err}`);
});

// Express
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
