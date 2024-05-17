class ClientError extends Error {
  constructor(message = "Terjadi kesalahan pada sisi klien", status = 400) {
    super(message);
    this.status;
  }

  setStatus(newStatus) {
    this.status = newStatus;
  }
}

class ServerError extends Error {
  constructor(message = "Terjadi kesalahan pada sisi server", status = 500) {
    super(message);
    this.status;
  }

  setStatus(newStatus) {
    this.status = newStatus;
  }
}

const customError = { ClientError, ServerError };
export default customError;
