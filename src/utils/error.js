export class ServerError extends Error {
  constructor(message = "Terjadi kesalahan pada sisi server", status = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}

export class ClientError extends ServerError {
  constructor(message = "Terjadi kesalahan pada sisi klien", status = 400) {
    super(message, status);
  }
}
