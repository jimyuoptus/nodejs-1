import { model, Schema, Model, Document } from "mongoose";
import { AuthorAttrs } from "../../shared/models/author";

interface AuthorModel extends Model<AuthorDoc> {
  createNewAuthor(book: AuthorAttrs): AuthorDoc;
}

interface AuthorDoc extends Document {
  name: string;
  age: string;
}

const authorSchema = new Schema({
  name: { type: String, require: true },
  age: { type: String, required: true },
});

const Author = model<AuthorDoc, AuthorModel>("authors", authorSchema);

authorSchema.statics.createNewAuthor = (author: AuthorAttrs) => {
  return new Author(author);
};

export { Author };
