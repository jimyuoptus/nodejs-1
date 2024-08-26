import { ObjectId } from "mongoose";

export interface BookAttrs {
  //TODO: fix this id? issue
  id?: string;
  name: string;
  genre: string;
  price: number;
  author_id: ObjectId;
}
