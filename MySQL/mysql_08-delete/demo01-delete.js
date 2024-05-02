import mysql from "mysql";

var host = "localhost";
var usr = "yourusername";
var pwd = "yourpassword";
var db = "yourdb";

var addr = "Lowstreet 4";
var sql = "DELETE FROM customers WHERE address = ?";

var con = mysql.createConnection({
  host: host,
  user: usr,
  password: pwd,
  database: db,
});

con.connect(function (err) {
  if (err) throw err;
  con.query(sql, [addr], function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
