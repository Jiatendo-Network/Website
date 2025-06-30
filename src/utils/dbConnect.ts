import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
    var mongoose: { conn: Connection | null; promise: Promise<Connection> | null } | undefined;
}

const cached = global.mongoose ?? { conn: null, promise: null };
if (!global.mongoose) {
    global.mongoose = cached;
}

async function dbConnect(): Promise<Connection> {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        }).then((mongooseInstance) => mongooseInstance.connection);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;
