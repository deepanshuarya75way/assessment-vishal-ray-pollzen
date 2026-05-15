import axios from "axios";

// base API
const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1",
});

// add interceptors to request 
api.interceptors.request.use((config) => {
     const token = localStorage.getItem("token");

     if (token) {
          config.headers.Authorization = `Bearer ${token}`;
     }

     return config;
});

export default api;