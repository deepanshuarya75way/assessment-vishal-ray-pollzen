import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || "http://localhost:4000";

// init socket instance (do not auto connect)
export const socket = io(SOCKET_URL, { autoConnect: false });

export function connectSocket() {
     let token = localStorage.getItem("token");

     if (token === 'null' || token === 'undefined') {
          try {
               localStorage.removeItem('token');
          } catch (e) {
               // ignore
          }
          token = null;
     }

     if (token) {
          socket.auth = { token: `Bearer ${token}` };
     } else {
          socket.auth = {};
     }
     socket.connect();
}

export function disconnectSocket() {
     try {
          socket.disconnect();
     } catch (e) {
          // ignore
     }
}