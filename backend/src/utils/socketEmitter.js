import { getIO } from '../config/socket.js';

export const emitPollUpdate = (pollId, payload = {}) => {

     const roomName = `poll:${pollId}`;
     const io = getIO();

     io.to(roomName).emit("poll-updated",payload  );
};