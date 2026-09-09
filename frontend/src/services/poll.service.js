import api from "./api";

// create poll service
export const createPoll = async (payload) => {
     const response = await api.post("/polls/create", payload );

     return response.data;
};

// get all polls
export const getMyPolls = async () => {
     const response = await api.get( "/polls/my");

     return response.data;
};

// get particular poll 
export const getPollById = async ( pollId) => {
     const response = await api.get(`/polls/${pollId}` );

     return response.data;
};

// published poll
export const publishPoll = async (pollId) => {
     const response = await api.patch(`/polls/${pollId}/publish`);

     return response.data;
};

// close poll
export const closePoll = async (pollId) => {
     const response = await api.patch(`/polls/${pollId}/close`);

     return response.data;
};

// delete poll
export const deletePoll = async (pollId) => {
     const response = await api.delete(`/polls/${pollId}` );

     return response.data;
};