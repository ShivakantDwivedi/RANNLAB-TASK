import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Database is Connected");
  } catch {
    console.log("Error Occurs");
  }
};

export default connectdb;
