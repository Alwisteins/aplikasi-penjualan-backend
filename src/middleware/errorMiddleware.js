import { ClientError, ServerError } from "../utils/error";

const errorMiddleware = (err, req, res, next) => {
  if (err & !(err instanceof ClientError)) {
    err = new ServerError();
  }

  console.log(err);
  return res.status(err.status || 500).json({ message: err.message });
};

export default errorMiddleware;
