import api from "./api";

export const submitResponse = async (
     pollId,
     payload
) => {
     const response = await api.post(
          `/responses/${pollId}`,
          payload
     );

     return response.data;
};

export const checkVoteStatus = async (
     pollId,
     anonymousId
) => {
     const response = await api.get(
          `/responses/status/${pollId}`,
          {
               params: {
                    anonymousId,
               },
          }
     );

     return response.data;
};