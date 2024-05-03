import mongoose from "mongoose";

const DB_MYDB_URI = "mongodb://localhost:27017/mydb";
const COLL_ORDERS = "orders";
const COLL_PRODUCTS = "products";

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
    (coll) => coll.name === COLL_ORDERS
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

const joinData = async () => {
  console.log("join data ...");

  var data = await mongoose.connection
    .collection(COLL_ORDERS)
    .aggregate([
      {
        $lookup: {
          from: COLL_PRODUCTS,
          localField: "product_id",
          foreignField: "_id",
          as: "orderdetails",
        },
      },
    ])
    .toArray();

  console.log(JSON.stringify(data));
  console.log(data);
};

const main = async () => {
  try {
    await connectToDb();
    var collectionExists = checkCollection();
    if (collectionExists) {
      await joinData();
    }
    disconnectFromServer();
  } catch (err) {
    console.error(err);
  }
};

main();
