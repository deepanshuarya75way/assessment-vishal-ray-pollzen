export const registerPollSocket = (io, socket) => {

     // Join poll room
     socket.on("join-poll", (pollId) => {

          const roomName = `poll:${pollId}`;

          socket.join(roomName);

          console.log(`Socket ${socket.id} joined ${roomName}`);
     });

     // Leave poll room
     socket.on("leave-poll", (pollId) => {

          const roomName = `poll:${pollId}`;

          socket.leave(roomName);

          console.log(`Socket ${socket.id} left ${roomName}`);
     });
};