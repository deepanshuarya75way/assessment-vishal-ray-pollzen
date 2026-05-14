import { ApiResponse } from '../../utils/ApiResponse.js'

export const healthCheck = async (req, res, next) => {
    try {
         const healthStatus = {
              uptime: process.uptime(),
              message: "OK",
              timestamp: Date.now(),
            };

      return res.status(200).json(
           new ApiResponse(200, healthStatus, "Health check performed successfully")
      );
    } catch (error) {
     next(error)
    }
}