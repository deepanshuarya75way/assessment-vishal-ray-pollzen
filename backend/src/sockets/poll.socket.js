export const registerPollSocket = (io, socket) => {
  // Join poll room
  socket.on('join-poll', (pollId) => {
    const roomName = `poll:${pollId}`;

    socket.join(roomName);
  });

  // Leave poll room
  socket.on('leave-poll', (pollId) => {
    const roomName = `poll:${pollId}`;

    socket.leave(roomName);
  });
};
