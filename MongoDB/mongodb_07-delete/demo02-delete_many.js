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

const deleteMany = async () => {
  console.log("delete many datas ...");

  // delete datas
  var myquery = { address: /^O/ };
  await mongoose.connection.collection(COLL_CUSTOMERS).deleteMany(myquery);

  // Return all datas in collection.
  const datas = await mongoose.connection.collection(COLL_CUSTOMERS).find({}).toArray();

  console.log(datas);
  return datas;
};

const main = async () => {
  try {
    await connectToDb();
    var collectionExists = checkCollection();
    if (collectionExists) {
      await deleteMany();
    }
    disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
