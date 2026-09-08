import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../modules/auth/auth.model.js';

const isloggedin = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    const token =
      authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : undefined;

    if (!token) {
      throw new ApiError(401, 'Unauthorized: No token provided');
    }

    // Verify token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Find user
    const user = await User.findById(decodedToken?.id).select('-password');

    if (!user) {
      throw new ApiError(401, 'Invalid Access Token: User not found');
    }

    // attach user to request
    req.user = user;
    next();
  } catch (error) {
    // Error for Token Expires
    if (error.name === 'TokenExpiredError') {
      return next(new ApiError(401, 'Token expired, please login again'));
    }

    next(new ApiError(401, error?.message || 'Invalid access token'));
  }
};

// Optional Auth
const optionalAuthenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    return isloggedin(req, res, next);
  }
  next();
};

export { isloggedin, optionalAuthenticate };
