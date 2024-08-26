import { ErrorBase } from "./error-base";

export class NotFoundError extends ErrorBase {
  statusCode = 404;
  constructor(message:string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  serializeErrors() {
    return [{ message: "Not Found Error" }];
  }
}
