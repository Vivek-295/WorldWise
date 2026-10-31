const mongoose = require("mongoose");
require("dotenv").config();

let cachedPromise = null;

exports.connect = async () => {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error("MONGODB_URL is not defined in environment variables");
  }

  if (!cachedPromise) {
    cachedPromise = mongoose.connect(uri, {
      serverSelectionTimeoutMS: 8000,
      connectTimeoutMS: 8000,
    }).then((m) => {
      console.log("DB Connection Successful");
      return m;
    }).catch((err) => {
      cachedPromise = null;
      console.error("DB Connection Issues:", err.message);
      throw err;
    });
  }

  return cachedPromise;
};
