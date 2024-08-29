import { ValidationError } from "express-validator";
import { ErrorBase } from "./error-base";

export class RequestValidationError extends  ErrorBase {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super();
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  getError(): { message: string; field?: string } {
    const errors = this.errors.map((err: ValidationError) => `${err.msg}`);
    return { message: errors.join("<br/>") };

    // return this.errors.reduce((err) => {
    //   return `${err.msg}`;
    // });
    // throw new Error("Method not implemented.");
  }
}
