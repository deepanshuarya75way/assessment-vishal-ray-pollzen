import { registerPollSocket } from './poll.socket.js';

import logger from '../utils/logger.js';

export const initializeSocket = (io) => {
  io.on('connection', (socket) => {
    logger.debug({ socketId: socket.id }, 'Socket connected');

    // Register poll events
    registerPollSocket(io, socket);

    socket.on('disconnect', () => {
      logger.debug({ socketId: socket.id }, 'Socket disconnected');
    });
  });
};
