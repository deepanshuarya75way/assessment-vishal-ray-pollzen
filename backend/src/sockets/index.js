import { registerPollSocket } from "./poll.socket.js";

export const initializeSocket = (io) => {

     io.on("connection", (socket) => {

          console.log(
               `Socket connected: ${socket.id}`
          );

          // Register poll events
          registerPollSocket(io, socket);

          socket.on("disconnect", () => {

               console.log(
                    `Socket disconnected: ${socket.id}`
               );
          });
     });
};