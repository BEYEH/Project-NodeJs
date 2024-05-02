import mongoose from "mongoose";

var url = "mongodb://localhost:27017/";

const connection = mongoose.createConnection(url);

connection.on("open", () => {
  console.log("Connection start!");
  console.log("readyState:" + connection.readyState);
});

connection.close();

connection.on("close", () => {
  console.log("Connection stop!");
  console.log("readyState:" + connection.readyState);
});

