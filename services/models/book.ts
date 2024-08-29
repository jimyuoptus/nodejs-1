import mongoose, { ObjectId } from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, require: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    author_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toString(),
        delete ret.author_id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export const Book = mongoose.model("books", bookSchema);
