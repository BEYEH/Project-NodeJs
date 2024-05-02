import mongoose from "mongoose";

const serverUri = "mongodb://localhost:27017/";
const dbName = "mydb";

const connectToServer = async () => {
  try {
    await mongoose.connect(serverUri);
    console.log("Connected to MongoDB server");
  } catch (err) {
    console.error("Error connecting to MongoDB server:", err);
    throw err;
  }
};

const connectToDatabase = async () => {
  try {
    const db = mongoose.connection.useDb(dbName);
    console.log(`Switched to database '${db.name}'`);
    return db;
  } catch (err) {
    console.error("Error switching to database:", err);
    throw err;
  }
};

const disconnectFromServer = async () => {
  try {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB server");
  } catch (err) {
    console.error("Error disconnecting from MongoDB server:", err);
    throw err;
  }
};

const main = async () => {
  try {
    await connectToServer();
    const db = await connectToDatabase();

    // Do something with db.

    await disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
