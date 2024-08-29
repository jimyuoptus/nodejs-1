export class DbConnectionError extends Error {
  constructor() {
    super();
    Object.setPrototypeOf(this, DbConnectionError.prototype);
  }
}
