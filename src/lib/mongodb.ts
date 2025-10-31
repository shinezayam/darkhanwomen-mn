import mongoose from 'mongoose';

/**
 * MongoDB connection manager with caching for serverless environments
 * Prevents connection exhaustion in Next.js API routes
 */

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

// Cache for MongoDB connection to avoid creating multiple connections
const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

/**
 * Connect to MongoDB database
 * Uses cached connection in serverless environments
 * @returns {Promise<typeof mongoose>} Mongoose instance
 */
async function connectDB(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local'
    );
  }

  // Return cached connection if available
  if (cached.conn) {
    return cached.conn;
  }

  // Return cached promise if connection is in progress
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected successfully');
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;

