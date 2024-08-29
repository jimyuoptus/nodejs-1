export abstract class ErrorBase extends Error {
  abstract statusCode: number;

  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, ErrorBase.prototype);
  }

  abstract getError(): { message: string; field?: string };
}
