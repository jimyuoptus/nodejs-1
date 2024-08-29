import { ErrorBase } from "./error-base";

export class NotFoundError extends ErrorBase {
  statusCode = 404;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  getError() {
    return { message: this.message ?? "Not Found Error" };
  }
}
