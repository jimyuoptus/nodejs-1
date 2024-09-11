import { Request, Response, NextFunction } from "express";
import { ErrorBase } from "../errors/error-base";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).send({ error: err.getError() });
  }

  console.error(err);
  res.status(400).send({
    error: { message: "Something went wrongr!" },
  });
};
