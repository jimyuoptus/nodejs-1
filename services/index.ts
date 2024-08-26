import mongoose from "mongoose";
import { app } from "./app";

const port = 3001;
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
