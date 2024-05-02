import mongoose from "mongoose";

const DB_MYDB_URI = "mongodb://localhost:27017/mydb";
const COLL_CUSTOMERS = "customers";

const connectToDb = async () => {
  console.log("connect to DB...");
  await mongoose
    .connect(DB_MYDB_URI)
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
  const collectionExists = collections.some(
    (coll) => coll.name === COLL_CUSTOMERS
  );

  return collectionExists;
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

const updateOne = async () => {
  console.log("update one data ...");
  var myquery = { address: "Valley 345" };
  var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
  await mongoose.connection
    .collection(COLL_CUSTOMERS)
    .updateOne(myquery, newvalues);
};

const findAllDatas = async () => {
  console.log("finding all datas ...");
  var dbo = mongoose.connection;
  // Return all datas in collection.
  const datas = await dbo.collection(COLL_CUSTOMERS).find({}).toArray();
  console.log(datas);
};

const main = async () => {
  try {
    await connectToDb();
    var collectionExists = checkCollection();
    if (collectionExists) {
      await updateOne();
    }
    await findAllDatas();
    disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
