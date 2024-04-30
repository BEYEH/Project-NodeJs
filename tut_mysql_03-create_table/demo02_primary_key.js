import mysql from "mysql";

var host = "localhost";
var usr = "yourusername";
var pwd = "yourpassword";
var db = "yourdb";

var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

var con = mysql.createConnection({
  host: host,
  user: usr,
  password: pwd,
  database: db,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});
