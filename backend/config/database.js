const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  const uri = process.env.MONGODB_URL;
  if (!uri) {
    throw new Error("MONGODB_URL is not defined in environment variables");
  }
  try {
    await mongoose.connect(uri);
    console.log("DB Connection Successful");
  } catch (error) {
    console.error("DB Connection Issues:", error);
    throw error;
  }
};
