import mongoose from "mongoose";

import { app } from "./app";
require("dotenv").config();

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.error(err);
  }

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
};

start();
