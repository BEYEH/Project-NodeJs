import mysql from "mysql";

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

con.end(function (err) {
  if (err) throw err;
  console.log("Disconnected!");
});
