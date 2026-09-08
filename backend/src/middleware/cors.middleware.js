import dotenv from 'dotenv';

dotenv.config();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
  : [];

const corsOptions = {
  origin: (origin, callback) => {
    //  Allow requests with no origin
    if (!origin) return callback(null, true);

    // Check if the current origin is in our allowed list
    const isAllowed = allowedOrigins.includes(origin) || allowedOrigins.includes('*');

    if (isAllowed) {
      callback(null, true);
    } else {
      // We pass a custom message to your ApiError handler eventually
      callback(new Error('Not allowed by CORS'));
    }
  },
  // Allow cookies/sessions to be sent across domains
  credentials: true,

  optionsSuccessStatus: 200,

  // Allow common headers
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
};

export default corsOptions;
