import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//Connect to Database using mongoose
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); //1 means failure, 0 means success
  }
};
