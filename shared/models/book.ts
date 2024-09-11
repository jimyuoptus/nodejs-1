import{ ObjectId } from "mongoose";

export interface BookAttrs {
  name: string;
  genre: string;
  price: number;
  author_id: ObjectId;
  id: ObjectId;
}
