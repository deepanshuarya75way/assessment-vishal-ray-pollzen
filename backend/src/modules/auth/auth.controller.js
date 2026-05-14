import * as authService from "./auth.service.js";
import { ApiResponse } from "../../utils/ApiResponse.js";

export const registerUser = async (req, res, next) => {
     try {
     
          // Register service
          const user = await authService.register(req.body);

          return res.status(201).json(
               new ApiResponse(201, user, "User registered successfully")
          );
     } catch (error) {
          next(error);
     }
};

export const loginUser = async (req, res, next) => {
     try {
          const { email, password } = req.body;
          const { user, token } = await authService.login(email, password);

          return res.status(200).json(
               new ApiResponse(200, { user, token }, "Login successful")
          );
     } catch (error) {
          next(error);
     }
};

export const me = async (req, res, next) => {
    try {
      const userId = req.user.id;
 
      const user = await authService.me(userId);
 
      return res.status(200).json(
           new ApiResponse(200, user, "data fetch successfully")
      )
    } catch (error) {
      next(error)
    }
}