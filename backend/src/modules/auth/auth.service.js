import { User } from "./auth.model.js";
import { ApiError } from "../../utils/ApiError.js";
import jwt from "jsonwebtoken";

export const register = async (userData) => {
     const { name, email, password } = userData;

     const existedUser = await User.findOne({ email });
     if (existedUser) {
          throw new ApiError(409, "User with this email already exists");
     }

     const user = await User.create({ name, email, password });

     // Remove password from the returned object
     const userWithoutPassword = await User.findById(user._id).select("-password");
     return userWithoutPassword;
};

export const login = async (email, password) => {
     const user = await User.findOne({ email }).select("+password");

     if (!user || !(await user.isPasswordCorrect(password))) {
          throw new ApiError(401, "Invalid email or password");
     }

     const token = jwt.sign(
          { id: user._id },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRY }
     );

     // Remove unnessary feild
     const loggesInuser = user.toObject();
     delete loggesInuser.password;
     delete loggesInuser.createdAt;
     delete loggesInuser.updatedAt;
   
     return { user : loggesInuser, token };
};

export const me = async (userId) => {
     const user = await User.findById(userId).select('-password');

     return user;
}