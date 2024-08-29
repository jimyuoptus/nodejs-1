import { ErrorBase } from "./error-base";

export class AlreadyExistedError extends ErrorBase {
  statusCode = 409;
  constructor(message: string) {
    super(message);
    // because we are extending a built in class
    Object.setPrototypeOf(this, AlreadyExistedError.prototype);
  }

  getError(): { message: string; field?: string } {
    return { message: this.message ?? "Object Already Existed Error" };
  }
}
