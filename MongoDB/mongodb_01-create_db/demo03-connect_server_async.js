import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/";

const connectAndDisconnect = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

const main = async () => {
  try {
    await connectAndDisconnect(uri);
  } catch (err) {
    console.error("An error occurred in the main function:", err);
  }
};

main();
