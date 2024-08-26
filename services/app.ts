import express from "express";
import { json } from "body-parser";
import cors from "cors";
import { bookRouter } from "./routes/books";

const app = express();

app.use(json());
app.use(cors());
app.use(bookRouter);

export { app };