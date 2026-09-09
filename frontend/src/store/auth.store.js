import { create } from "zustand";

// auth store
export const useAuthStore = create((set) => ({
     user: null,
     token: localStorage.getItem("token") || null,
     isAuthenticated: false,
     isLoading: false,

     // set loading
     setLoading: (value) =>
          set({
               isLoading: value,
          }),

     // set into local storage
     setAuth: ({ user, token }) => {
          localStorage.setItem("token", token);

          set({
               user,
               token,
               isAuthenticated: true,
          });
     },

     // logout
     logout: () => {
          localStorage.removeItem("token");

          set({
               user: null,
               token: null,
               isAuthenticated: false,
          });
     },

     // set user
     setUser: (user) =>
          set({
               user,
               isAuthenticated: true,
          }),
}));