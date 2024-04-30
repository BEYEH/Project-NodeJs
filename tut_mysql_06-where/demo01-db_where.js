import mysql from "mysql";

var host = "localhost";
var usr = "yourusername";
var pwd = "yourpassword";
var db = "yourdb";

var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";

var con = mysql.createConnection({
  host: host,
  user: usr,
  password: pwd,
  database: db,
});

con.connect(function (err) {
  if (err) throw err;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
