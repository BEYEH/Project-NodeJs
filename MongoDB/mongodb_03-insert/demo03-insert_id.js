import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/mydb";
const COLL_CUSTOMERS = "customers";
const DB_MYDB = "mydb2";

var myObject = [
  { _id: 154, name: "Chocolate Heaven" },
  { _id: 155, name: "Tasty Lemon" },
  { _id: 156, name: "Vanilla Dream" },
];

const connectToDb = async () => {
  console.log("connect to DB...");
  await mongoose
    .connect(DB_URI)
    .then(() => {
      console.log("Connected to db in MongoDB server.");
    })
    .catch((err) => {
      console.error("Error connecting to db in MongoDB server:", err);
    });
};

const checkCollection = async () => {
  console.log("checkCollection...");

  const collections = await mongoose.connection.db.listCollections().toArray();
  collections.forEach(function (entry) {
    console.log(entry);
  });
  const collectionExists = collections.some(
    (coll) => coll.name === COLL_CUSTOMERS
  );

  return collectionExists;
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

  const Customer = mongoose.model(COLL_CUSTOMERS, customerSchema);

  try {
    await Customer.createCollection();
    console.log("Collection created!");
  } catch (err) {
    console.error("Error creating collection:", err);
    throw err;
  }
};

const insertData = async () => {
  console.log("insertData...");
  var dbo = mongoose.connection.useDb(DB_MYDB);
  await dbo
    .collection(COLL_CUSTOMERS)
    .insertMany(myObject, function (err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      console.log("result: " + JSON.stringify(res));
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
    await connectToDb();
    var collectionExists = await checkCollection();
    if (!collectionExists) {
      await createColl();
    }
    await insertData();
    disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
