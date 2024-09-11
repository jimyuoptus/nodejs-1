import mongoose, { ObjectId } from "mongoose";
import { BookAttrs } from "../../shared/models/book";
interface BookModel extends mongoose.Model<BookDoc> {
  createNewBook(book: BookAttrs): BookDoc;
}

interface BookDoc extends mongoose.Document {
  name: string;
  genre: string;
  price: number;
  author_id: ObjectId;
}

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    author_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        (ret.id = ret._id.toString()), delete ret.author_id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

bookSchema.statics.createNewBook = (book: BookAttrs) => {
  return new Book(book);
};

const Book = mongoose.model<BookDoc, BookModel>("books", bookSchema);

export { Book };
