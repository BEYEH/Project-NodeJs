import mongoose from "mongoose";

const DB_URI = "mongodb://localhost:27017/mydb";
const COLL_CUSTOMERS = "customers";
const DB_MYDB = "mydb";

var myObject = [
  { name: "John", address: "Highway 71" },
  { name: "Peter", address: "Lowstreet 4" },
  { name: "Amy", address: "Apple st 652" },
  { name: "Hannah", address: "Mountain 21" },
  { name: "Michael", address: "Valley 345" },
  { name: "Sandy", address: "Ocean blvd 2" },
  { name: "Betty", address: "Green Grass 1" },
  { name: "Richard", address: "Sky st 331" },
  { name: "Susan", address: "One way 98" },
  { name: "Vicky", address: "Yellow Garden 2" },
  { name: "Ben", address: "Park Lane 38" },
  { name: "William", address: "Central st 954" },
  { name: "Chuck", address: "Main Road 989" },
  { name: "Viola", address: "Sideway 1633" },
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
      // console.log("result: " + JSON.stringify(res));
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
