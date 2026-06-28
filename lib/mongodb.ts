/**
 * MongoDB Atlas connection helper.
 *
 * Uses a global cached connection so that serverless functions
 * re-use the same connection across warm invocations instead of
 * opening a new one on every request.
 *
 * Setup:
 *   1. Create a free cluster at https://cloud.mongodb.com
 *   2. Add a database user and allow access from 0.0.0.0/0 (or Vercel IPs)
 *   3. Copy the connection string and add it to your environment:
 *        MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/website-hero?retryWrites=true&w=majority
 *   4. In Vercel dashboard: Settings → Environment Variables → add MONGODB_URI
 */

import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) {
  throw new Error(
    'Please define MONGODB_URI in your .env.local file or Vercel environment variables.\n' +
    'Get your connection string from: https://cloud.mongodb.com'
  )
}

declare global {
  // eslint-disable-next-line no-var
  var __mongoose_conn: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
}

if (!global.__mongoose_conn) {
  global.__mongoose_conn = { conn: null, promise: null }
}

export async function connectDB(): Promise<typeof mongoose> {
  if (global.__mongoose_conn.conn) {
    return global.__mongoose_conn.conn
  }

  if (!global.__mongoose_conn.promise) {
    global.__mongoose_conn.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  global.__mongoose_conn.conn = await global.__mongoose_conn.promise
  return global.__mongoose_conn.conn
}
