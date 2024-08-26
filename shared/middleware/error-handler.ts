import { Request, Response, NextFunction } from "express";
import { ErrorBase } from "../errors/error-base";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ErrorBase) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors });
  }
    
    console.error(err);
    res.status(500).send({
      errors: [{ message: "Something went wrong" }],
    });
};
