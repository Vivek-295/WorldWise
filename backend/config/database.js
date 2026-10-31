const mongoose = require("mongoose");
require("dotenv").config();

let isConnected = false;

exports.connect = async () => {
  if (isConnected) {
    return;
  }
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    console.error("MONGODB_URL is not defined in environment variables");
    return;
  }
  try {
    const db = await mongoose.connect(uri);
    isConnected = db.connections[0].readyState === 1;
    console.log("DB Connection Successful");
  } catch (error) {
    console.error("DB Connection Issues:", error);
  }
};
