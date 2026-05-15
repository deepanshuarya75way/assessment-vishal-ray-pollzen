import api from "./api";

// regsiter service
export const registerUser = async (payload) => {

     // api call
     const response = await api.post("/auth/register",payload);
 
     // return response
     return response.data;
};

// login service
export const loginUser = async (payload) => {
     // api call
     const response = await api.post("/auth/login", payload);

     // return response
     return response.data;
};

// current user
export const getCurrentUser = async () => {
     const response = await api.get("/auth/me");

     return response.data;
};