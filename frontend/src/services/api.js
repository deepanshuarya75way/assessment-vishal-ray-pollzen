import axios from "axios";

// base API
const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api/v1",
});

// add interceptors to request 
api.interceptors.request.use((config) => {
     let token = localStorage.getItem("token");

     // defensive: treat literal 'null'/'undefined' as no token
     if (token === 'null' || token === 'undefined') {
          try {
               localStorage.removeItem('token');
          } catch (e) {
               /* ignore */
          }
          token = null;
     }

     if (token) {
          config.headers.Authorization = `Bearer ${token}`;
     }

     return config;
});

// add response interceptor to handle auth expiration globally
api.interceptors.response.use(
     (res) => res,
     (err) => {
          const status = err?.response?.status;
          if (status === 401) {
               try {
                    localStorage.removeItem("token");
               } catch (e) {
                    /* ignore */
               }
               if (typeof window !== "undefined") {
                    // redirect to login to re-auth
                    window.location.href = "/login";
               }
          }
          return Promise.reject(err);
     }
);

export default api;