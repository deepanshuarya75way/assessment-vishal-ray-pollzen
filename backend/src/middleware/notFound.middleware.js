import { ApiError } from '../utils/ApiError.js';

// Page not found handler
const notFound = (req, res, next) => {
  next(new ApiError(404, `Not Found - ${req.originalUrl}`));
};

export { notFound };
