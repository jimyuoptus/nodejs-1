import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: String, required: true },
});

export const Book = mongoose.model("authors", authorSchema);
