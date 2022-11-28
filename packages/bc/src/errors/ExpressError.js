class ExpressError extends Error {
  constructor({ data, message, status, statusCode }) {
    super(message);
    this.message = message;
    this.status = status;
    this.statusCode = statusCode;
    this.data = data;
  }

  toJSON = () => {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode,
      data: this.data,
    };
  };
}

module.exports = { ExpressError };