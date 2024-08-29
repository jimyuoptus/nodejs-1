import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, require: true },
}, {
    toJSON: {
        transform(doc, ret) {
        ret.id = ret._id.toString();
        delete ret.password;
        delete ret._id;
        delete ret.__v;
        },
    },
});

export const User = mongoose.model("users", userSchema);
