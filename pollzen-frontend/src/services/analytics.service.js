import api from "./api";

export const getPollAnalytics = async (
     pollId
) => {
     const response = await api.get(
          `/analytics/${pollId}`
     );

     return response.data;
};