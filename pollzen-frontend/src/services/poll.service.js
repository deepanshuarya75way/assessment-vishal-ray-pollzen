import api from "./api";

export const createPoll = async (payload) => {
     const response = await api.post(
          "/polls/create",
          payload
     );

     return response.data;
};

export const getMyPolls = async () => {
     const response = await api.get(
          "/polls/my"
     );

     return response.data;
};

export const getPollById = async (
     pollId
) => {
     const response = await api.get(
          `/polls/${pollId}`
     );

     return response.data;
};

export const publishPoll = async (
     pollId
) => {
     const response = await api.patch(
          `/polls/${pollId}/publish`
     );

     return response.data;
};

export const closePoll = async (
     pollId
) => {
     const response = await api.patch(
          `/polls/${pollId}/close`
     );

     return response.data;
};

export const deletePoll = async (
     pollId
) => {
     const response = await api.delete(
          `/polls/${pollId}`
     );

     return response.data;
};