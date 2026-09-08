import { ApiError } from '../utils/ApiError.js';
import { ZodError } from 'zod';

const validate = (schema) => (req, res, next) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    next();
  } catch (err) {
    // err from ZodError
    if (err instanceof ZodError) {
      const errorMessage = err.issues
        .map((issue) => `${issue.path.join('.')} is ${issue.message.toLowerCase()}`)
        .join(', ');

      return next(new ApiError(400, errorMessage));
    }

    // Fallback for non-Zod errors
    next(new ApiError(500, err.message || 'Internal Server Error during validation'));
  }
};

export default validate;
