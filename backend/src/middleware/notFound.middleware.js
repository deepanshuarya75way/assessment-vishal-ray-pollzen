import { ApiError } from "../utils/ApiError.js";

// page not foud
const notFound = (req, res, next) => {
     next(new ApiError(404, `Not Found - ${req.originalUrl}`));
};

export { notFound };