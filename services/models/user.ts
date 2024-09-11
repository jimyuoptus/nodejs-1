import mongoose from "mongoose";
import { UserAttrs } from "../../shared/models/user";

interface UserModel extends mongoose.Model<UserDoc> {
  createNewUser(user: UserAttrs): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, require: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toString();
        delete ret.password;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

userSchema.statics.createNewUser = (user: UserAttrs) => {
  return new User(user);
};

const User = mongoose.model<UserDoc, UserModel>("users", userSchema);


User.createNewUser({ email: "acb", password: "1234" });

export { User };
