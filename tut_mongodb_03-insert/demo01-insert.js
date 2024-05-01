import mongoose from "mongoose";

const serverUri = "mongodb://localhost:27017/";
const dbName = "mydb";
const collectionName = "customers";

const connectToServer = async () => {
  console.log("connectToServer...");
  await mongoose
    .connect(serverUri)
    .then(() => {
      console.log("Connected to MongoDB server.");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB server:", err);
    });
};

const connectToDatabase = () => {
  console.log("connectToDatabase...");
  try {
    const db = mongoose.connection.useDb(dbName);
    console.log(`Switched to database '${db.name}'`);
  } catch (err) {
    console.error("Error switching to database:", err);
  }
};

const createColl = async () => {
  console.log("createColl...");
  if (mongoose.connection.readyState !== 1) {
    throw new Error("MongoDB connection not ready");
  }

  const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
  });

  const Customer = mongoose.model(collectionName, customerSchema);

  try {
    await Customer.createCollection();
    console.log("Collection created!");
  } catch (err) {
    console.error("Error creating collection:", err);
    throw err;
  }
};

const insertData = async () => {
  var dbo = mongoose.connection.useDb(dbName);
  var myobj = { name: "Company Inc", address: "Highway 37" };
  await dbo.collection(collectionName).insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });
};

const disconnectFromServer = () => {
  console.log("disconnectFromServer...");
  mongoose
    .disconnect()
    .then(() => {
      console.log("Disconnected from MongoDB server.");
    })
    .catch((err) => {
      console.error("Error disconnecting from MongoDB server:", err);
      throw err;
    });
};

const main = async () => {
  try {
    await connectToServer();
    connectToDatabase();
    await createColl();
    await insertData();
    disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
