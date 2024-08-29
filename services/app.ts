import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import cors from "cors";
import { bookRouter } from "./routes/books";
import { signUpRouter } from "./routes/signup";
import { errorHandler } from "../shared/middlewares/error-handler";

const app = express();

app.use(json());
app.use(cors());
app.use(bookRouter);
app.use(signUpRouter);

app.use(errorHandler);


export { app };
