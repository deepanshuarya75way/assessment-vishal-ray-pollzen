import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    logger.warn('MONGO_URI not set; skipping MongoDB connection (development mode)');
    return;
  }

  try {
    await mongoose.connect(uri);
    logger.info('MongoDB connected');
  } catch (error) {
    logger.error({ err: error }, 'MongoDB connection error');
    // In production we should fail fast so the issue is visible to orchestrators.
    const isStrict = process.env.DB_STRICT === 'true' || process.env.NODE_ENV === 'production';
    if (isStrict) {
      logger.fatal({ err: error }, 'Exiting due to MongoDB connection failure (strict mode)');
      process.exit(1);
    }

    // In non-strict mode (development), continue without DB to allow local frontend/dev work.
    return;
  }
};
