import api from "./api";

// submit response service
export const submitResponse = async (pollId,payload) => {
     const response = await api.post(`/responses/${pollId}`,payload);

     return response.data;
};

// status of poll
export const checkVoteStatus = async (pollId,anonymousId) => {
     const response = await api.get(`/responses/status/${pollId}`,
          { params: {anonymousId}});

     return response.data;
};