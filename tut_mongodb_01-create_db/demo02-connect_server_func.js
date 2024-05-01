import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/";

const connectAndDisconnect = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
      mongoose
        .disconnect()
        .then(() => {
          console.log("Disconnected from MongoDB");
        })
        .catch((err) => {
          console.error("Error disconnecting from MongoDB:", err);
        });
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

const main = () => {
  try {
    connectAndDisconnect(uri);
  } catch (err) {
    console.error("An error occurred in the main function:", err);
  }
};

main();
