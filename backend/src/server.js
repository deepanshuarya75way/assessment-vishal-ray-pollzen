import { createServer } from 'http';

import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
import createApp from './app.js';
import { initSocket } from './config/socket.js';
import { initializeSocket } from './sockets/index.js';
import logger from './utils/logger.js';

// Load environment variables from .env file
dotenv.config();

async function main() {
  try {
    // Create an HTTP server
    const server = createServer(createApp());

    // Socket Server
    const io = initSocket(server);

    // PORT
    const PORT = process.env.PORT || 6000;

    // connect DB
    await connectDB();

    // Initialize socket events
    initializeSocket(io);

    // Handle server errors (eg. port in use)
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        logger.fatal({ err }, `Port ${PORT} is already in use`);
        process.exit(1);
      }
      logger.error({ err }, 'Server error');
    });

    // Start the server
    server.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error({ err: error }, 'DB Connection Error');
    process.exit(1);
  }
}

// Run the main function
main();
