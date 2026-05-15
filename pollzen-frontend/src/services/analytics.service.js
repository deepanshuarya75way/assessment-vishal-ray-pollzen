import api from "./api";

// get poll analytics
export const getPollAnalytics = async (pollId) => {

     // send request
     const response = await api.get(`/analytics/${pollId}` );

     // return response
     return response.data;
};