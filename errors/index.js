/**
 * Generic class for error that will be extended by other errors.
 */

class CustomError extends Error {
  constructor(message, details ) {
    super(message);
    this.details = details;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

module.exports =  CustomError;