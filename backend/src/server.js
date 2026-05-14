import { createServer } from 'http';

import dotenv from 'dotenv';
import { Server } from 'socket.io'

import { connectDB } from './config/db.js';
import createApp from './app.js'
import { initSocket } from './config/socket.js';
import { initializeSocket } from "./sockets/index.js";

// Load environment variables from .env file
dotenv.config();

async function main() {

     try {
          // Create an HTTP server
          const server = createServer(createApp());

          // Socket Server
           const io = initSocket(server)

          // PORT
          const PORT = process.env.PORT || 3000;

          // connect DB
          await connectDB();

          // Initialize socket events
          initializeSocket(io);

          // Start the server
          server.listen(PORT, () => {
               console.log(`Server is running on port ${PORT}`);
          });

     } catch (error) {
          console.error("DB Connection Error", error.message);
          process.exit(1);
     }
}

// Run the main function
main();
